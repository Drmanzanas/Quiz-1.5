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
        array[i].addEventListener('click',function() {
            if(i >= 0) {
                let x = i + 1;
                array[i].parentNode.style.opacity = '0';
                array[i].parentNode.nextElementSibling.style.opacity = '1';
                return $form.style.top = '-' + (x * 7) + '00px';
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