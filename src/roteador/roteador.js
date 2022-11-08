const express = require("express");

const { consultLocales } = require("../controlador/controlador");

const roteador = express();

roteador.get("/locales", consultLocales);

module.exports = roteador;
