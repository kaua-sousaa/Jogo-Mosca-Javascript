var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var CriaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal'){
    CriaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
    CriaMosquitoTempo = 1000
} else if(nivel === 'impossivel'){
    CriaMosquitoTempo = 750
}

function dimensionamento() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

dimensionamento()

var cronometro = setInterval(function () {

    tempo--
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(cria_mosca)
        window.location.href= "vitoria.html"

    } else {
        document.getElementById('cronometro').innerHTML = tempo      
    }
    

}, 1000)

function adicionarMosquito() {

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas >= 3) {
            window.location.href = 'fim_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio"
            vidas++
        }

    }

    var posicaoY = Math.max(0, Math.floor(Math.random() * altura) - 80)
    var posicaoX = Math.max(0, Math.floor(Math.random() * largura) - 80)


    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'

    //mosquito.className='mosquito1'
    mosquito.className = tamanhoVariado() + " " + mudarLado()

    mosquito.style.left = posicaoX + "px"
    mosquito.style.top = posicaoY + "px"
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'


    mosquito.onclick = function () {
        this.remove()
    }


    document.body.appendChild(mosquito)

    console.log(posicaoX, posicaoY)

}

function tamanhoVariado() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0: return 'mosquito1'

        case 1: return 'mosquito2'

        case 2: return 'mosquito3'
    }
}

function mudarLado() {
    var lado = Math.floor(Math.random() * 2)

    switch (lado) {
        case 0:
            return 'virar'
        case 1:
            return ''
    }
}

