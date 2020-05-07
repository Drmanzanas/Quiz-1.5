let $flechita = document.querySelector('span');

$flechita.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementsByTagName('main').style.top = '-100vh';
})

let $button = document.querySelectorAll('button[type="button"]');

function subiendoATodos(array, func) {
    for(let i = 0; i < array.length; i++){
        array[i].addEventListener('click',func)

    }
}

subiendoATodos($button, subirForm)