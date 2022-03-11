const cliente = {
    nome: "Andre", 
    idade: 36,
    cpf: "12345678924",
    email: "andre@gamil.com",
    fones: ["5511986241259", "5521947862513"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente);

cliente.dependentes.nome = "Sara Silva";

console.log(cliente);
