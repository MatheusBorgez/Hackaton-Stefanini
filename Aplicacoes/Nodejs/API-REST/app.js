const express = require('express');
const { get } = require('./routes/segundaRota.js');
const app = express();
const segundaRota = require('./routes/segundaRota.js');

app.use(express.json());
app.use('/segundaRota', segundaRota);

const port = 1357;

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});

app.get('/', (req, resp) => {
    resp.sendFile(`${__dirname}/index.html`);
});