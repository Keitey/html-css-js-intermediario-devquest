const paragrafo = document.querySelectorAll('.acordeon-item')
const lista = document.querySelectorAll('.box-item li')
const setaCinza = document.querySelectorAll('.seta-cinza')
const setaColorida = document.querySelectorAll('.seta-colorida')


function mostrarParagrafo1(){

    paragrafo[0].classList.toggle('ativo');
    setaCinza[0].classList.toggle('seta-desativada');

    if(paragrafo[0].classList.contains('ativo') == true || paragrafo[2].classList.contains('ativo') == true ){
        
        paragrafo[1].classList.remove('ativo');
        paragrafo[2].classList.remove('ativo');


    }
    if(setaCinza[1].classList.contains('seta-desativada') == true || setaCinza[2].classList.toggle('seta-desativada') == true ){
        
        setaCinza[1].classList.remove('seta-desativada')
        setaCinza[2].classList.remove('seta-desativada')
    }


}
function mostrarParagrafo2(){

    paragrafo[1].classList.toggle('ativo');

    setaCinza[1].classList.toggle('seta-desativada');

    if(paragrafo[0].classList.contains('ativo') == true || paragrafo[2].classList.contains('ativo') == true ){

        paragrafo[0].classList.remove('ativo');
        paragrafo[2].classList.remove('ativo');

    }
    if(setaCinza[0].classList.contains('seta-desativada') == true || setaCinza[2].classList.toggle('seta-desativada') == true ){
        
        setaCinza[0].classList.remove('seta-desativada')
        setaCinza[2].classList.remove('seta-desativada')
    }

}
function mostrarParagrafo3(){

    paragrafo[2].classList.toggle('ativo');

    setaCinza[2].classList.toggle('seta-desativada');

    if(paragrafo[0].classList.contains('ativo') == true || paragrafo[2].classList.contains('ativo') == true ){
        
        paragrafo[0].classList.remove('ativo');
        paragrafo[1].classList.remove('ativo');
    }

    if(setaCinza[0].classList.contains('seta-desativada') == true || setaCinza[1].classList.toggle('seta-desativada') == true ){
        
        setaCinza[0].classList.remove('seta-desativada')
        setaCinza[1].classList.remove('seta-desativada')
    }


}



lista[0].addEventListener('click', mostrarParagrafo1)
lista[1].addEventListener('click', mostrarParagrafo2)
lista[2].addEventListener('click', mostrarParagrafo3)