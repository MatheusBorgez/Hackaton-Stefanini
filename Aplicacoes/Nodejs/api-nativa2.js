const {EventEmitter} = require('events');

const evento = new EventEmitter();

evento.on('teste', (user, msg) => {
    console.log(`O usuário ${user} está dizendo: ${msg}`);
});

evento.emit('teste', 'Matheus', `Mensagem enviada em:${new Date()}`)