const cliente = {
    nome: "Andre", 
    idade: 36,
    cpf: "12345678924",
    email: "andre@gamil.com"
}


// Acessou o objeto (cliente) e acessou o valor da chave nome
console.log(cliente.nome);

// Template String (string literal)
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);

/*
    Retorna a parte da string entre os índices inicial e final, ou até o final da string.
    
    str.substring(indexStart[, indexEnd]);

*/

console.log(cliente.cpf.substring(0, 3)); //123
