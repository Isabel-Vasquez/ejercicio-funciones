let blue = document.getElementById('blue');
blue.addEventListener('click', cambiarColor);

let red = document.getElementById('red');
red.addEventListener('click', cambiarColor);

let green = document.getElementById('green');
green.addEventListener('click', cambiarColor);

let yellow = document.getElementById('yellow');
yellow.addEventListener('click', cambiarColor);

function cambiarColor(event) {
	let element = event.target;
	element.style.backgroundColor = 'black';
}
