"use strict"

//********************************
//*** Ventana de alerta

const video = document.querySelector('.bostonVideo');

video.addEventListener("ended", function () {
   let email = prompt("escribe tu correo para ver mas", "data@info.com");
  if (email == null || email == "") {
     console.log("sin datos");
  } else {
     console.log(email);
  }

  /*let resultado = confirm("¿Desea ver el video nuevamente?");
  console.log(resultado)
   if(resultado){
      video.play();
   }else {
         window.location = "http//www.google.com";
   }

  // alert("MENSAJE \n\n\n El video ha terminado");
});
*/
});