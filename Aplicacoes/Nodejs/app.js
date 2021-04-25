const express = require('express');
const app = express();
const hackatonRoutes = require('./routes/hackaton-routes');

app.use(express.json());
app.use('/hackaton', hackatonRoutes);



app.get('/', (req, resp) => {
    resp.send('Projeto hackaton stefanini');
});

const port = 3000;

app.listen(3000, () => {
    console.log(`API rodando na porta ${port}`);
})