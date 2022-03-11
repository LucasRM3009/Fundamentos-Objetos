// Propriedades de Prototype

function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
    }
}

const andre = new Cliente("André", "123456789", "andre@gmail.com", 100);

console.log(andre);

// andre.__proto.__proto__ - executa no navegador depois de colocar o codigo acima na aba console.

/* Cadeia de protótipo - Encadeia a partir do 1º Nível (que é o objeto) e a partir do objeto cria um cliente genérico 
                        e a partir do cliente genérico cria-se outro objeto que é o nosso cliente (André).
    
    A função Cliente utilizou o contrutor objeto e a instância andre utilizou o construtor Cliente.
    
*/