function mostrar()
{
var sexo;
var altura;
var jugadorDeBasquet;
var aculadorDeAltura;
var banderaDeLaPrimeraAltura;
var alturaMasBaja;
var sexoDeLaAlturaMasBaja;
var cantidadDeMujeres;
var promedioDeAlturasTotales;

jugadorDeBasquet=0;
acumuladorDeAltura=0;
banderaDeLaPrimeraAltura=1;
cantidadDeMujeres=0;

while(jugadorDeBasquet<5)
{
    //-----------------Pedida de datos-----------
    altura=prompt("Ingrese su altura");
    altura=parseInt(altura);
    while(altura<0 || isNaN(altura))
    {
        altura=prompt("Reigrese altura porfavor");
    }
    sexo=prompt("Ingrese su sexo F o M ");
    while(sexo!="M" && sexo!="F")
    {
        sexo=prompt("Error...Reigrese sexo porfavor F o M ");
    }
    //------------------Procesos------------------
    //acumuladorDeAltura=altura;
    acumuladorDeAltura=acumuladorDeAltura+altura;
    promedioDeAlturasTotales=acumuladorDeAltura/5;

    if(banderaDeLaPrimeraAltura==1)
    {
        alturaMasBaja=altura;
        banderaDeLaPrimeraAltura=0;
        sexoDeLaAlturaMasBaja=sexo;

    }
    else
    {
        if(alturaMasBaja>altura)
        {
            alturaMasBaja=altura;
            sexoDeLaAlturaMasBaja=sexo;
        }
    }
    if(sexo=="F" && altura>190)
    {
        cantidadDeMujeres++;
    }
    jugadorDeBasquet++;
}

document.write("<br>El primedio de las alturas es: "+promedioDeAlturasTotales);
document.write("<br>La altura mas baja es: "+alturaMasBaja+" Y el sexo de la misma es: "+sexoDeLaAlturaMasBaja);
document.write("<br>La cantidad de muejres que supere 190 : "+ cantidadDeMujeres);


}
