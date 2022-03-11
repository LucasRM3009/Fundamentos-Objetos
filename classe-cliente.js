// Criando uma classe

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

const andre = new Cliente("Andre", "andre@gmail.com", "11565956554", 100);

andre.exibirSaldo(); // Chamando o método exibirSaldo();

console.log(andre)

    