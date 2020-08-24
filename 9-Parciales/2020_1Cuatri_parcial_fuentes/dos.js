function mostrar()
{
  var respuesta;
  var tipoDeProducto;
  var cantidadDebolsas;
  var precioPorBolsa;
  var descuento;
  var precioTotalConDescuento;
  var precioTotal;
  var contadorDeCal;
  var contadorDeCemento;
  var contadorDeArena;
  var tipoConMasCantidad;
  respuesta=true; 
  
  while(respuesta==true)
  {
    //--------------------Ingresos-------------------------------- 
    //----------------------Tipo-----------------------------
    tipoDeProducto=prompt("Ingrese tipo de producto.");
    while(tipoDeProducto!="arena" && tipoDeProducto!="cal" && tipoDeProducto!="cemento")
    {
      tipoDeProducto=prompt("Error...Tipo no correcto...Ingrese tipo de producto.");
    }
    //-------------------------Cantidad--------------------------
    cantidadDebolsas=prompt("Ingrese cantidad de bolsas");
    cantidadDebolsas=parseInt(cantidadDebolsas);
    //---------------------Precio--------------------------------
    precioPorBolsa=prompt("Ingrese precio por bolsa.");
    precioPorBolsa=parseInt(precioPorBolsa);
    while(precioPorBolsa<0)
    {
      precioPorBolsa=prompt("Error...precio tiene que ser mayor a 0");
      precioPorBolsa=parseInt(precioPorBolsa);
    }
    precioTotal=cantidadDebolsas*precioPorBolsa;
    //------------------Procesos---------------------------------
    if(cantidadDebolsas>10)
    {
      descuento=-0.15;
      precioTotal=precioPorBolsa*cantidadDebolsas; 
      precioTotalConDescuento=(precioPorBolsa*cantidadDebolsas*descuento)+precioTotal;
      if(cantidadDebolsas>25)
      {
        descuento=-0.25;
        precioTotal=precioPorBolsa*cantidadDebolsas; 
        precioTotalConDescuento=(precioPorBolsa*cantidadDebolsas*descuento)+precioTotal;
      }
    }
    switch(tipoDeProducto)
    {
      case "arena":
        contadorDeArena++;
        break;
      case "cal":
        contadorDeCal++;
        break;
      case "cemento":
        contadorDeCemento++;
        break;   
    }
    if(contadorDeArena>contadorDeCal && contadorDeArena>contadorDeCemento)
    {
      tipoConMasCantidad="Arena";
    }
    else
    {
      if(contadorDeCal>contadorDeCemento)
      {
        tipoConMasCantidad="Cal";
      }
      else
      {
        tipoConMasCantidad="Cemento";
      }
    }  
    respuesta=confirm("Desea continuar? ");
  }  
  document.write("El precio total con descuento es : "+precioTotalConDescuento+"<br>");
  document.write("El precio bruto es: " +precioTotal+"<br>");
  document.write("El tipo con mayor cantidad es: " +tipoConMasCantidad+"<br>");
}
