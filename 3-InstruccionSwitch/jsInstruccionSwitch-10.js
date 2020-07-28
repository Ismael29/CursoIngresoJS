function mostrar()
{
	var estacionIngresada=txtIdEstacion.value;
	var destinoElegido=txtIdDestino.value;
	var mensaje;
	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoElegido)
			{
				case "Bariloche":
					mensaje="Se viaja";
					break;
				default:
					mensaje="No se viaja";
					break;	
			}
			break;
		case "Verano":
			switch(destinoElegido)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje="Se viaja";
					break;
				default:
					mensaje="No se viaja";
					break;	
			}
			break;
		case "Otoño":
			mensaje="Se viaja";
			break;
		case "Primavera":
			switch(destinoElegido)
			{
				case "Bariloche":
					mensaje="No se viaja";
					break;
				default:
					mensaje="Se viaja";
			}
			break;		
	}
	alert(mensaje);
}