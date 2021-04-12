"use strict"

//********************************
//*** Eventos del mouse


//const boton = document.querySelector('.boton');

window.addEventListener("keydown", () => {
        console.log("El boton se ha pulsado");
        console.log(String.fromCharCode(event.keycode));
    })

window.addEventListener('keyup', function () {
    console.log("se deja de pulsar");
})

window.addEventListener('keypress', function () {
    console.log("se esta pulsando");
})

