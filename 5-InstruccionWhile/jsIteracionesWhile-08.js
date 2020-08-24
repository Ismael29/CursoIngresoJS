/* ismael spalletta
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si";
	while(respuesta=="si")
	{
		contador=prompt("Ingrese Numero: ");
		contador=parseInt(contador);
		if(contador<0)
		{
			contador=contador*multiplicacionNegativos;
			multiplicacionNegativos=contador;
		}
	 	else 
		{
			contador=contador+sumaPositivos;
			sumaPositivos=contador;
		}
		respuesta=prompt("Queres ingresar mas numeros?"); //confirm	otra opcion 	
	}
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;
} 