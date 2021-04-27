const express = require('express');
const segundaRota = express.Router();

segundaRota.post('', (req, resp) => {
    resp.send(`${req.body.curso}, ${req.body.empresa}, ${req.body.professor}`);
});

segundaRota.patch('/:id', (req, resp) => {
    resp.send(`Metodo PATCH utilizado para atualizar o id ${req.params.id}`);
});

segundaRota.put('/:id', (req, resp) => {
    resp.send(`Metodo PUT utilizado para atualizar o id ${req.params.id}`);
});

segundaRota.delete('/:id', (req, resp) => {
    resp.send(`Metodo DELETE utilizado para atualizar o id ${req.params.id}`);
});

module.exports = segundaRota;