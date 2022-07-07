let placar = new Vue({
    el: '#placar',
    data: {
        numero: 0,
        aparecer: false
    }
})

for (let i = 0; i <= 5; i++) {
    placar.numero = i
}


//lista

let lista = new Vue({
    el: '#lista',
    data: {
        nomes: [
            {nome: 'Thais', sobrenome: 'Alencar', idade: 28},
            {nome: 'Antonio', sobrenome: 'Silva', idade: 28},
            {nome: 'Bruna', sobrenome: 'Pereira', idade: 28},
            {nome: 'Maria', sobrenome: 'Batista', idade: 28},
        ]

    }
})
