/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	nombre = prompt("Introduzca su mensaje:"); 
	txtIdNombre.value=nombre;             // asigna valor a un cuadro de text qeu incresas por alert
	//document.getElementById(txtIdNombre).Value=nombre;
}

