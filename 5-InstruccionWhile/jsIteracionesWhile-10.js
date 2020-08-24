/* Ismael spalletta
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaEntrePositivosNegativos;
	var contadorDePositivos=0;
	var contadorDeNegativos=0;
	var sumaNegativos=0;
	var respuesta=true;
	var sumaPositivos=0;
	var cantidadDeCeros=0;
	var cantidadDeNumerosPares=0;
		
	while(respuesta==true)
	{
		numeroIngresado=prompt("Ingrese Numeros Hasta que usted quiera: ");
		numeroIngresado=parseInt(numeroIngresado);
		respuesta=confirm("Desea continuar?");
		if(numeroIngresado>0)
		{
			sumaPositivos=numeroIngresado+sumaPositivos;
			contadorDePositivos=contadorDePositivos+1;
			promedioPositivos=sumaPositivos/contadorDePositivos;
		}
		else
		{
			sumaNegativos=numeroIngresado+sumaNegativos;
			contadorDeNegativos=contadorDeNegativos+1;
			promedioNegativos=sumaNegativos/contadorDeNegativos;
			if(numeroIngresado==0)
			{
				cantidadDeCeros=cantidadDeCeros+1;
			}
		}
		if(numeroIngresado%2==0)
		{
			cantidadDeNumerosPares=cantidadDeNumerosPares+1;
		}
		diferenciaEntrePositivosNegativos=sumaNegativos-sumaNegativos;
	}
	document.write("La suma de positivos es: "+sumaPositivos+"<br>La suma de negativos es: "+sumaNegativos+"<br>La cantidad de positivos ingresados son: "+contadorDePositivos+"<br>La cantidad de negativos ingresados es: "+contadorDeNegativos+"<br>La cantidad de ceros ingresados son: "+cantidadDeCeros+"<br>La cantidad de numeros pares es: "+cantidadDeNumerosPares+"<br>El promedio de positivos es: "+promedioPositivos+"<br>El promedio de negativos es: "+promedioNegativos+"<br>La diferencia entre positivos y negativos es: "+diferenciaEntrePositivosNegativos);		
}