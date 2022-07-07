function bandeira(pais) {
    return '<img src="paises/' + pais + '.png "/>'
}

Vue.component("brasil", {
    template: `<p>Alguma coisa ${bandeira('brasil')}</p>`
})

Vue.component("pais", {
    props: ['nome', 'continente'],
    template: ` <div><p v-html="nome"></p>
                <p v-html="continente"></p> </div>`
})


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

