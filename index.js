const express = require("express");
const cors = require("cors");
const roteador = require("./src/roteador/roteador");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({ origin: port }));
app.use(express.json());
app.use(roteador);

app.listen(port, () => {
  console.log("Servidor está rodando...");
});
