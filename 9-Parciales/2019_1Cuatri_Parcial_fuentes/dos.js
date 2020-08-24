function mostrar()
{
    /*
            Enunciado:
        Bienvenidos.
        A una pareja se le pide los datos para mostrar un mensaje 
        " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".
    */

    var nombreDePareja1;
    var nombreDePareja2;
    var pesoDePareja1;
    var pesoDePareja2;
    var sumaTotalDePesos;
    var promedioDePesos;

    nombreDePareja1=prompt("Primera personad e la pareja ingrese su nombre: ");
    pesoDePareja1=prompt("Primera personad e la pareja ingrese su peso: ")
    pesoDePareja1=parseInt(pesoDePareja1);
    nombreDePareja2=prompt("Segunda persona de la pareja ingrese su nombre: ");
    pesoDePareja2=prompt("Segunda personad e la pareja ingrese su peso: ")
    pesoDePareja2=parseInt(pesoDePareja2);

    sumaTotalDePesos=pesoDePareja1+pesoDePareja2;
    promedioDePesos=sumaTotalDePesos/2;

    document.write("<br>La suma total de sus pesos es: " + sumaTotalDePesos);
    document.write("<br>elpromedio de sus pessos es :"+promedioDePesos);


}
