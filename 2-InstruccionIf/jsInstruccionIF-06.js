function mostrar()
{
	var edad;

	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if(edad >18)
	{
		alert("Es Mayor");
			
	}
		else
		{
			if(edad > 12 && edad <18)
			{
				alert("Sos adolescente wey!");					
			}
			else
			{
				alert("Es Niño");
			}
		
	
		}
}