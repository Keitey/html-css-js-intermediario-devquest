const inputs = document.querySelectorAll('input');
const caixaDeTexto = document.querySelector('textarea');
const submit = document.getElementById('btn');
const testeValidacao = document.getElementsByClassName('validacao');

function validarFormulario () {

    const campoNome = inputs[0].value;
    const campoTelefone = inputs[1].value;
    const campoEmail = inputs[2].value;
    
    if(campoNome == '') {
        testeValidacao[0].style.opacity = '100%';
        inputs[0].style.border = '3px solid red';
    }

    if(campoTelefone == '') {
        testeValidacao[1].style.opacity = '100%';
        inputs[1].style.border = '3px solid red';
    }

    if(campoEmail == '') {
        testeValidacao[2].style.opacity = '100%';
        inputs[2].style.border = '3px solid red';
    }

    if(caixaDeTexto.value == '') {
        testeValidacao[3].style.opacity = '100%';
        caixaDeTexto.style.border = '3px solid red';
    }
};

submit.addEventListener('click', validarFormulario)





