const User = require("../models/User");
const { formatCpfCnpj, formatCep } = require("../../lib/utils");

module.exports = {
  registerForm(req, res) {
    return res.render("user/register");
  },
  async post(req, res) {
    const userId = await User.create(req.body);

    req.session.userId = userId;

    return res.redirect("/users");
  },
  show(req, res) {
    return res.send("ok, cadastrado!");
  },
};
