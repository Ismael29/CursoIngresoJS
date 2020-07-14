/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	

 var numuno; 		// variables 
 var numdos;		
 var sumatotal;		// variable para suma total
 
 var numuno = txtIdNumeroUno.value;		// valores tomados de ID
 var numdos = txtIdNumeroDos.value;
 numuno=parseInt(numuno);   // transforma el id tomado como string a numero 
 numdos=parseInt(numdos);
 sumatotal= numuno+numdos;	// asigno la suma a la variable
 alert(sumatotal );			// mostrar resultado por alert

  }

