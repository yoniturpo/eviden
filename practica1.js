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

// calculadora

window.addEventListener("load", ()=> { /*escuchamos cuando se carga el documento*/
    //creamos dos constantes y nos guardamos los elementos que necesitamos
    const display = document.querySelector(".calculator-display");
    const keypadButtons = document.getElementsByClassName("keypad-button");

    //creamos otra constante para convertir el HTMLCollection a Array para poder iterar
    const keypadButtonsArray = Array.from(keypadButtons);

    //Iteramos por nuestro nuevo Array de botones
    keypadButtonsArray.forEach( (button) => {

        //A cada boton le agregamos un listener evento clik
        button.addEventListener("click", ()=>{
            calculadora(button, display)
        })
    })
})

function calculadora(button, display){
    switch (button.innerHTML) {
        case "C":
            borrar(display)
            break;
        case "=":
            calcular(display)
            break
        default:
            actualizar(display, button)
            break;
    }
}

function calcular(display){
    //eval tomar el string y lo va a resolver y guardarlo en el innerHTML del DISPLAY
    display.innerHTML = eval(display.innerHTML)
}

function actualizar(display, button){
    if (display.innerHTML == 0){
        display.innerHTML = ""
    }
    //display.innerHTML = display.innerHTML + button.innerHTML
    display.innerHTML += button.innerHTML;
}

function borrar (display) {
    display.innerHTML = 0
}
//carrusel

//query ....... seleccionando una clase 
let carrusel = document.querySelector(".lista")

//scroll maximo
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth
let intervalo = null;
//aplicamos la velocidad
let steep = 1;

//creamos los intervalos

const start = () =>{
    intervalo = setInterval(function(){
        carrusel.scrollLeft = carrusel.scrollLeft + steep;
    //Hará que la imagen retroceda
    if (carrusel.scrollLeft === maxScrollLeft) {
      steep = steep * -1;
    } else if (carrusel.scrollLeft === 0) {
      steep = steep * -1;
    }
    },10) //intervalo de tiempo
}

//limpie el intervalo
const stop = () =>{
    clearInterval(intervalo);
}

//creamos el metodo que al pasar el mouse se detenga
carrusel.addEventListener("mouseover", () =>{
    stop();
})
carrusel.addEventListener("mouseout", () =>{
    start();
})

//para que se ejecute aumaticamente
start();