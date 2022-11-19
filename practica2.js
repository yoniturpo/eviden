let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;



boton.addEventListener("click", function(){
    if(contador==0){
        enlaces.className = ("enlaces dos")
        contador=1;
    }
    else{
        enlaces.classList.remove("dos")
        enlaces.className=("enlaces uno")
        contador=0
    }
})

//cargar una ventana
Window.onload = function(){
    let visor1 = document.getElementById("visor");
    let titulo = document.getElementById("titulo"); //nombre de la imagen
}
//creamos una funcion de enlace del html
function mifoto(num){
    //crear ruta de imgen
    f = "./img/img" + num + ".jpg";
    //imgen que cambiará
    document.images["fotoVisor"].src = f;
    //texto que cambiará
    t = document.images["foto" + num].alt;
    //Cambiar el pie de la foto
    titulo.innerHTML = t
}
