
function mostrar()
{
	/*
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

var cantidadDeProductosIngresados;
var tipoDeProducto;
var precio;
var cantidadDeUnidades;
var marca;
var fabricante;
var cantidadDeUnidadesDeJabon;
var fabricanteDeJabon;
var cantidadDeUnidadesDeAlcohol;
var cantidadDeUnidadesDebarbijo;
var tipoConMasUnidades;
var precioDeJabon;
var banderaDelJabonMasCaro;
var productoConMayorCantidad;
var promedioDeLoQuePide;


cantidadDeProductosIngresados=0;
cantidadDeUnidadesDeAlcohol=0;
cantidadDeUnidadesDeJabon=0;
cantidadDeUnidadesDebarbijo=0;
banderaDelJabonMasCaro=1;



while(cantidadDeProductosIngresados<5)
{

	tipoDeProducto=prompt("Ingrese tipo de producto");
	while(tipoDeProducto!="barbijo" && tipoDeProducto!="jabon" && tipoDeProducto!="alcohol")
	{
		tipoDeProducto=prompt("Error..Ingrese tipo de producto");
	}
	precio=prompt("Ingrese precio"); 
	precio=parseInt(precio);
	while(precio<100 || precio>300)
	{
		precio=prompt("Error.. Ingrese precio");
		precio=parseInt(precio);
	}
	cantidadDeUnidades=prompt("Ingrese cantidad de unidades");
	cantidadDeUnidades=parseInt(cantidadDeUnidades);
	while(cantidadDeUnidades<1 || cantidadDeUnidades>1000)
	{
		cantidadDeUnidades=prompt("Error...Ingrese cantidad de unidades");
		cantidadDeUnidades=parseInt(cantidadDeUnidades);
	}
	//marca=prompt("Ingrese marca");
	fabricante=prompt("Ingrese fabricante");

	switch(tipoDeProducto)
	{
		case "alcohol":
			cantidadDeUnidadesDeAlcohol=cantidadDeUnidadesDeAlcohol+cantidadDeUnidades;
			break;
		case "barbijo":
			cantidadDeUnidadesDebarbijo=cantidadDeUnidadesDebarbijo+cantidadDeUnidades;
				break;
		case "jabon":
			if(banderaDelJabonMasCaro==1)
			{
				cantidadDeUnidadesDeJabon=cantidadDeUnidades;
				fabricanteDeJabon=fabricante;
				precioDeJabon=precio;	
				banderaDelJabonMasCaro=0;			
			}
			else
			{
				if(precioDeJabon<precio)
				{
					cantidadDeUnidadesDeJabon=cantidadDeUnidades;
					fabricanteDeJabon=fabricante;
					precioDeJabon=precio;
				}	
			}			
			break;
	}

	if(cantidadDeUnidadesDeAlcohol>cantidadDeUnidadesDeJabon && cantidadDeUnidadesDeAlcohol>cantidadDeUnidadesDebarbijo)
	{
		tipoConMasUnidades="Alcohol";
		productoConMayorCantidad=cantidadDeUnidadesDeAlcohol;
	}
	else
	{
		if(cantidadDeUnidadesDeJabon>cantidadDeUnidadesDebarbijo)
		{
			tipoConMasUnidades="Jabon";
			productoConMayorCantidad=cantidadDeUnidadesDeJabon;
		}
		else
		{
			tipoConMasUnidades="Barbijo";
			productoConMayorCantidad=cantidadDeUnidadesDebarbijo;
		}
	}
cantidadDeProductosIngresados++;
}
promedioDeLoQuePide=productoConMayorCantidad/5;

console.log("Del más caro de los jabones, la cantidad de unidades y el fabricante"+ cantidadDeUnidadesDeJabon+ " fabricante"+fabricanteDeJabon);
console.log("Del tipo de producto con más unidades en total de la compra, el promedio por compra"+promedioDeLoQuePide);
console.log("unidades de barbijos: "+cantidadDeUnidadesDebarbijo);

}
