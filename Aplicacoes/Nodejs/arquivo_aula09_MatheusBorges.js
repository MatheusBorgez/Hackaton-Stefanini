function calculaSalario(valor) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const FGTS = 0.15;
            const INSS = 0.11;
            const valeAlimentacao = 0.05;
    
            const taxaDesconto = 1 - (FGTS + INSS + valeAlimentacao);
    
            let salarioLiquido = valor * taxaDesconto;
    
            if(salarioLiquido) {
               resolve(salarioLiquido); 
            }
    
            reject(salarioLiquido);
        }, 5000)
    });
}

calculaSalario(10000)
.then(retorno => {
    console.log(`Salário do profissional, após descontos de FGTS, INSS e Vale alimentação é de: R$${retorno.toFixed(2)}`);
})
.catch(err => {
    throw err;
});