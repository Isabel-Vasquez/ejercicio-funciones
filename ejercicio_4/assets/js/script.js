let colorDivFijo = '';

let colorDivDinamico = '';

let divCreadoDinamico = null;

function cambiarColor(color) {
	const key = document.getElementById('key');
	key.style.backgroundColor = color;
}

document.addEventListener('keydown', function (event) {
	if (event.key === 'a') {
		colorDivFijo = 'pink';
	} else if (event.key === 's') {
		colorDivFijo = 'orange';
	} else if (event.key === 'd') {
		colorDivFijo = 'skyblue';
	}

	cambiarColor(colorDivFijo);

	if (event.key === 'q' || event.key === 'w' || event.key === 'e') {
		if (event.key === 'q') {
			colorDivDinamico = 'purple';
		} else if (event.key === 'w') {
			colorDivDinamico = 'gray';
		} else {
			colorDivDinamico = 'brown';
		}
		crearDiv();
	}
});

function crearDiv() {
	if (!divCreadoDinamico) {
		divCreadoDinamico = document.createElement('div');
		divCreadoDinamico.style.width = '200px';
		divCreadoDinamico.style.height = '200px';
		divCreadoDinamico.style.border = '2px solid black';
		document.body.appendChild(divCreadoDinamico);
	}

	divCreadoDinamico.style.backgroundColor = colorDivDinamico;
}
