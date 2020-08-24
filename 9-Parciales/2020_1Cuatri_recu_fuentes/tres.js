function mostrar()
{
	/*
	Enunciado:
	Bienvenidos.
	En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
	a) la Nacionalidad de la persona con mas temperatura.
	b) Cuantos mayores de edad( más de 17) estan solteros
	c) La cantidad de Mujeres que hay solteras o viudas.
	d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	e) El promedio de edad entre las mujeres casadas.
	*/

	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estadioCivil;
	var temperaturaCorporal;
	var respuesta;
	var banderaDeLaTemperatura;
	var mayorTemperatura;
	var nacionalidadConMayorTemperatura;
	var contadorDeMayoresDeEdadSolteros;
	var contadorDeMujeresSolterasOViudas;
	var contadorDeMayoresDeEdadConAltaTemperatura;
	var acumuladorDeEdad;
	var contadorDeMujeresCasadas;
	var promedioDeMujeresCasadas;

	respuesta=true;
	banderaDeLaTemperatura=1;
	contadorDeMayoresDeEdadSolteros=0;
	contadorDeMujeresSolterasOViudas=0;
	contadorDeMayoresDeEdadConAltaTemperatura=0;
	contadorDeMujeresCasadas=0;
	acumuladorDeEdad=0;

	while(respuesta==true)
	{
		nombre=prompt("Ingrese Nombre: ");
		nacionalidad=prompt("Ingrese Nacionalidad: ")
		edad=prompt("Ingrese edad: ");
		edad=parseInt(edad);
		while(isNaN(edad) || edad<0)
		{
			edad=prompt("Error..Ingrese edad: ");
			edad=parseInt(edad);
		}
		sexo=prompt("Ingrese sexo f o m : ");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Error...Ingrese sexo f o m : ");	
		}
		estadioCivil=prompt("Ingrese su estado civil: soltero, casado o viudo");
		while(estadioCivil!="soltero" && estadioCivil!="casado" && estadioCivil!="viudo")
		{
			estadioCivil=prompt("Error...Ingrese su estado civil: soltero, casado o viudo");
		}
		temperaturaCorporal=prompt("Ingrese su temperatura corporal: ");
		while(isNaN(temperaturaCorporal) || temperaturaCorporal<30)
		{
			temperaturaCorporal=prompt("Error...Ingrese su temperatura corporal: ");
		}
//----------------------------------------------------procesos----------------------------
		if(banderaDeLaTemperatura==1)
		{
			mayorTemperatura=temperaturaCorporal;
			nacionalidadConMayorTemperatura=nacionalidad;
			banderaDeLaTemperatura=0;
		}
		else
		{
			if(mayorTemperatura<temperaturaCorporal)
			{
				mayorTemperatura=temperaturaCorporal;
				nacionalidadConMayorTemperatura=nacionalidad;
			}
		}

		if(edad>17 && estadioCivil=="soltero")
		{
			contadorDeMayoresDeEdadSolteros++;
		}
		
		//if(sexo=="f" && estadioCivil=="soltero" && estadioCivil=="viudo")
		//{
	//		contadorDeMujeresSolterasOViudas++;
	//	}
		if(edad>60 && temperaturaCorporal>38)
		{
			contadorDeMayoresDeEdadConAltaTemperatura++;
		}
	//	if(sexo=="f" && estadioCivil=="casado")
	//	{
	//		acumuladorDeEdad=acumuladorDeEdad+edad;
	//		contadorDeMujeresCasadas++;
	//	}
		switch(sexo)
		{
			case "f":
				if(estadioCivil=="casado")
				{
					acumuladorDeEdad=acumuladorDeEdad+edad;
					contadorDeMujeresCasadas++;
				}
				else
				{
					contadorDeMujeresSolterasOViudas++;
				}
				break;
		}
	respuesta=confirm("Quiere seguir ingresando personas?");
	}
promedioDeMujeresCasadas=acumuladorDeEdad/contadorDeMujeresCasadas;
document.write("<br>la Nacionalidad de la persona con mas temperatura: "+nacionalidadConMayorTemperatura);
document.write("<br>Cuantos mayores de edad( más de 17) estan solteros: "+contadorDeMayoresDeEdadSolteros);
document.write("<br>La cantidad de Mujeres que hay solteras o viudas.: "+contadorDeMujeresSolterasOViudas);
document.write("<br>cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura: "+contadorDeMayoresDeEdadConAltaTemperatura);
document.write("<br>El promedio de edad entre las mujeres casadas."+promedioDeMujeresCasadas);
}
