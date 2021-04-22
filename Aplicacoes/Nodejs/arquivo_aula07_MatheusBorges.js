
class Pessoa {
    constructor(nome, endereco, telefone, dataNascimento, cep, municipio, estado) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
        this.cep = cep;
        this.municipio = municipio;
        this.estado = estado;
    }
}

let pessoas = [
    new Pessoa('Matheus Borges', 'Rua 802 numero 233', '62996468116', '04/06/2001', '74633-110', 'Goiânia', 'GO'),
    new Pessoa('João da Silva', 'Rua dos bobos numero 0', '6299999999', '15/10/1998', '78659-445', 'Luziânia', 'GO'),
    new Pessoa('Pedro Barbosa', 'Rua Raul Seixas numero 8999', '6398456336', '14/08/1953', '75622-887', 'Palmas', 'TO')
]

let profissoes = ['Desenvolvedor', 'Administrador', 'Pedreiro', 'Marceneiro', 'Pescador'];


console.error(new Error('Mensagem de ERROR enviada por Matheus Borges'));

console.table(profissoes);
console.table(pessoas);