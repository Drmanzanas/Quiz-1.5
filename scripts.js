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
            'seis',
            'dos',
            'cuatro',
            'cinco'
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
                console.log(sectionNueva)
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
            console.log(sectionNueva)
            document.getElementsByClassName('quiz-form')[0].insertBefore(sectionNueva,document.getElementsByClassName('quiz-form')[0].childNodes[2]);
        }
    } 

}

meterPreguntas(preguntasNuevas)
for(let z = 0; z < document.getElementsByClassName('preguntas-agregadas').length; z++){
    document.getElementsByClassName('preguntas-agregadas')[z].style.display = 'none';
}

let botonesHeader = document.getElementsByClassName('button-header');
function elegirModo(array) {
    for(let i = 0; i < array.length; i++){
        array[i].style.backgroundColor = 'darkgreen';
        array[i].addEventListener('click', function(event){
            event.preventDefault();
           if(this.style.backgroundColor == 'darkgreen' && i == 0){
               this.style.backgroundColor = '#220901'
               this.style.color = 'blue'
               array[1].style.backgroundColor = 'darkgreen'
               array[1].style.color = '#f4f1de'
           } else if(this.style.backgroundColor == 'darkgreen' && i == 1){
                this.style.backgroundColor = '#220901'
                this.style.color = 'blue'
                for(let z = 0; z < document.getElementsByClassName('preguntas-agregadas').length; z++){
                    document.getElementsByClassName('preguntas-agregadas')[z].style.display = 'flex';
                }
                array[0].style.backgroundColor = 'darkgreen'
                array[0].style.color = '#f4f1de'
           } else if (this.style.backgroundColor == 'rgb(34, 9, 1)' && i == 0){
               this.style.backgroundColor = 'darkgreen';
               this.style.color = '#f4f1de';
           } else if (this.style.backgroundColor == 'rgb(34, 9, 1)' && i == 1){
            this.style.backgroundColor = 'darkgreen';
            this.style.color = '#f4f1de';
            for(let z = 0; z < document.getElementsByClassName('preguntas-agregadas').length; z++){
                document.getElementsByClassName('preguntas-agregadas')[z].style.display = 'none';
            }
        }
        })
           
    }
    
}

elegirModo(botonesHeader)


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
$form.addEventListener('submit',function(event) {
    validacionRespuestas(event)
})

document.querySelector('button[type="reset"]').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.reload();
})