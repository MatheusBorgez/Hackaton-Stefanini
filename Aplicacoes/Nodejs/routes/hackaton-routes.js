const express = require('express');
const hackatonRoute = express.Router();

hackatonRoute.get('/hackaton/:id', (req, resp) => {
    resp.send(`rota do hackaton ${req.params.id}`);
});

hackatonRoute.post('/hackaton/', (req, resp) => {
    resp.send(`rota do hackaton post: ${req.body.id}`);
});

module.exports = hackatonRoute;