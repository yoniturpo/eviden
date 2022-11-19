var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var h12 = document.querySelector(".h12");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var easyButton = document.querySelector(".mode");

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

init();

function init() {
	colorDisplay.textContent = pickedColor;
	setupSquares();
	setupMode();
	reset();
}

resetButton.addEventListener("click", function() {
	reset();
});

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "!CORRECTO¡";
				resetButton.textContent = "Jugar de Nuevo";
				changeColors(pickedColor);
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "De Nuevo";
			}
		});
	}
}

function setupMode() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			for (var i = 0; i < modeButtons.length; i++) {
				modeButtons[i].classList.remove("selected");
			}
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numSquares = 3;
			}
			else {
				numSquares = 6;
			}
			reset();
		});
	}
}

function reset() {
	colors = genRandomColors(numSquares);
	pickedColor = chooseColor();
	colorDisplay.textContent = pickedColor;
	h12.style.backgroundColor = "#2C8E99";
	resetButton.textContent = "Colores Nuevos";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) { 
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
}

function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
		h12.style.backgroundColor = color;
	}
}

function chooseColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function genRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(makeColor());
	}
	return arr;
}

function makeColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}

// interacción ruleta

let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600);

spinBtn.onclick = function () {
    wheel.style.transform = "rotate(" + value +"deg)";
    value +=Math.ceil(Math.random()* 3651);

}




