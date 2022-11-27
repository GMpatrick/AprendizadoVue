new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertaBtnClick(event){
            alert('Você cliclou no botão')
        },
        escutarKeydown(event){
            this.valor = event.target.value
        }
    }
})