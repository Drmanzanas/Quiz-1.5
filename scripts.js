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

let $button = document.querySelectorAll('button[type="button"]');

function subirForm(array) {
    let $form = document.getElementsByTagName('form')[0];
    for(let i = 0; i < array.length; i++) {
        array[i].addEventListener('click',function() {
            console.log(array[i], i)
            if(i == 0) {
               return $form.style.top = `-${i + 7}00px`;
            } else {
                 return $form.style.top = '-' + (i * 7) + '00px';
            }
        })
    }
}

subirForm($button)