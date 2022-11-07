const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 8000;

const locales = require("./src/dados/dados.json");

app.use(cors({ origin: port }));

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", port);

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.get("/locales", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json(locales);
});

app.listen(port, () => {
  console.log("Servidor está rodando...");
});
