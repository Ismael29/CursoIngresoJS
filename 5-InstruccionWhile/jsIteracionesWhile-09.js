/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	numeroIngresado=0;
	//banderaDelPrimero="es el primero";
	respuesta=="si";
	while(respuesta!="si")
	{
		numeroIngresado=prompt("Ingrese un numero");
		//numeroIngresado=parseInt(numeroIngresado);		
		respuesta=prompt("Termino?");
		if(numeroIngresado>numeroIngresado)
		{
			numeroIngresado==numeroMaximo;
		}
		else
		{
			numeroIngresado==numeroMinimo;
		}
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN