const express = require('express');
const contas = require('../controller/contas');
const transacoes = require('../controller/transacoes');
const comprovantes = require('../controller/comprovantes');

const rotas = express();

//contas
rotas.get('/contas', contas.listarContas);
rotas.post('/contas', contas.criarConta);
rotas.put('/contas/:id/usuario', contas.atualizarConta);
rotas.delete('/contas/:id', contas.deletarConta);

//transacoes
rotas.post('/transacoes/depositar', transacoes.depositarTransacao);
rotas.post('/transacoes/sacar', transacoes.sacarTransacao);
rotas.post('/transacoes/transferir', transacoes.transferirTransacao);

//comprovantes
rotas.get('/contas/saldo', comprovantes.saldoConta);
rotas.get('/contas/extrato', comprovantes.extratoConta);

module.exports = rotas;