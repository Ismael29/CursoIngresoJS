/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;                                      // declaracion de variables
    var cantidadDeHilosDeAlambre;

    var largo=txtIdLargo.value;
    var ancho=txtIdAncho.value;                       // se toma el valor por el id 

    largo=parseInt(largo);
    ancho=parseInt(ancho);

    cantidadDeHilosDeAlambre=(2*(largo+ancho)*3);         // se saca el perimetro de un rectangulo y se multiplica por 3

    alert("La cantidad de hilos que necesitas es: "+cantidadDeHilosDeAlambre); // mostrar por alert
}


function Circulo () 
{
    var radio;
    var cantidadDeHilosDeAlambre;                  //variables
    var radio=txtIdRadio.value;
    radio=parseInt(radio);                                      // transforma a int numero

    cantidadDeHilosDeAlambre=(2*Math.PI*radio)*3;         // circunferencia de un circulo * 3 

    alert("La cantidad de hilos que necesitas es: "+cantidadDeHilosDeAlambre );   // mostrar por alert
}


function Materiales () 
{
    var medida1;
    var medida2;                    // variables
    var bolsaCemento;
    var bolsaCal;

    var bolsaCemento=2;              // valores fijos de cemento y cal 
    var bolsaCal=3;
    var medida1=txtIdLargo.value;
    var medida2=txtIdAncho.value;     // se toma el valor por el id

    medida1=parseInt(medida1);          // transforma a int numero
    medida2=parseInt(medida2);

    alert("La cantidad de bolsas de cemento que necesitas son:  "+(medida1*medida2)*bolsaCemento); // alt+92 para ponerlo en un alert
    alert("La cantidad de bolsas de cal que necesitas son:  "+ (medida1*medida2)*bolsaCal);




    




}