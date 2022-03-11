const clientes = [
    {
        nome: "Andre", 
        cpf: "12345678924",
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
    },
    {
        nome: "Lucas", 
        cpf: "584845464644",
        dependentes: [
            {
                nome: "Leonardo",
                parentesco: "filho",
                dataNasc: "20/03/2020"
            }
        ],
    }
]

/*  Spread Operator ou sintaxe de espalhamento

    - Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos.

    [...clientes[0].dependentes] - Pega os elementos do array dependentes e expande-os dentro de um único array

    Assim:
    [
        { nome: 'Sara Silva', parentesco: 'filha', dataNasc: '20/03/2011' },
        { nome: 'Lucas', parentesco: 'primo', dataNasc: '30/09/2003' },     
    ]

*/

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.log(listaDependentes);
console.table(listaDependentes);
console.table(clientes[0].dependentes);
console.table(clientes[1].dependentes);
