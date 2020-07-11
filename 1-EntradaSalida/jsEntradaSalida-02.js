/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/


function mostrar() 
{
var mensaje;
var opcion = prompt("Introduzca su mensaje:");
 
if (opcion == null || opcion == "") {
        mensaje = "Canselaste o el mensaje esta vacío";
        } else {
            mensaje = "Su Mensaje es  " + opcion;
			}
alert(" " + mensaje);					
}


