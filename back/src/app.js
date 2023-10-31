const express = require('express');
const rotas = require('./services/rotas');
const cors = require('cors'); // Importe a biblioteca

const app = express();

// Configurando o CORS
const corsOptions = {
  origin: 'http://localhost:5173', // A origem permitida
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
  credentials: true, // Permite o envio de cookies e cabeçalhos de autenticação
  optionsSuccessStatus: 204 // Define o código de status para respostas OPTIONS (pré-requisição)
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(rotas);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
