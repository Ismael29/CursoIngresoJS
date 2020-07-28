/*Spalletta Ismael , Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar()
{	
	var mesDelAño =txtIdMes.value;
	
	switch(mesDelAño)
	{	
		case "Abril":			
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("tiene 30 días.");
			break;
		case "Febrero":
			alert("tiene 28 días.");
			break;
		default:
			alert("tiene 31 días.");
			break;

    }
}