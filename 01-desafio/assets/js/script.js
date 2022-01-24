const imagensPainel = document.querySelectorAll('.slides');
const setaAvancar = document.getElementById('seta-direita');
const setaVoltar = document.getElementById('seta-esquerda');
let imagemAtual = 0;

setaAvancar.addEventListener('click', function() {
    
    const totalImagens = imagensPainel.length - 1;
    if (imagemAtual === totalImagens) {
        return;
    }

    imagemAtual++;

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    imagensPainel[imagemAtual].classList.add('mostrar');

    setaVoltar.style.opacity = '80%'
    setaAvancar.style.opacity = '30%'

});

setaVoltar.addEventListener('click', function() {
    if(imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    imagensPainel[imagemAtual].classList.add('mostrar');

    setaAvancar.style.opacity = '80%'
    setaVoltar.style.opacity = '30%'

});