const cliente = {
    nome: "Andre", 
    idade: 36,
    cpf: "12345678924",
    email: "andre@gamil.com"
}

const chaves = ["nome", "idade", "cpf", "email"];

console.log(cliente[chaves[0]]);

chaves.forEach(info => {console.log(cliente[info]);});

// console.log(cliente['nome']);
