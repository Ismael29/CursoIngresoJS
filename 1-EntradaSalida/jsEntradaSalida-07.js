/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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
 alert("La suma es  "+sumatotal );			// mostrar resultado por alert	
}

function restar()
{
 var numuno; 		// variables 
 var numdos;		
 var restatotal;		// variable para resta total
 
 var numuno = txtIdNumeroUno.value;		// valores tomados de ID
 var numdos = txtIdNumeroDos.value;
 numuno=parseInt(numuno);   // transforma el id tomado como string a numero 
 numdos=parseInt(numdos);
 restatotal= numuno-numdos;	// asigno la resta a la variable
 alert("La resta es  "+restatotal );			// mostrar resultado por alert
}

function multiplicar()
{ 
 var numuno; 		// variables 
 var numdos;		
 var multiplicaciontotal;		// variable para multiplicar total
 
 var numuno = txtIdNumeroUno.value;		// valores tomados de ID
 var numdos = txtIdNumeroDos.value;
 numuno=parseInt(numuno);   // transforma el id tomado como string a numero 
 numdos=parseInt(numdos);
 multiplicaciontotal= numuno*numdos;	// asigno la multiplicacion a la variable
 alert("La Multiplicacion es  "+multiplicaciontotal );			// mostrar resultado por alert
}

function dividir()
{
 var numuno; 		// variables 
 var numdos;		
 var divisiontotal;		// variable para division total
 
 var numuno = txtIdNumeroUno.value;		// valores tomados de ID
 var numdos = txtIdNumeroDos.value;
 numuno=parseInt(numuno);   // transforma el id tomado como string a numero 
 numdos=parseInt(numdos);
 divisiontotal= numuno/numdos;	// asigno la division a la variable
 alert("La division es  "+divisiontotal );			// mostrar resultado por alert
}

