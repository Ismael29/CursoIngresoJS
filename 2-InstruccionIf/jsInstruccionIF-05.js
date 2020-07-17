function mostrar()
{
	var edad;

	edad=txtIdEdad.value;

	if(!(edad >= 13 && edad <= 17) )    // negacion de mayor igual y menor igual 
	{
		alert("No es adolescente");
	}
	

}