/* Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/
function mostrar()
{
	var numeroRandom;
	numeroRandom=Math.floor(Math.random() * 10) + 1; // muestra numero random del  0 a 10 inclusive
	alert(numeroRandom);

}