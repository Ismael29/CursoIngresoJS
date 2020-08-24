/*
Ismael spalletta
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroDeLegajo;
	var nacionalidadIngresada;
	//-------------------------------------A----------------------------------------------------
	edadIngresada=prompt("Ingrese su edad: ");
	edadIngresada=parseInt(edadIngresada);
	while(edadIngresada<18 || edadIngresada>90 || isNaN(edadIngresada))
	{
		edadIngresada=prompt("Eror...es menor de 18 o mayor a 90");
		edadIngresada=parseInt(edadIngresada);
	}	
	//-----------------------------------B----------------------------------------------------
	sexoIngresado=prompt("Ingrese su sexo “M” para masculino y “F” para femenino");
	while(sexoIngresado!="M" && sexoIngresado!="F")
	{
		sexoIngresado=prompt("Error...Ingrese su sexo “M” para masculino y “F” para femenino");
	}
	//-----------------------------------C----------------------------------------------------
	estadoCivilIngresado=prompt("Ingrese: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos ");
	estadoCivilIngresado=parseInt(estadoCivilIngresado);
	while(estadoCivilIngresado<1 || estadoCivilIngresado>4 || isNaN(estadoCivilIngresado))
	{
		estadoCivilIngresado=prompt("Error...1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
		estadoCivilIngresado=parseInt(estadoCivilIngresado);
	}
	//-----------------------------------D-------------------------------------------------
	sueldoBruto=prompt("Ingrese su sueldo: ");
	sueldoBruto=parseInt(sueldoBruto);
	while(sueldoBruto<8000 || isNaN(sueldoBruto))
	{
		sueldoBruto=prompt("Error... reingrese sueldo: ");
		sueldoBruto=parseInt(sueldoBruto);
	}
	//---------------------------------E-----------------------------------------------
	numeroDeLegajo=prompt("Ingrese su numero de legajo: ");
	numeroDeLegajo=parseInt(numeroDeLegajo);
	while(numeroDeLegajo<1000 || numeroDeLegajo>9999 || isNaN(numeroDeLegajo))
	{
		numeroDeLegajo=prompt("Error...Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.");
	}
	//-----------------------------D-------------------------------------------------------
	nacionalidadIngresada=prompt("Ingrese su Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados. ");
	while(nacionalidadIngresada!="A" && nacionalidadIngresada!="E" && nacionalidadIngresada!="N")
	{
		nacionalidadIngresada=prompt("Error...Ingrese su Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");		
	}
	//-----------------------------------Procesos-------------------------------------------	
	if(sexoIngresado=="M")
	{
		sexoIngresado="Masculino";		
	}
	else
	{
		sexoIngresado="Femenino";
	}
	switch(estadoCivilIngresado)
	{
		case 1 :
			estadoCivilIngresado="Soltero";
			break;
		case 2 :
			estadoCivilIngresado="Casados";
			break;
		case 3 :
			estadoCivilIngresado="Divorciado";	
			break;
		case 4 :
			estadoCivilIngresado="Viudo";		
	}
	switch(nacionalidadIngresada)
	{
		case"A":
			nacionalidadIngresada="Argentino";
			break;
		case"E":
			nacionalidadIngresada="Extranjero";
			break;
		case"N":
			nacionalidadIngresada="Nacionalizados";
			break;		
	}
	//---------------------------Mostrar------------------------------------------
	txtIdEdad.value=edadIngresada;
	txtIdSexo.value=sexoIngresado;
	txtIdEstadoCivil.value=estadoCivilIngresado;
	txtIdSueldo.value=sueldoBruto;
	txtIdLegajo.value=numeroDeLegajo;
	txtIdNacionalidad.value=nacionalidadIngresada;
}
