function mostrar()
{
	var edad;

	edad=txtIdEdad.value;

	if(edad >=18)
	{
		alert("Es Mayor");

	}
		else if(edad >= 13 && edad <= 17)
		{
	
			alert("Sos adolescente wey!");
		}
			else
			{
				alert("Es niño");
			}

}