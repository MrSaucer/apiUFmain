const db = require('./db.json');//requisição do banco de dados externo.
const express = require('express');
const app = express();

app.get('/', (req, res) => {

    res.json(db)
});

app.listen(8080, () => {
    let data = new Date();
    console.log("servidor iniciado em: " + data);
    console.log(db[2].nome);
})