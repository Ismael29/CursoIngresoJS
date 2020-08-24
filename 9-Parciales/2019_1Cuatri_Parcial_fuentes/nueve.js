function mostrar()
{
var respuesta;
var cantidadDeHabitantes;
var temperatura;
var nombreDePais;
var banderaDePais;
var paisConMenosHabitantes;
var cantidadDeHabitantesMenores;
var paisConmasDe40grados;
var promedioDePaisesIngresados;
var contadorDePaises;
var temperaturaMinima;
var nombreDelPaisConMenosTemperatura;
var banderaDeTemperatura;
var cantiadadDeTemperaturasPares;
var sumaDeHabitantes;

respuesta=true;
banderaDePais=1;
contadorDePaises=0;
promedioDePaisesIngresados=0;
banderaDeTemperatura=1;
cantiadadDeTemperaturasPares=0;
paisConmasDe40grados=0;
sumaDeHabitantes=0;


while(respuesta==true)
{
    nombreDePais=prompt("Ingrese Nombre del pais");
    cantidadDeHabitantes=prompt("Ingrese cantidad de habitantes");
    cantidadDeHabitantes=parseInt(cantidadDeHabitantes)
    while(cantidadDeHabitantes<1 || cantidadDeHabitantes>7000)
    {
        cantidadDeHabitantes=prompt("Error... Cantidad Incorrecta");
        cantidadDeHabitantes=parseInt(cantidadDeHabitantes)
    }
    temperatura=prompt("Ingrese temperatura");
    temperatura=parseFloat(temperatura);
    while(temperatura<-50 || temperatura>50)
    {
        temperatura=prompt("Error... temperatura incorrecta");
        temperatura=parseFloat(temperatura);
    }
    if(temperatura%2==0)
    {
        cantiadadDeTemperaturasPares++;
    }
 //------------------------------------------------------------   
    if(banderaDePais==1)
    {
        paisConMenosHabitantes=nombreDePais;
        cantidadDeHabitantesMenores=cantidadDeHabitantes;
        banderaDePais=0;
    }
    else
    {
        if(cantidadDeHabitantes<cantidadDeHabitantesMenores)
        {
            paisConMenosHabitantes=nombreDePais;
            cantidadDeHabitantesMenores=cantidadDeHabitantes;
        }
    }
//-----------------------------------------------------------------
    if(temperatura>40)
    {
        paisConmasDe40grados++
    }
//--------------------------------------------
    contadorDePaises++;
    sumaDeHabitantes+=cantidadDeHabitantes;
       
//---------------------------------------------------    
    if(banderaDeTemperatura==1)
    {
        temperaturaMinima=temperatura;
        nombreDelPaisConMenosTemperatura=nombreDePais;
        banderaDeTemperatura=0;
    }
    else
    {
        if(temperatura<temperaturaMinima)
        {
            temperaturaMinima=temperatura;
            nombreDelPaisConMenosTemperatura=nombreDePais;
        }
    } 
 //--------------------------------------------------     
    respuesta=confirm("Quiere continuar?");
}
promedioDePaisesIngresados=sumaDeHabitantes/contadorDePaises;

document.write("<br> La cantidad de temperaturas pares.: "+cantiadadDeTemperaturasPares);
document.write("<br> El nombre del pais con menos habitantes: "+paisConMenosHabitantes);
document.write("<br> la cantidad de paises que superan los 40 grados.: "+paisConmasDe40grados);
document.write("<br> el promedio de habitantes entre los paises ingresados: "+ promedioDePaisesIngresados);
document.write("<br> la temperatura mínima ingresada:"+ temperaturaMinima + "<br> y nombre del pais que registro esa temperatura: "+nombreDelPaisConMenosTemperatura);
}
