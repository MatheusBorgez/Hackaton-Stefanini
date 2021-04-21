var convidados = [ 
	{nome: 'Felipe', idade: 29, genero: 'masculino'}, 
	{nome: 'Allana', idade: 22, genero: 'feminino'}, 
	{nome: 'Thiago', idade: 33, genero: 'masculino'}, 
	{nome: 'Carlos', idade: 16, genero: 'masculino'}, 
	{nome: 'Aline', idade: 15, genero: 'feminino'} 
];

convidados = convidados.filter(convidado => {
    return convidado.idade >= 18;
});

convidados.sort((conv1, conv2) => {
    return conv1.nome < conv2.nome ? -1 : conv1.nome > conv2.nome ? 1 : 0;
});
