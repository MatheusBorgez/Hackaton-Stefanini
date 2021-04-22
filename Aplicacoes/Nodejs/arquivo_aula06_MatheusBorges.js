const {EventEmitter} = require('events');

const evento = new EventEmitter();

console.log(
    `
Nome                          Data de nascimento
-------------------------------------------------`)
    ;

evento.on('aluno', (nome, dataNascimento) => {
    console.log(`${nome}         ${dataNascimento}`);
});

evento.emit('aluno', 'Matheus Andrade Borges', '04/06/2001')
evento.emit('aluno', 'João da Silva', '06/04/1999')
evento.emit('aluno', 'Ester Adaianne', '10/06/2001')
console.log('-------------------------------------------------')