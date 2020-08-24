function mostrar()
{
	var nombre;
	var edad;
	var sexo; 
	var estadoCivil;
	var temperaturaCorporal;
	var respuesta;
	var banderaDeLaPrimeraTemperatura;
	var mayorTemperatura;
	var nombreDeMayorTemperatura;
	var contadorDeCasados;
	var contadorDeSolteros;
	var contadorDeViudosMayoresDeEdad;
	var contadorDeViudos;
	var personasDeTerceraEdad;
	var contadorDeEdadDeHombresSolteros;
	var promedioDeEdadDeHombresSolteros;
	var edadTotalDeHombresSolteros;
	var solterosMasViudos;

	respuesta=true;
	banderaDeLaPrimeraTemperatura=1;
	contadorDeCasados=0;
	contadorDeSolteros=0;
	contadorDeViudosMayoresDeEdad=0;
	contadorDeViudos=0;
	personasDeTerceraEdad=0;
	contadorDeEdadDeHombresSolteros=0;
	edadTotalDeHombresSolteros=0;
	promedioDeEdadDeHombresSolteros=0;
	 	 
	while(respuesta==true)
	{		
		nombre=prompt("Ingrese su nombre.");
		edad=prompt("Ingrese su edad.");
		edad=parseInt(edad);
		sexo=prompt("Ingrese su sexo M o F ");
		while(sexo!="M" && sexo!="F")
		{
			sexo=prompt("Error...Ingrese su sexo M o F ");
		}
		estadoCivil=prompt("Ingrese su estado civil: soltero , casado o viudo");
		while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
		{
			estadoCivil=prompt("Error...Ingrese su estado civil: soltero , casado o viudo");
		}
		temperaturaCorporal=prompt("Ingrese su temperatura");
		temperaturaCorporal=parseFloat(temperaturaCorporal);		
//-------------------------Procesos-------------------------------------------------------
		if(banderaDeLaPrimeraTemperatura==1)
		{
			mayorTemperatura=temperaturaCorporal;
			nombreDeMayorTemperatura=nombre;
			banderaDeLaPrimeraTemperatura=0
		}
		else 
		{
			if(temperaturaCorporal>mayorTemperatura)
			{
				mayorTemperatura=temperaturaCorporal;
				nombreDeMayorTemperatura=nombre;
			}
		}
		switch(estadoCivil)
		{
			case "soltero":
				if(sexo=="M")
				{
					contadorDeSolteros++;					
					contadorDeEdadDeHombresSolteros=edad;				
					edadTotalDeHombresSolteros=edadTotalDeHombresSolteros+contadorDeEdadDeHombresSolteros;					
					promedioDeEdadDeHombresSolteros=edadTotalDeHombresSolteros/contadorDeSolteros;						
				}								
				break;
			//case "casado":
				//contadorDeCasados++;
				//break;
			case "viudo":
				if(sexo=="M")
				{
					contadorDeViudos++;					
				}
				if(edad>18)
				{
					contadorDeViudosMayoresDeEdad++;
				}				
				break;		
		}
		if(edad>60 && temperaturaCorporal>38)
		{
			personasDeTerceraEdad++;
		}
		solterosMasViudos=contadorDeSolteros+contadorDeViudos;
		parseInt(solterosMasViudos);

		respuesta=confirm("Desea continuar? ");
	}
	document.write("El nombre de la persona con mas temperatura es: "+nombreDeMayorTemperatura);
	document.write("<br>La cantidad de mayores de edad viudos es: "+contadorDeViudosMayoresDeEdad);
	document.write("<br>La cantidad de hombres solteros y viudos es: "+solterosMasViudos);
	document.write("<br>La cantidad de personas de tercera edad con mas de 38°C es: "+personasDeTerceraEdad);
	document.write("<br>El promedio de la edad de hombres solteros es: "+promedioDeEdadDeHombresSolteros);
}
