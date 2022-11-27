new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    watch:{
        valor(novo, antigo){
            setTimeout(() =>{
                this.valor = 0
            },5000)
        }
    },
    computed:{
        resultado(){
            if(this.valor == 37){
                return 'Valor igual a 37'
            }else{
                return 'Valor diferente de 37'
            }
        }
    }
});