function mostrar()
{
  /*
  Enunciado:

  Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
  Tipo validad("arena";"cal";"cemento")
  Cantidad de bolsas,
  Precio por bolsa (más de cero ),
  al terminar la compra el cliente accede a un descuento segun las bolsas en total
  Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
  Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
  a) El importe total a pagar , bruto sin descuento y...
  b) el importe total a pagar con descuento(solo si corresponde)
  d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
  f) El tipo mas caro
  */  

  var respuesta;
  var tipo;
  var cantidadDeBolsas;
  var precioPorBolsa;
  var acumuladorDeBolsasDeArena;
  var acumuladorDeBolsasDeCal;
  var acumuladorDeBolsasDeCemento;
  var cantidadDeBolasasTotales;
  var descuento;
  var importeTotalApagarSinDescuento;
  var importeTotalApagarConDescuento;
  var tipoConMasCantidadDeBolsas;
  var precioDeArena;
  var precioDeCal;
  var precioDeCemento;
  var tipoMasCaro;
  var precioTotalDeArena;
  var precioTotalDeCal;
  var precioTotalDeCemento;
  
  acumuladorDeBolsasDeArena=0;
  acumuladorDeBolsasDeCal=0;
  acumuladorDeBolsasDeCemento=0;
  descuento=0;
  importeTotalApagarConDescuento=0;
  importeTotalApagarSinDescuento=0;

  respuesta=true;
  
  while(respuesta==true)
  {
    tipo=prompt("Ingrese tipo: arena, cal o cemento");
    while(tipo!="arena" && tipo!="cal" && tipo!="cemento")
    {
      tipo=prompt("Error..Ingrese tipo: arena , cal o cemento");

    }
    cantidadDeBolsas=prompt("Ingrese cantidad de bolsas: ");
    cantidadDeBolsas=parseInt(cantidadDeBolsas);
    while(isNaN(cantidadDeBolsas) || cantidadDeBolsas<1)
    {
      cantidadDeBolsas=prompt("Error...Ingrese cantidad de bolsas: ");
      cantidadDeBolsas=parseInt(cantidadDeBolsas);
    }
    precioPorBolsa=prompt("Ingrese precio por bolsa: ");
    precioPorBolsa=parseInt(precioPorBolsa);
    while(isNaN(precioPorBolsa) || precioPorBolsa<1)
    {
      precioPorBolsa=prompt("Error...Ingrese precio por bolsa: ");
      precioPorBolsa=parseInt(precioPorBolsa);
    }
    switch(tipo)
    {
      case "arena":
        acumuladorDeBolsasDeArena=acumuladorDeBolsasDeArena+cantidadDeBolsas;
        precioTotalDeArena=acumuladorDeBolsasDeArena*precioPorBolsa;
        break;
      case "cal":
        acumuladorDeBolsasDeCal=acumuladorDeBolsasDeCal+cantidadDeBolsas;
        precioTotalDeCal=acumuladorDeBolsasDeCal*precioPorBolsa;
        break;
      case "cemento":
        acumuladorDeBolsasDeCemento=acumuladorDeBolsasDeCemento+cantidadDeBolsas;
        precioTotalDeCemento=acumuladorDeBolsasDeCemento*precioPorBolsa;
        break;     
    }
    cantidadDeBolasasTotales=acumuladorDeBolsasDeArena+acumuladorDeBolsasDeCal+acumuladorDeBolsasDeCemento;
    importeTotalApagarSinDescuento=precioTotalDeArena+precioTotalDeCal+precioTotalDeCemento;
//--------------------------------------------------------------------------------------------------
    
  
    
//--------------------------------------------------------------------------------------------------------------   
    if(acumuladorDeBolsasDeArena>acumuladorDeBolsasDeCal && acumuladorDeBolsasDeArena>acumuladorDeBolsasDeCemento)
    {
      tipoConMasCantidadDeBolsas="Arena";
    }
    else
    {
      if(acumuladorDeBolsasDeCal>acumuladorDeBolsasDeCemento)
      {
        tipoConMasCantidadDeBolsas="Cal";
      }
      else
      {
        tipoConMasCantidadDeBolsas="Cemento";
      }
    }

    if(precioDeArena>precioDeCal && precioDeArena>precioDeCemento)
    {
      tipoMasCaro="Arena";
    }
    else
    {
      if(precioDeCal>precioDeCemento)
      {
        tipoMasCaro="Cal";
      }
      else 
      {
        tipoMasCaro="Cemento";
      }
    }
      respuesta=confirm("Quiere Seguir ingreando ?");
      //----------------------------fin del while--------------------------
    }   
      if(cantidadDeBolasasTotales>30)
      {
        descuento=0.25;
      }
      else
      {
      if(cantidadDeBolasasTotales>10)
        {
          descuento=0.15;
        }
      } 
      if(descuento!=0)
      {
        importeTotalApagarConDescuento=importeTotalApagarSinDescuento-(importeTotalApagarSinDescuento*descuento);
        document.write("<br> El importe total a pagar con descuento es :"+importeTotalApagarConDescuento);
      } 
      else
      {
        document.write("No hay descuento.");
      }
    
document.write("<br> El importe total a pagar , bruto sin descuento es: "+importeTotalApagarSinDescuento);
document.write("<br> El tipo con mas cantidad de bolsas en el total de la compra es :"+tipoConMasCantidadDeBolsas);
document.write("<br> El tipo mas caro es :"+tipoMasCaro);
//document.write("<br> El importe total a pagar con descuento es :"+importeTotalApagarConDescuento);

} 

