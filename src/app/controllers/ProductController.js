const Category = require("../models/Category");

module.exports = {
  create(req, res) {
    return res.render("products/create.njk");
  },
};
