"use strict"

//********************************
//*** Eventos multimedia

const video = document.querySelector('.bostonVideo');

window.addEventListener('load', function() {
    console.log('El contenido de la ventana se ha cargado');
     
  });
video.addEventListener("play", function () {
    console.log('El video ha iniciado');
});

video.addEventListener("seeking", function () {
    console.log('Se esta buscando en el video', this.currentTime);
});

video.addEventListener("ended", function () {
    console.log('El video ha terminado');
});

