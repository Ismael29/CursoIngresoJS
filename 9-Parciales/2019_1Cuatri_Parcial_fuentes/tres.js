function mostrar()
{

    var precio;
    var descuento;
    var dineroAdescontar;
    var precioFinal;

    precio=prompt("Ingrese precio: ");
    descuento=prompt("Ingrese descuento: ");

    dineroAdescontar=precio*descuento/100;
    precioFinal=precio-dineroAdescontar;

    

    elPrecioFinal.value=precioFinal;
}
