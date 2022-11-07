const express = require("express");

const app = express();

const port = process.env.PORT || 8000;

const locales = require("./src/dados/dados.json");

app.get("/locales", (req, res) => {
  return res.json(locales);
});

app.listen(port, () => {
  console.log("Servidor está rodando...");
});
