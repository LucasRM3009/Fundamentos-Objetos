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
}

// const propsClientes = Object.keys(cliente);     // Retorna um Array com todas as chaves (keys) do objeto 'cliente'
// console.log(propsClientes);

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    
    if (propsClientes.includes('dependentes')) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    } 
}

console.log(Object.values(cliente)); // Retorna um Array com todos os valores (values) do objeto 'cliente'

console.log(Object.entries(cliente)); // Retorna um Array com conjunto arrays com as chaves e os valores do objeto 'cliente'

oferecerSeguro(cliente);
