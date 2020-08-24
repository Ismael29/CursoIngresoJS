/*
spalletta ismael 
Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total

*/
function mostrar()
{
	var contadorDeproductos;
	var tipoDeProductoIngresado;
	var precioDeProducto;
	var cantidadDeUnidadesIngresados;
	var marcaProducto;
	var fabricanteProducto;
	var banderaDelPrimero;
	var contadorDeAlcohol;
	var contadorDeJabon;
	var contadorDeBarbijo;
	var precioMasBaratoDeAlcohol;
	var cantidadDeAcoholMasBarato;
	var fabricanteDeAlcoholMasBarato;
	var tipoConMasProductos;
	var promedioDeCompra;
	
	contadorDeproductos=0;
	banderaDelPrimero=1;
	contadorDeAlcohol=0;
	contadorDeBarbijo=0;
	contadorDeJabon=0;

	while(contadorDeproductos<5) 
	{
	//-------------------------------------Ingresos-------------------
		tipoDeProductoIngresado=prompt("Ingrese Producto: ");
		while(tipoDeProductoIngresado!="barbijo" && tipoDeProductoIngresado!="jabon" && tipoDeProductoIngresado!="alcohol")
		{
			tipoDeProductoIngresado=prompt("Error...no ingreso lo correcto.");
		}
		precioDeProducto=prompt("Ingrese precio:");
		precioDeProducto=parseInt(precioDeProducto);
		while(precioDeProducto<100 || precioDeProducto>300 || isNaN(precioDeProducto))
		{
			precioDeProducto=prompt("Error...precio no correcto.");
			precioDeProducto=parseInt(precioDeProducto);
		}
		cantidadDeUnidadesIngresados=prompt("Ingrese unidades del producto:")
		cantidadDeUnidadesIngresados=parseInt(cantidadDeUnidadesIngresados);
		while(cantidadDeUnidadesIngresados <1 || cantidadDeUnidadesIngresados >1000 || isNaN(cantidadDeUnidadesIngresados))
		{
			cantidadDeUnidadesIngresados=prompt("Error...Ingrese unidades correspondientes.");
			cantidadDeUnidadesIngresados=parseInt(cantidadDeUnidadesIngresados);
		}
		marcaProducto=prompt("Ingrese marca del producto.");
		fabricanteProducto=prompt("Ingrese fabricante del producto.");
	//-----------------------------------Procesos-------------------------------	
		switch(tipoDeProductoIngresado)
		{
			case "barbijo":
				contadorDeBarbijo++;
				break;
			case "jabon":
				contadorDeJabon++;
				break;
			case "alcohol":
				if(banderaDelPrimero==1 || precioDeProducto<precioMasBaratoDeAlcohol)
				{
					precioMasBaratoDeAlcohol=precioDeProducto;
					fabricanteDeAlcoholMasBarato=fabricanteProducto;
					cantidadDeAcoholMasBarato=cantidadDeUnidadesIngresados;
					banderaDelPrimero=0;
				}								
				contadorDeAlcohol++;
				break;		
		}
		contadorDeproductos++;
	}
	if(contadorDeAlcohol>contadorDeBarbijo && contadorDeAlcohol>contadorDeJabon)
		{
			tipoConMasProductos=contadorDeAlcohol;
			promedioDeCompra=tipoConMasProductos/contadorDeproductos;
		}
	else
	{
		if(contadorDeBarbijo>contadorDeJabon)
		{
			tipoConMasProductos=contadorDeBarbijo;
			promedioDeCompra=tipoConMasProductos/contadorDeBarbijo;
		}
		else
		{
			tipoConMasProductos=contadorDeJabon;
			promedioDeCompra=tipoConMasProductos/contadorDeproductos;
		}
	}
//--------------------------------------------Mostrar*--------------------------
	document.write("La cantidad de alcholes mas baratos es: "+cantidadDeAcoholMasBarato+"<br> El fabricante de alcohol mas barato es: "+fabricanteDeAlcoholMasBarato+"<br>El promedio del tipo con mas productos es:"+promedioDeCompra+"<br>Cantidad de jabones: "+contadorDeJabon);
}
