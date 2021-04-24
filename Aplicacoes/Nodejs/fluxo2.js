function calc(valor) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(valor * 5)
        }, 2000);
    });
}

calc(10)
.then(retorno => {
    console.log(retorno);
})
.catch(err => {
    throw err;
})