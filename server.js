const db = require('./db.json');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json(db)
});

app.get(('/ac/nome'), (req, res) => {
    res.json(db[0].nome)
});

app.listen(8080, () => {
    let data = new Date();
    console.log("servidor iniciado em: " + data);
})