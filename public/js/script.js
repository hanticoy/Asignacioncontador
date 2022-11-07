let miRecarga = document.querySelector('#miRecarga')

miRecarga.addEventListener('click', function(){
    window.location.href = '/?recarga=';
})

let miReiniciar = document.querySelector('#miReinicio')
miReiniciar.addEventListener('click', function(){
    window.location.href = '/?reinicio=';
})