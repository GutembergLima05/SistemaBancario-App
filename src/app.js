const express = require('express');
const { validarSenha } = require('./services/intermediario');
const rotas = require('./services/rotas');

const app = express();

app.use(express.json());

app.use(validarSenha);
app.use(rotas);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
})