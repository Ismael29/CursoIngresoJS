function mostrar()
{
	var edad;
	var estadoCivil;

	edad=txtIdEdad.value;
	estadoCivil=document.getElementById("estadoCivil").value;

	if(edad < 18 && estadoCivil !="Soltero")
	{

	}
		else if (estadoCivil == "Soltero" && edad > 18 )
		{
			alert("Es soltero y NO es menor")
		}
	


} 