const locales = require("../dados/dados.json");

function consultLocales(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.json(locales);
}

module.exports = { consultLocales };
