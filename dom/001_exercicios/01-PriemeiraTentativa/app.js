new Vue({
    el: '#nomeIdade',
    data:{
        nome: 'Patrick',
        idade: 19
    },
    methods: {
        idadeMultPorTres(){
            this.idade = this.idade * 3
            return this.idade
        }
    }
})

new Vue({
    el: '#idade',
    data:{
        idade: 19 * 3
    }
})

new Vue({
    el: '#numRandomico',
    methods: {
        numeroRandomico(){
            let numero = Math.random()
            console.log(numero)
            return numero
        }
    }
})


new Vue({
    el: "#imagemBind",
    data:{
        link:'https://u3r3f6s2.rocketcdn.me/wp-content/uploads/2021/01/image-30-768x443.png.webp'
    }
})

new Vue({
    el: "#tagInput",
    data:{
        nome: 'Patrick eduardo alves'
    },
    methods:{
        
    }
})