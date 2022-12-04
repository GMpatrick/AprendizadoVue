new Vue ({
    el: "#app",
    data: {
        comecarJogo: false,
        vidaJogador: 250,
        vidaMonstro: 250,
        jogoEncerrado: false,
        jogadorGanhou: false,
        monstroGanhou: false,
        empate:        false,

        barraVidaJogador: {
            'width': this.vidaJogador+'px'
        },
        barraVidaMonstro: {
            'width': this.vidaMonstro+'px'
        },
    },
    methods: {
        jogoComecado(){
            this.comecarJogo = true
            this.jogoEncerrado = false
            this.vidaJogador = 250
            this.vidaMonstro = 250
        },
        jogoTerminado(){
            this.comecarJogo = false
            this.vidaJogador = 250
            this.vidaMonstro = 250
        },
        geradorAleatorio(range){
            return  Math.floor(Math.random() * range)
        },
        ataque(){
            ataqueJogador = [
                30,33, 35, 40
            ]
            ataqueMonstro =[
                36,37,38,39
            ]
            atkJogador = ataqueJogador[this.geradorAleatorio(4)]
            atkMonstro = ataqueMonstro[this.geradorAleatorio(4)] 
            
            this.calcularVida(atkJogador, atkMonstro)
            
        },
        ataqueEspecial(){
            ataqueJogador = [
                40,41,43,44,45
            ]
            ataqueMonstro =[
                39,40,41,43
            ]  
            
            atkJogador = ataqueJogador[this.geradorAleatorio(5)]
            atkMonstro = ataqueMonstro[this.geradorAleatorio(4)] 
            
            this.calcularVida(atkJogador, atkMonstro)
           
        },
        curar(){
            curarJogador = [
                35, 40, 37
            ]
            ataqueMonstro =[
                36,37,38,39
            ]

            crJogador = curarJogador[this.geradorAleatorio(3)]
            atkMonstro = ataqueMonstro[this.geradorAleatorio(4)]

            this.curarVida(crJogador, atkMonstro)
            
        },

        calcularVida(ataqueJogador, ataqueMonstro){
            /* Vitoria do monstro */
            if(this.vidaJogador - ataqueMonstro <= 0){
                this.vidaJogador = 0
                this.jogoEncerrado = true
                this.empate = false
                this.jogadorGanhou = false
                this.monstroGanhou = true
                this.comecarJogo = false
            }else{
                this.vidaJogador = this.vidaJogador - ataqueMonstro
               
            }

            /* Vitoria do jogador */
            if(this.vidaMonstro - ataqueJogador <= 0){
                this.vidaMonstro = 0
                this.jogoEncerrado = true
                this.empate = false
                this.monstroGanhou = false
                this.jogadorGanhou = true
                this.comecarJogo = false

            }else{
                this.vidaMonstro = this.vidaMonstro - ataqueJogador  
            }

            /* Empate */
            if(this.vidaJogador <= 0 && this.vidaMonstro <= 0){
                this.jogadorGanhou = false
                this.monstroGanhou = false
                this.vidaJogador = 0
                this.vidaMonstro = 0
                this.empate = true
            }

            /*  */
            if(this.vidaJogador  > 0 && this.vidaMonstro <= 0){
                this.vidaMonstro = 0
                this.jogoEncerrado = true
                this.monstroGanhou = false
                this.jogadorGanhou = true
                this.comecarJogo = false
            }else if(this.vidaMonstro > 0 && this.vidaMonstro <= 0){
                this.vidaJogador = 0
                this.jogoEncerrado = true
                this.jogadorGanhou = false
                this.monstroGanhou = true
                this.comecarJogo = false
            }

        },
        curarVida(curarJogador, ataqueMonstro){
            /* curar jogador */
            this.vidaJogador = this.vidaJogador + curarJogador
           
            /* Vitoria do monstro */
            if(this.vidaJogador - ataqueMonstro <= 0){
                this.vidaJogador = 0
                this.jogoEncerrado = true
                this.empate = false
                this.jogadorGanhou = false
                this.monstroGanhou = true
                this.comecarJogo = false
            }else{
                this.vidaJogador = this.vidaJogador - ataqueMonstro
            }

            /* Empate */
            if(this.vidaJogador <= 0 && this.vidaMonstro <= 0){
                this.jogadorGanhou = false
                this.monstroGanhou = false
                this.vidaJogador = 0
                this.vidaMonstro = 0
                this.empate = true
            }

            /* verificacoes */
            if(this.vidaJogador  > 0 && this.vidaMonstro <= 0){
                this.vidaMonstro = 0
                this.jogoEncerrado = true
                this.monstroGanhou = false
                this.jogadorGanhou = true
                this.comecarJogo = false
            }else if(this.vidaMonstro > 0 && this.vidaMonstro <= 0){
                this.vidaJogador = 0
                this.jogoEncerrado = true
                this.jogadorGanhou = false
                this.monstroGanhou = true
                this.comecarJogo = false
            }
        }
    },
})
