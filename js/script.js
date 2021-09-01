var link = document.getElementById('link')
var video = document.getElementById('video')
var modBarra = document.getElementById('modBarra')
var playId = document.getElementById('play')
var pauseId = document.getElementById('pause')
var t1 = document.getElementById('t1')
var t2 = document.getElementById('t2')
var t3 = document.getElementById('t3')
var pause = true
var tempoPorcentagem = 0
function acao(){
	link.value = link.value.replace('youtu.be', "www.youtube.com/embed");
	video.innerHTML = '<iframe width="100%" height="100%" src="'+ link.value + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}
function play(){
	pause = false
	playId.className = 'none'
	pauseId.classList.remove("none");
}
function pausar(){
	pause = true
	pauseId.className = 'none'
	playId.classList.remove("none");
}




class Tempo{
	constructor(){
		this.tempo = 1000
	}
	setTempo(){
		this.tempo = document.getElementById('tempo').value
		this.tempo *= 60000
		this.tempo /= 100
		this.cronometro(this.tempo)
	}
	cronometro(t){
		var cronoPorcentagem = setInterval(function(){
			if(pause == false){
				tempoPorcentagem++
				modBarra.innerHTML = '<div id="barra" style="background: linear-gradient(to right, #82FA58 '+ tempoPorcentagem + '%, gray ' + '0%);"></div>'
			}
			if(tempoPorcentagem == 15){
			t1.classList.remove('opacidade')
			}
			if(tempoPorcentagem == 50){
				t2.classList.remove('opacidade')
			}
			if(tempoPorcentagem == 100){
				t3.classList.remove('opacidade')		
			}
			if (tempoPorcentagem == 101) {
				alert('Parabéns, você completou o tempo')
			}
		}, t)
	}
}
tempo = new Tempo()