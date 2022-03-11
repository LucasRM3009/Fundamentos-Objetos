// Métodos e propriedades

class Cliente {

    // Definindo os Atributos
    constructor(nome,email,cpf,saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }
}


// HERANÇA - Cliente para ClientePoupanca
class ClientePoupanca extends Cliente {
    constructor(nome,email,cpf,saldo,saldoPoupanca) {
        super(nome,email,cpf,saldo);
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor;
    }
    
}

const andre = new ClientePoupanca("Andre", "andre@gmail.com", "21115444848", 100, 200);
const julia = new Cliente("Julia", "julia@gmail.com", "474956565564", 200, 700);

console.log(andre); //Com saldoPoupanca
console.log(julia); //Sem saldoPoupanca

andre.depositar(50);
andre.depositarPoupanca(50);

console.log(andre)

