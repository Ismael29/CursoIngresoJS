/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
 var dividendo; 		                                // variables 
 var divisor;		
 var divisiontotal;		                              // variable para division total
 
 var dividendo = txtIdNumeroDividendo.value;		 // valores tomados de ID
 var divisor = txtIdNumeroDivisor.value;
 dividendo=parseInt(dividendo);                    // transforma el value de id tomado como string a numero 
 divisor=parseInt(divisor);
 divisiontotal= dividendo%divisor;	              // asigno el mod  a la variable
 alert("El resto es  "+divisiontotal );			 // mostrar resultado por alert
}
