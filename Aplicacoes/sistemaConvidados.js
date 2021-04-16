class Convidado {
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
}

let qtdConvidados = Number(prompt("Digite a quantidade de convidados para adicionar a lista"));

var convidados = [];

for(let i = 0 ; i < qtdConvidados ; i++) {

    let nome = prompt("Digite o nome do convidado");
    let idade = prompt("Digite a idade do convidado");
    let cpf = prompt("Digite o CPF do convidado");

    convidados[i] = new convidado(nome, idade, cpf);
}