function mostrar()
{
var respuesta;
var letraIngresada;
var numeroIngresado;
var contadorDeNumerosPares;
var contadorDeNumerosImpares;
var contadorDeCeros;
var contadorDePosivos;
var acumuladorDePositivos;
var promedioDePositivos;
var sumaDeNegativos;
var banderaDelMinimo;
var letraDelMinimo;
var numeroDelMinimo;
var banderaDelMaximo;
var letraDelMaximo;
var numeroDelMaximo;

contadorDePosivos=0;
acumuladorDePositivos=0;
contadorDeNumerosPares=0;
contadorDeCeros=0;
contadorDeNumerosImpares=0;
sumaDeNegativos=0;
banderaDelMinimo=1;
banderaDelMaximo=1;
respuesta=true;

while(respuesta==true)
{
    letraIngresada=prompt("Ingrese letra");
    numeroIngresado=prompt("Ingrese numero entre -100 y 100 ");
    numeroIngresado=parseInt(numeroIngresado);
    while(numeroIngresado<-100 || numeroIngresado>100)
    {
        numeroIngresado=prompt("Error Ingrese numero entre -100 y 100 ");
        numeroIngresado=parseInt(numeroIngresado);
    }
    if(numeroIngresado%2==0 || numeroIngresado%2==-0)
    {
       contadorDeNumerosPares++; 
       if(numeroIngresado==0)
       {
        contadorDeCeros++;
       }
    }
    else
    {
        contadorDeNumerosImpares++;
    }

    if(numeroIngresado>0)
    {
        acumuladorDePositivos+=numeroIngresado;
        contadorDePosivos++
        promedioDePositivos=acumuladorDePositivos/contadorDePosivos;

    }
    else
    {
        if(numeroIngresado<0)
        {
        sumaDeNegativos+=numeroIngresado;
        }
    }
   /*
    if(banderaDelMinimo==1)
    {
        letraDelMinimo=letraIngresada;
        numeroDelMinimo=numeroIngresado;
        banderaDelMinimo=0;
    }
    else
    {
        if(numeroDelMinimo<numeroIngresado)
        {
            numeroDelMinimo=numeroIngresado;
            letraDelMinimo=letraIngresada;
        }
    }
    //------------------------
    if(banderaDelMaximo==1)
    {
        letraDelMaximo=letraIngresada;
        numeroDelMaximo=numeroIngresado;
        banderaDelMaximo=0;
    }
    else
    {
        if(numeroDelMaximo>numeroIngresado)
        {
            numeroDelMaximo=numeroIngresado;
            letraDelMaximo=letraIngresada;
        }
    }
    */
   if(banderaDelMinimo==1)
    {
    numeroDelMaximo = numeroIngresado;
    letraDelMaximo = letraIngresada;
    numeroDelMinimo = numeroIngresado;
    letraDelMinimo = letraIngresada;
    banderaDelMinimo = 0;
    }
    else
    {
        if(numeroIngresado > numeroDelMaximo){
        letraDelMaximo = letraIngresada;
        numeroDelMaximo = numeroIngresado;
    }
    else
    {
        if(numeroIngresado < numeroDelMinimo){
            letraDelMinimo = letraIngresada;
            numeroDelMinimo = numeroIngresado;
        }
    }
}
    respuesta=confirm("Defesea Continuar?");
}
document.write("<br> La cantidad de numeros pares es: "+contadorDeNumerosPares);
document.write("<br> La cantidad de números impares : "+contadorDeNumerosImpares);
document.write("<br> La cantidad de ceros: "+contadorDeCeros);
document.write("<br> El promedio de todos los números positivos ingresados: "+promedioDePositivos);
document.write("<br> La suma de todos los números negativos."+ sumaDeNegativos);
document.write("<br> El número máximo."+numeroDelMaximo+"letra del maximo"+letraDelMaximo);
document.write("<br> El numero minimo."+numeroDelMinimo+" letra del minimo"+letraDelMinimo);
}
