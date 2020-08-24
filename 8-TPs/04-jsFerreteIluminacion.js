/*
Spalletta ismael 
4.	Para el departamento de iluminación:
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
 	var cantidadLamparas;
 	var marcaLamparas;
 	var precioBruto;
 	var porcentaje;
  var precioFinal;
  
 	cantidadLamparas=txtIdCantidad.value;
 	cantidadLamparas=parseInt(cantidadLamparas);

 	marcaLamparas=Marca.value;
	precioBruto=cantidadLamparas*35;

	switch(cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje=0;
			break;
		case 3:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=0.15;
					break;
				case "FelipeLamparas":
					porcentaje=0.1;
					break;
				default:
					porcentaje=0.05;
					break;						
			}
			break;
		case 4:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
				case "FelipeLamparas":
					porcentaje=0.25;
					break;
				default:
					porcentaje=0.2;
					break;
			}
			break;
		case 5:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=0.4;
					break;
				default:
					porcentaje=0.3;
					break;
			}
 			break;
 		default:
 			porcentaje=0.5;
 			break;
  }
  precioFinal=precioBruto-(precioBruto*porcentaje);
  
  if(precioFinal>120)
  {
    precioFinal=(precioFinal*10/100)+precioFinal;
    alert("IIBB Usted pago:  "+precioFinal+" siendo 10% el impuesto que se pagó." );
  }  
    txtIdprecioDescuento.value=precioFinal;  
} 
