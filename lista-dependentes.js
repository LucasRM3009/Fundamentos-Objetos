const cliente = {
    nome: "Andre", 
    idade: 36,
    cpf: "12345678924",
    email: "andre@gamil.com",
    fones: ["5511986241259", "5521947862513"],

    // objeto dentro de um array
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
};

cliente.dependentes.push({
    nome: "Lucas",
    parentesco: "primo",
    dataNasc: "30/09/2003"
});

console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "20/03/2011");

console.log(filhaMaisNova[0].nome);
