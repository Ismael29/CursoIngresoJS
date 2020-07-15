/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var gradosCentigrados;                              // variables 
    var gradosFahrenheit;

    var gradosFahrenheit=txtIdTemperatura.value;                    // toma valores del id 
    gradosFahrenheit=parseInt(gradosFahrenheit);                       // parsea a int

    gradosCentigrados=((gradosFahrenheit-32)/1.8);         // formula 

    alert(gradosFahrenheit+" Fahrenheit son "+gradosCentigrados+" grados Centigrados ");  //alert
	
}

function CentigradosFahrenheit () 
{
    var gradosCentigrados;                                      //variables
    var gradosFahrenheit;

    var gradosCentigrados=txtIdTemperatura.value;                   // toma valor de id
    gradosCentigrados=parseInt(gradosCentigrados);                     // parsea a int 

    gradosFahrenheit=((gradosCentigrados*1.8)+32);                  // formula 

    alert(gradosCentigrados+" grados Centigrados son "+gradosFahrenheit+" Fahrenheit ");	 //alert
}
