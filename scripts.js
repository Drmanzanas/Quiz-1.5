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


let preguntasNuevas = [
    {
        title: '¿Cuantas Copas gano Lewis Hamilton en F1?',
        respuestas: [
            'seis',
            'tres',
            'cuatro',
            'ocho'
        ],
        name: 'copas_hamilton',
        correcta: 1
    },
    {
        title: '¿Cuantos mundiales de futbol tiene brazil?',
        respuestas: [
            '6',
            '2',
            '4',
            '5'
        ],
        name: 'copas_mundial_brazil',
        correcta: 3
    },
    {
        title: '¿En que pelicula de Harry Potter Muere Snape?',
        respuestas: [
            'La piedra Filosofal',
            'Prisionero de Azcaban',
            'Ninguna',
            'Las reliquias de la muerte'
        ],
        name: 'Harry_Potter',
        correcta: 3
    },
    {
        title: '¿Cuanto tiempo duro la guerra mas corta de la historia?',
        respuestas: [
            '24 horas',
            '45 minutos',
            '3 dias',
            'una semana'
        ],
        name: 'guerra_mas_corta',
        correcta: 2
    }
]

function meterPreguntas(array) {
    let $preguntasEstan = document.getElementsByClassName('preguntas-agregadas');
    if($preguntasEstan.length !== array.length){
        let $form = document.getElementsByTagName('form')[0];
        $form.style.height = 5000 + (array.length * 700) + 'px';
        for(let i = 0; i < array.length; i++) {
            let sectionNueva = document.createElement('section');
            sectionNueva.className = "quiz-fieldset";
            let legendNuevo = document.createElement('legend');
            legendNuevo.className = 'legend-quiz';
            legendNuevo.innerHTML = array[i].title;
            sectionNueva.appendChild(legendNuevo)
            for(let x = 0; x < array[i].respuestas.length; x++){
                let inputNuevo = document.createElement('input');
                inputNuevo.setAttribute('type', 'radio')
                inputNuevo.setAttribute('id',array[i].respuestas[x])
                inputNuevo.setAttribute('name',array[i].name)
                inputNuevo.setAttribute('value',array[i].respuestas[x])
                if(x  == array[i].correcta - 1){
                    inputNuevo.setAttribute('class',"respuestaCorrecta")
                }
                sectionNueva.appendChild(inputNuevo)
                let labelNuevo = document.createElement('label');
                labelNuevo.setAttribute('for',array[i].respuestas[x])
                labelNuevo.innerHTML = array[i].respuestas[x];
                if(x == 0) {
                    labelNuevo.setAttribute('class',"label-bg-first")
                } else if(x == 1) {
                    labelNuevo.setAttribute('class',"label-bg-second")
                } else if(x == 2) {
                    labelNuevo.setAttribute('class',"label-bg-third")
                } else if(x == 3) {
                    labelNuevo.setAttribute('class',"label-bg-forth")
                }
                sectionNueva.appendChild(labelNuevo)
            }
            let buttonSiguienteNuevo = document.createElement('button');
            let buttonAtrasNuevo = document.createElement('button');
            buttonAtrasNuevo.setAttribute('class','button-atras')
            buttonAtrasNuevo.innerHTML = 'Atras';
            buttonSiguienteNuevo.setAttribute('class','button-siguiente');
            buttonSiguienteNuevo.innerHTML = 'Siguiente';
            buttonAtrasNuevo.setAttribute('type', 'button');
            buttonSiguienteNuevo.setAttribute('type', 'button');
            sectionNueva.classList.add('preguntas-agregadas');
            sectionNueva.appendChild(buttonAtrasNuevo)
            sectionNueva.appendChild(buttonSiguienteNuevo)
            let posicionAnteUltima = document.getElementsByClassName('quiz-fieldset').length + 1;
            document.getElementsByClassName('quiz-form')[0].insertBefore(sectionNueva,document.getElementsByClassName('quiz-form')[0].childNodes[posicionAnteUltima]);
        }
    } 
    let $buttonSiguiente = document.querySelectorAll('.button-siguiente');
    let $buttonAtras = document.querySelectorAll('.button-atras');
    subirForm($buttonSiguiente)
    atrasForm($buttonAtras)
}

for(let z = 0; z < document.getElementsByClassName('preguntas-agregadas').length; z++){
    document.getElementsByClassName('preguntas-agregadas')[z].style.display = 'none';
}

let botonesHeader = document.getElementsByClassName('button-header');

function elegirModo(array, funcionSubir, funcionBajar) {
    for(let i = 0; i < array.length; i++){
        array[i].style.backgroundColor = 'darkgreen';
        array[i].addEventListener('click', function(){
           if(this.style.backgroundColor == 'darkgreen' && i == 0){
               this.style.backgroundColor = '#220901'
               this.style.color = 'blue'
               let preguntasBorrar = document.getElementsByClassName('preguntas-agregadas');
               for(let z = 0; z < preguntasBorrar.length; z++){
               let niñoABorrar = preguntasBorrar[z]
               niñoABorrar.remove()
               }
               let preguntasNoBorradasABorrar = document.getElementsByClassName('preguntas-agregadas');
               for(let z = 0; z < preguntasNoBorradasABorrar.length; z++){
                   let niñoABorrar = preguntasNoBorradasABorrar[z]
                   niñoABorrar.remove()
               }
               if(document.getElementsByClassName('preguntas-agregadas').length > 0){
                   for(let z = 0; z < document.getElementsByClassName('preguntas-agregadas').length; z++){
                       let niñoABorrar = document.getElementsByClassName('preguntas-agregadas')[z]
                       niñoABorrar.remove()
                   }
               }
               let $buttonSiguiente = document.querySelectorAll('.button-siguiente');
               funcionSubir($buttonSiguiente)
               array[1].style.backgroundColor = 'darkgreen'
               array[1].style.color = '#f4f1de'
           } else if(this.style.backgroundColor == 'darkgreen' && i == 1){
                this.style.backgroundColor = '#220901'
                this.style.color = 'blue'
                    if(document.getElementsByClassName('preguntas-agregadas').length == 0){
                        meterPreguntas(preguntasNuevas)
                    }
                array[0].style.backgroundColor = 'darkgreen'
                array[0].style.color = '#f4f1de'
           } else if (this.style.backgroundColor == 'rgb(34, 9, 1)' && i == 0){
               this.style.backgroundColor = 'darkgreen';
               this.style.color = '#f4f1de';
           } else if (this.style.backgroundColor == 'rgb(34, 9, 1)' && i == 1){
                this.style.backgroundColor = 'darkgreen';
                this.style.color = '#f4f1de';
                let preguntasBorrar = document.getElementsByClassName('preguntas-agregadas');
                for(let z = 0; z < preguntasBorrar.length; z++){
                let niñoABorrar = preguntasBorrar[z]
                niñoABorrar.remove()
                }
                let preguntasNoBorradasABorrar = document.getElementsByClassName('preguntas-agregadas');
                for(let z = 0; z < preguntasNoBorradasABorrar.length; z++){
                    let niñoABorrar = preguntasNoBorradasABorrar[z]
                    niñoABorrar.remove()
                }
                if(document.getElementsByClassName('preguntas-agregadas').length > 0){
                    for(let z = 0; z < document.getElementsByClassName('preguntas-agregadas').length; z++){
                        let niñoABorrar = document.getElementsByClassName('preguntas-agregadas')[z]
                        niñoABorrar.remove()
                    }
                }
            }
        })
           
    }

    let $buttonSiguiente = document.querySelectorAll('.button-siguiente');
    let $buttonAtras = document.querySelectorAll('.button-atras');
    funcionBajar($buttonAtras)
    funcionSubir($buttonSiguiente)
}


let $form = document.getElementsByTagName('form')[0];
let $preguntasNuevas = document.getElementsByClassName('preguntas-agregadas');
for(let circulo = 0; circulo < $preguntasNuevas.length; circulo++){
    if($preguntasNuevas[circulo].style.display == 'none'){
        $form.style.height = 5000 +'px';
    } else {
        $form.style.height = 5000 + (array.length * 700) + 'px';
        $preguntasNuevas[circulo].style.position = 'relative';
    }

}

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


elegirModo(botonesHeader,subirForm,atrasForm)

// -------------- COMPROBAR DATOS VALIDAAR ------------

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
$form.addEventListener('submit',function(event) {
    validacionRespuestas(event)
    let articleRespuestas = document.createElement('article');
    articleRespuestas.style.height = '600px';
    articleRespuestas.style.width = '80vw';
    articleRespuestas.style.backgroundColor = 'rgba(134,126,231,1)';
    articleRespuestas.style.position = 'absolute';
    let $inputs = this.querySelectorAll('section > input[type="radio"]:checked')
    let respuestas = document.getElementsByClassName('respuestaCorrecta');
    let titulo = document.createElement('h1');
    titulo.innerHTML = 'Respuestas Elegidas';
    titulo.style.width = '100%';
    titulo.style.textAlign = 'center';
    titulo.style.height = 'fit-content';
    articleRespuestas.appendChild(titulo);
    let sectionCorrect = document.createElement('section');
    let sectionInCorrect = document.createElement('section');
    let tituloCorr = document.createElement('h2');
    tituloCorr.innerHTML = 'Estas son las respuestas Correctas'
    let tituloInCorr = document.createElement('h2');
    tituloInCorr.innerHTML = 'Estas son las respuestas InCorrectas'
    tituloCorr.style.fontSize = '20px';
    tituloInCorr.style.fontSize = '20px';
    sectionCorrect.appendChild(tituloCorr)
    sectionInCorrect.appendChild(tituloInCorr)
    for(let i = 0; i < respuestas.length; i++){
        if($inputs[i].value == respuestas[i].value) {
            respuestaCorr = document.createElement('p');
            respuestaCorr.innerHTML = (i+1) + ' ' + ($inputs[i].value);
            respuestaCorr.style.color = 'white';
            respuestaCorr.style.textTransform = 'Uppercase';
            sectionCorrect.appendChild(respuestaCorr)
        } else {
            respuestaInCorr = document.createElement('p');
            respuestaInCorr.innerHTML = (i+1) + ' ' + ($inputs[i].value);
            respuestaInCorr.style.color = 'white';
            respuestaInCorr.style.textTransform = 'Uppercase';
            sectionInCorrect.appendChild(respuestaInCorr)
        }
    }
    sectionCorrect.style.width = '50%';
    sectionInCorrect.style.width = '45%';
    sectionCorrect.style.border = '1px solid black';
    sectionInCorrect.style.border = '1px solid black';
    articleRespuestas.appendChild(sectionCorrect);
    articleRespuestas.appendChild(sectionInCorrect);
    articleRespuestas.style.display = 'flex';
    articleRespuestas.style.flexFlow = 'row wrap';
    let cruz = document.createElement('div');
    cruz.style.borderRadius = '50%';
    cruz.style.backgroundColor = 'blue';
    cruz.style.height = '30px';
    cruz.style.width = '30px';
    cruz.style.position = 'absolute';
    cruz.style.top = '0';
    cruz.style.left = '90%';
    cruz.style.cursor = 'pointer';
    cruz.addEventListener('click', function(event){
        event.preventDefault();
        articleRespuestas.style.display = 'none';
    })

    articleRespuestas.appendChild(cruz);

    this.appendChild(articleRespuestas)
})

document.querySelector('button[type="reset"]').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.reload();
})

