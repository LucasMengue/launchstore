const User = require("../models/User");
const { compare } = require("bcryptjs");

async function post(req, res, next) {
  // check if has all fields
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") {
      return res.render("user/register", {
        user: req.body,
        error: "Por favor, preencha todos os campos.",
      });
    }
  }

  // check if user exists [email, cpf_cnpj]
  let { email, cpf_cnpj, password, passwordRepeat } = req.body;

  cpf_cnpj = cpf_cnpj.replace(/\D/g, "");

  const user = await User.findOne({
    where: { email },
    or: { cpf_cnpj },
  });

  if (user)
    return res.render("user/register", {
      user: req.body,
      error: "Usuário já cadastrado.",
    });

  // check if password match
  if (password != passwordRepeat)
    return res.render("user/register", {
      user: req.body,
      error: "A senha e a repetição da senha estão incorretas.",
    });

  next();
}
async function update(req, res, next) {
  // check if has all fields
  const fillAllFields = checkAllFields(req.body);
  if (fillAllFields) {
    return res.render("user/register", fillAllFields);
  }

  const { id, password } = req.body;

  if (!password)
    return res.render("user/index", {
      user: req.body,
      error: "Coloque sua senha para atualizar seu cadastro.",
    });

  const user = await User.findOne({ where: { id } });

  const passed = await compare(password, user.password);

  if (!passed)
    return res.render("user/index", {
      user: req.body,
      error: "Senha incorreta.",
    });

  req.user = user;

  next();
}

module.exports = { post, show, update };
