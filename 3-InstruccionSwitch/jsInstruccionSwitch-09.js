function mostrar()
{
	var estacionIngresada=txtIdEstacion.value;
	var destinoIngresado=txtIdDestino.value;
	var estadiaBase=15000;
	var descuentoAumento=0;
	//estadiaBase=parseInt(estadiaBase);
	//descuentoAumento=parseInt(descuentoAumento);
	var precioFinal;
	
	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					descuentoAumento=0.2;
					break;
				case "Cordoba":
				case "Cataratas":
					descuentoAumento=-0.1;
					break;
				case "Mar del plata":
					descuentoAumento=-0.2;	
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					descuentoAumento=-0.2;
					break;
				case "Cataratas":
				case "Cordoba":
					descuentoAumento=0.1;
					break;
				case "Mar del plata":
					descuentoAumento=0.2;
					break;			
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":								
				case "Cataratas":
				case "Mar del plata":	
					descuentoAumento=0.1;														
					break;
				case "Cordoba":
					descuentoAumento=0;
					break;		
			}
			break;			
	}
precioFinal=estadiaBase+(estadiaBase*descuentoAumento);
alert("Su precio final es: "+precioFinal);
}