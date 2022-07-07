let app = new Vue({
    el: '#app',
    data: {
        nome: 'Thais',
        idade: 28
    },

    methods: {
        mostrar: (nome) => {
            let txt = 'Olá ' + nome
            return txt
        }
    }
})
