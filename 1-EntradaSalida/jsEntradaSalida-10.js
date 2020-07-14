/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;											// variables
	var descuento;
	//var porcentajeDeDescuento;                           
	

	var importe=txtIdImporte.value;                //import del valor del id a la variable 
	importe=parseInt(importe);					// pasar a numero int
	
	descuento=(importe*0.75);                      // porcentaje a restar
	//porcentajeDeDescuento=(importe*25/100);
	

	//txtIdResultado.value=(importe-porcentajeDeDescuento);
	txtIdResultado.value=(importe-descuento);                     // resta 
	
	
}
