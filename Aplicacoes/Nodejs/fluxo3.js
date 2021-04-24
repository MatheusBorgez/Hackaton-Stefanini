function calc(valor) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(valor * 5)
        }, 2000);
    });
}

async function main() {

    try {
        let retorno = await calc(10);
        console.log(retorno);
    } catch (error) {   

        throw error;
    }
}

main();