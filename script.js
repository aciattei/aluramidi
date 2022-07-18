function tocaSom(audioSelector) {
    const som = document.querySelector(audioSelector);
    if(som && som.localName === 'audio') {
        som.play();
    }
    else {
        console.log('Som não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(e) {
        if(e.code === 'Enter'|| e.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}

