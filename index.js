const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Olá, Mundo!');
});

const server = app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = server;