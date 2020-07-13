/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre ;
	var edad ;			// Declarar variables
	
	
	nombre= txtIdNombre.value;  // declara variables por id asigna
	edad=txtIdEdad.value;

	alert("Su Nombre Es : " + nombre +" y Su Edad Es: "+  edad); //concatena
}

