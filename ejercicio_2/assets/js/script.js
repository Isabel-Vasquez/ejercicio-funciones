function pintar(elementoClickeado, color = 'green') {
	elementoClickeado.style.backgroundColor = color;
}

const ele = document.getElementById('ele1');
ele.addEventListener('click', function () {
	pintar(ele, 'yellow');
});
