let $fieldset = document.getElementsByTagName('fieldset');

function cambiarTag(array) {
    let arraySection = [];
    for(let i = 0; i < array.length; i++) {
        let $section = document.createElement('section');
        $section.innerHTML = array[i].innerHTML;
        arraySection[i] = $section;
        array[i].parentNode.replaceChild(arraySection[i],array[i])
    }
    let i = 0;
    while(i < arraySection.length){
        arraySection[i].className = 'quiz-fieldset';
        i++
    }
}

cambiarTag($fieldset)
cambiarTag($fieldset)
cambiarTag($fieldset)

let $flechita = document.querySelector('span');

$flechita.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = "#comienzo";
})

let $buttonSiguiente = document.querySelectorAll('.button-siguiente');
let $buttonAtras = document.querySelectorAll('.button-atras');

function subirForm(array) {
    let $form = document.getElementsByTagName('form')[0];
    for(let i = 0; i < array.length; i++) {
        let $inputs = array[i].parentNode.querySelectorAll('input[type="radio"]');
        if(i > 0) {
            array[i].parentNode.style.opacity = '0';
        }
        array[i].addEventListener('click',function() {
            for(let iterar = 0; iterar < $inputs.length; iterar++){
                if($inputs[iterar].checked == true){
                if(i >= 0) {
                    let x = i + 1;
                    array[i].parentNode.style.opacity = '0';
                    array[i].parentNode.nextElementSibling.style.opacity = '1';
                    return $form.style.top = '-' + (x * 7) + '00px';
                }
                } else {
                $inputs[iterar].nextElementSibling.setAttribute('style', 'animation: titilar 2s linear')
                }
            }
        })
    }
}

subirForm($buttonSiguiente)

function atrasForm(array) {
    let $form = document.getElementsByTagName('form')[0];
    for(let i = 0; i < array.length; i++) {
        array[i].addEventListener('click',function() {
            if(i >= 0) {
                array[i].parentNode.previousElementSibling.style.opacity = '1';
                array[i].parentNode.style.opacity = '0';
                return $form.style.top = '-' + (i * 7) + '00px';
            }
        })
    }
}

atrasForm($buttonAtras)

// Comprobar datos, validar

function validacionRespuestas(event) {
    event.preventDefault();
    let $respuestas = document.querySelectorAll('.respuestaCorrecta');
    let $sections = document.querySelectorAll('.quiz-fieldset')
    for(let i = 0; i < $sections.length; i++) {
        let $inputs = $sections[i].querySelectorAll('input[type="radio"]')
        $sections[i].style.opacity = '1';
        for(let z = 0; z < $inputs.length; z++) {
            if($inputs[z].checked == true && $inputs[z].value == $respuestas[i].value) {
                $inputs[z].nextElementSibling.style.color = 'green'
            } else if($inputs[z].checked == true && $inputs[z].value !== $respuestas[i].value){
                $inputs[z].nextElementSibling.style.color = 'red'
                $respuestas[i].nextElementSibling.style.color = 'green'
            }
        }
    }
    let $form = document.getElementsByTagName('form')[0];
    let $main = document.getElementsByTagName('main')[0];
    let $buttonSiguiente = document.querySelectorAll('.button-siguiente');
    let $buttonAtras = document.querySelectorAll('.button-atras');
    $form.style.top = '0';
    $form.style.height = 'fit-content';
    $main.style.overflow = 'visible';
    for(let d = 0; d < $buttonSiguiente.length; d++){
        $buttonSiguiente[d].style.visibility = 'hidden';
    }
    for(let k = 0; k < $buttonAtras.length; k++){
        $buttonAtras[k].style.visibility = 'hidden';
    }
}

let comprobarButton = document.querySelector('.button-comprobacion')
let $form = document.getElementsByTagName('form')[0];
console.log(comprobarButton)
$form.addEventListener('submit',function(event) {
    validacionRespuestas(event)
})

document.querySelector('button[type="reset"]').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.reload();
})