const cliente = {
    nome: "Andre", 
    idade: 36,
    cpf: "12345678924",
    email: "andre@gamil.com",
    fones: ["5511986241259", "5521947862513"],

    // objeto dentro de um array
    dependentes: [
        {
            nome: "Sara Silva",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Lucas",
            parentesco: "primo",
            dataNasc: "30/09/2003"
        }
    ],
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor;
    }
};

console.log(cliente.saldo);

cliente.depositar(400);

console.log(cliente.saldo);
