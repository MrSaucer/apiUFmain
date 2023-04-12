const db = require('./data/db');
const express = require('express');
const app = express();
const controller = require('./controllers/controllers')

const estados = db.uf;

app.get('/', (request, response) => {
    response.status(200).send(estados);
});

app.get('/:id', (request, response) => {
const ufId = Number(request.params.id);
   
//* enviar o parametro para o servico e receber o retorno
// const getUf = estados.find(estado => estado.id === ufId);

 if (!getUf) {
     response.status(400).send('uf invalida');
 } else {
     response.json(getUf);
 }
});

app.listen(8080, () => {
    let data = new Date();
    console.log("servidor iniciado em: " + data);
});