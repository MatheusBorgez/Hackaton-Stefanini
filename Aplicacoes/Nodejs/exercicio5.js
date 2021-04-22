const http = require('http');

const host = '127.0.0.1';
const port = '9876';
const URL = `http://${host}:${port}`;

const server = http.createServer((req, resp) => {
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'text/html');
    resp.end(`
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
    <h1>Matheus Andrade Borges<h1>
        <p>Já tenho experiência com Node js, fiz um projeto de um site pro TCC de uma galera de BH</p>
        <p>Realizei esse projeto com o módulo express, foi bem bacana, gosto muito da plataforma Node js e me sinto bem confortável programando em javaScript</p>
        <p>Porém neste curso espero ampliar minha experiência e aprender sobre novos módulos e maneiras de se utilizar o Node js</p>
    </body>`);
});

server.listen(port, host, () => {
    console.log(`Server is running in ${URL}`);
});