/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo     //variable del sueldo
	var aumento			
	var porcentaje
	var nuevosueldo
	
	var sueldo=txtIdSueldo.value;                       // toma el valor del id 
	var aumento=10;                                    // valor del porcentaje
	
	sueldo=parseInt(sueldo);   // transforma a numero
	//  aumento=prompt(" Ingrese el % a aumentar");
   //	aumento=parseInt(aumento);
	porcentaje= ((sueldo*aumento)/100);                          // saca el 10 %
	nuevosueldo=sueldo+porcentaje;

	txtIdResultado.value=("Su nuevo sueldo es "+nuevosueldo);   // pone el resultado en el cuadro de txt
	
}


