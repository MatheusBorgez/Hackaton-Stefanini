function calc(valor, func) {
    return setTimeout(() => {
        return func(null, valor * 5); 
    }, 2000);
}

function mostraValor(err, retorno) {
    if (err) {
        throw err;
    }

    console.log(retorno);

}


console.log(calc(10, mostraValor));