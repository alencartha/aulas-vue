function bandeira(pais) {
    return '<img src="paises/' + pais + '.png "/>'
}


let app = new Vue({
    el: '#app',
    data: {
        pais: '',
        argentina: bandeira("argentina"),
        brasil: bandeira("brasil"),
        china: bandeira("china"),
        usa: bandeira("usa"),
    },
    methods: {

    }
})


let app2 = new Vue({
    el: '#app2',
    data: {
        pais: '',
        argentina: bandeira("argentina"),
        brasil: bandeira("brasil"),
        china: bandeira("china"),
        usa: bandeira("usa"),
    },
    methods: {
        paises: function (){
            return [
                {bandeira: this.argentina, continente: "América do Sul"},
                {bandeira: this.brasil, continente: "América do Sul"},
                {bandeira: this.china, continente: "Ásia"},
                {bandeira: this.usa, continente: "América do Norte"},
            ]
        }
    }
})

