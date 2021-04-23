const FGTS = 0.15;
const INSS = 0.11;
const valeAlimentacao = 0.05;

const desconto = 1 - (FGTS + INSS + valeAlimentacao);

function calculaSalario(valor, func) {
    return setTimeout(() => {
        let salarioLiquido = valor * desconto;
        return func(!salarioLiquido, salarioLiquido);
    }, 5000);
}

function mostraSalarioLiquido(err, retorno) {
    if (err) {
        throw err;
    }
    console.log(`Salário do profissional, após descontos de FGTS, INSS e Vale alimentação é de: R$${retorno.toFixed(2)}`);
}

calculaSalario(10000, mostraSalarioLiquido);