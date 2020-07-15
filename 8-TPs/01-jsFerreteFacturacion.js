/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var precioUno;
var precioDos;                         // variables
var precioTres;
var precioFinal;
var precioUno=txtIdPrecioUno.value;             // toma el valor ingresador por id 
var precioDos=txtIdPrecioDos.value;
var precioTres=txtIdPrecioTres.value;

precioUno=parseInt(precioUno);  
precioDos=parseInt(precioDos);                  // tranforma todo a int numero
precioTres=parseInt(precioTres);
precioFinal=(precioUno+precioDos+precioTres);   // suma de todos los precios


alert("La suma de sus precios ingresador es: "+precioFinal);  // pasa la suma de los precios por alert

}



function Promedio ()
{
var precioUno;      
var precioDos;                                      // variables
var precioTres;
var precioFinal;
var precioUno=txtIdPrecioUno.value;                 // toma el valor ingresador por id 
var precioDos=txtIdPrecioDos.value;
var precioTres=txtIdPrecioTres.value;

precioUno=parseInt(precioUno);  
precioDos=parseInt(precioDos);
precioTres=parseInt(precioTres);
precioFinal=((precioUno+precioDos+precioTres)/3);          // suma todos lso precios y los divide por la misma cantidad para saar promedio


alert("El promedio de sus tres precios es: "+precioFinal);   // pasa promedio pr alert
    
}


function PrecioFinal () 
{
var precioUno;
var precioDos;
var precioTres;                                                     // variables
var precioFinal;
var precioAgregado;
var precioUno=txtIdPrecioUno.value;                         // pasa el valor pasado por id 
var precioDos=txtIdPrecioDos.value;
var precioTres=txtIdPrecioTres.value;
    
precioUno=parseInt(precioUno);                      // transforma a num int
precioDos=parseInt(precioDos);
precioTres=parseInt(precioTres);
precioFinal=(precioUno+precioDos+precioTres);               // suma los 3 preios ingresados
precioFinal=parseInt(precioFinal);
precioAgregado=(precioFinal*21/100);   // precioAgregado=(precioFinal*0.21);  // saca el 21 % de lso numeros ingresados
precioAgregado=parseInt(precioAgregado);              // transforma a int numero 
   


alert("La suma de sus precios ingresados mas 21 % de IVA es: "+(precioFinal+precioAgregado));  // suma el total de precios mas el 21% de dicho monto 
    






}
