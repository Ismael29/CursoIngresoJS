/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var precioUnitarioDeLamparitas;
    var cantidadDeLamparas;
    var marcaDeLamparas;
    var precioFinal;

    var precioUnitarioDeLamparitas= 35;
    var cantidadDeLamparas=txtIdCantidad.value;
    //cantidadDeLamparas=parseInt(cantidadDeLamparas);
    var marcaDeLamparas=Marca.value;
    /*agregar var precioBruto;
     precioBruto= precioUnitarioDeLamparitas*cantidadDeLamparas */
    if(cantidadDeLamparas > 5)
    {
        precioFinal=(precioUnitarioDeLamparitas*cantidadDeLamparas-(precioUnitarioDeLamparitas*cantidadDeLamparas)*0.5);
    }
    else
    {
      if(cantidadDeLamparas==5 && marcaDeLamparas=="ArgentinaLuz")
      {
        precioFinal=(precioUnitarioDeLamparitas*cantidadDeLamparas-(precioUnitarioDeLamparitas*cantidadDeLamparas)*0.4);
      }
      else
      {
        if(cantidadDeLamparas==5 && marcaDeLamparas!="ArgentinaLuz")
        {
          precioFinal=(precioUnitarioDeLamparitas*cantidadDeLamparas-(precioUnitarioDeLamparitas*cantidadDeLamparas)*0.3);
        }
        else
        {
          if(cantidadDeLamparas==4 && (marcaDeLamparas=="ArgentinaLuz" || marcaDeLamparas=="FelipeLamparas"))
          {
            precioFinal=(precioUnitarioDeLamparitas*cantidadDeLamparas-(precioUnitarioDeLamparitas*cantidadDeLamparas)*0.25);
          } 
          else
          {
            if(cantidadDeLamparas==4 && marcaDeLamparas!="ArgentinaLuz" && marcaDeLamparas!="FelipeLamparas")
            {
              precioFinal=(precioUnitarioDeLamparitas*cantidadDeLamparas-(precioUnitarioDeLamparitas*cantidadDeLamparas)*0.2);    
            }
            else
            {
              if(cantidadDeLamparas==3 && marcaDeLamparas=="ArgentinaLuz")
              {
                precioFinal=(precioUnitarioDeLamparitas*cantidadDeLamparas-(precioUnitarioDeLamparitas*cantidadDeLamparas)*0.15);     
              }
              else
              {
                if(cantidadDeLamparas==3 && marcaDeLamparas=="FelipeLamparas")
                {
                  precioFinal=(precioUnitarioDeLamparitas*cantidadDeLamparas-(precioUnitarioDeLamparitas*cantidadDeLamparas)*0.10);    
                }
                else
                {
                  if(cantidadDeLamparas==3 && marcaDeLamparas!="FelipeLamparas")
                  { 
                  precioFinal=(precioUnitarioDeLamparitas*cantidadDeLamparas-(precioUnitarioDeLamparitas*cantidadDeLamparas)*0.05);
                  }
                }
              }
            }
          }       
        }
      }      
    }
  if(precioFinal>120)
  {
    precioFinal=(precioFinal*10/100)+precioFinal;
    alert("IIBB Usted pago:  "+precioFinal+" siendo 10% el impuesto que se pagó." );
  }  
    txtIdprecioDescuento.value=precioFinal;
}

// Para Realizar ------------------------------------------------------------------------------------------------------
 if(cantidadDeLamparas==5)
{
  if(marcaDeLamparas=="ArgentinaLuz")
  { 
    precioFinal=(precioUnitarioDeLamparitas*cantidadDeLamparas-(precioUnitarioDeLamparitas*cantidadDeLamparas)*0.4);
  }
  else
  {
    precioFinal=(precioUnitarioDeLamparitas*cantidadDeLamparas-(precioUnitarioDeLamparitas*cantidadDeLamparas)*0.3);
  }
}
else
{
  if(cantidadDeLamparas==4)
  {
    if(marcaDeLamparas=="ArgentinaLuz" || marcaDeLamparas=="FelipeLamparas")
    {
      precioFinal=(precioUnitarioDeLamparitas*cantidadDeLamparas-(precioUnitarioDeLamparitas*cantidadDeLamparas)*0.25);
    }
    else
    {
      precioFinal=(precioUnitarioDeLamparitas*cantidadDeLamparas-(precioUnitarioDeLamparitas*cantidadDeLamparas)*0.2);  
    }
  }
  else
  {
    if(cantidadDeLamparas==3)
    {
      if(marcaDeLamparas=="ArgentinaLuz")
      {
        precioFinal=(precioUnitarioDeLamparitas*cantidadDeLamparas-(precioUnitarioDeLamparitas*cantidadDeLamparas)*0.15);
      }
      if(marcaDeLamparas=="FelipeLamparas")
      {
        precioFinal=(precioUnitarioDeLamparitas*cantidadDeLamparas-(precioUnitarioDeLamparitas*cantidadDeLamparas)*0.10); 
      }
      else
      {
        precioFinal=(precioUnitarioDeLamparitas*cantidadDeLamparas-(precioUnitarioDeLamparitas*cantidadDeLamparas)*0.05);
      }
    }
    
  }
}   