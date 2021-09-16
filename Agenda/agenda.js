const pessoa = { nome: 'Lucélia', idade: 29 };
console.log(pessoa.nome);
const quadrado = {
    base: 10,
    altura: 20,
    calculaArea: function () { return this.base * this.altura }
}

console.log(quadrado.calculaArea())



//Agenda telefônica 

const agenda = {
    contatos: [
        { Nome: 'Lucélia Batista', Telefone: '22555888999', Email: 'email@hotmail.com' },
        { Nome: 'Alcinea Rodrigues', Telefone: '22555888999', Email: 'email@hotmail.com' },
        { Nome: 'Luiz Claudio', Telefone: '22555888999', Email: 'email@hotmail.com' },
        { Nome: 'Luiz Claudio', Telefone: '22555888999', Email: 'email@hotmail.com' },
        { Nome: 'José Rodolfo', Telefone: '22555888999', Email: 'email@hotmail.com' },
        { Nome: 'Andressa', Telefone: '22555888999', Email: 'email@hotmail.com' },
        { Nome: 'Lilia Katherine', Telefone: '22555888999', Email: 'email@hotmail.com' },
        { Nome: 'Ruan Matheus', Telefone: '22555888999', Email: 'email@hotmail.com' },
        { Nome: 'Izis Moura', Telefone: '22555888999', Email: 'email@hotmail.com' },
        { Nome: 'Mayara Batista', Telefone: '22555888999', Email: 'email@hotmail.com' },
    ],
    adicionar: function (contato) { this.contatos.push(contato) }
}

console.log(agenda.contatos);


