const express = require('express');
const api = express();
require('dotenv').config();
const porta = process.env.PORTA_API;
const enderecoBanco = process.env.URL_BD;

const mongoose = require('mongoose');
mongoose.connect(enderecoBanco);
mongoose.connection.on('connected', () => {
  console.log('[AVISO]: Aplicação conectada ao BD!');
});
mongoose.connection.on('disconnected', () => {
  console.log('[AVISO]: Aplicação desconectada do BD!');
});
mongoose.connection.on('error', (erro) => {
  console.log('[ERRO]: Errou ao conectar ao BD!');
  console.log(erro);
});

api.listen(porta, () => {
  console.log('API rodando na porta ' + porta);
});

api.get('/status', (req, res) => {
  res.send({ mensagem: 'API online!' });
});

const disciplinasController = require('./controllers/disciplinas.js');
api.get('/disciplinas', disciplinasController.listarDisciplinas);
api.post('/disciplinas', disciplinasController.adicionarDisciplina);
api.delete('/disciplinas', disciplinasController.removerDisciplinas);