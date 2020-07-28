/*spalletta ismael Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destin
*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Cordoba":
		case "Bariloche":
			alert("hace FRIO");
			break;
		default:
			alert("hace CALOR");
			break;
	}
}