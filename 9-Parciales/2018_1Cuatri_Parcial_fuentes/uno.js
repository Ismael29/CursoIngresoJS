
function mostrar()
{
    /*
    
    Enunciado c)”mixing bandera”
    de una cantidad de animales indeterminada del zoológico debemos tomar lo siguiente
    raza
    peso
    temperatura media del lugar donde habita
    edad
    si está en peligro de extinción( si o no)
    se debe informar:

    1-el promedio de edad total
    2-la raza del más pesado
    3-la temperatura máxima ingresada de los animales en extinción
    NOTA:pedir datos por "prompt()" y mostrar por console.log()
    */

    var respuesta;
    var raza;
    var peso;
    var temperaturaDemidaDelLugar;
    var edad;
    var siEstaEnPeligroDeExtincion;
    var contadorDeEdad;
    var promedioDeEdad;
    var banderaDelMasPesado;
    var razaDelMasPesado;
    var pesoDelMasPesado;
    var banderaDeTemperaturaMaxima;
    var temperaturaMaxima;
    var contadorDeAnimalesEnExticion;
    var edadTotal;


    respuesta=true;
    contadorDeEdad=0;
    banderaDelMasPesado=1;
    banderaDeTemperaturaMaxima=1;
    contadorDeAnimalesEnExticion=0;
    edadTotal=0;

    while(respuesta==true)
    {
        raza=prompt("Ingrese Raza");
        peso=prompt("Ingrese peso");
        peso=parseInt(peso);
        while(peso<0)
        {
            peso=prompt("Error ... Ingrese peso");
            peso=parseInt(peso);
        }
        temperaturaDemidaDelLugar=prompt("Ingrese temperatura..");
        temperaturaDemidaDelLugar=parseInt(temperaturaDemidaDelLugar);
        while(isNaN(temperaturaDemidaDelLugar))
        {
            temperaturaDemidaDelLugar=prompt("Error...Ingrese temperatura..");
            temperaturaDemidaDelLugar=parseInt(temperaturaDemidaDelLugar);
        }
        edad=prompt("Ingrese edad");
        edad=parseInt(edad);
        while(edad<0 || isNaN(edad))
        {
            edad=prompt("Error...Ingrese edad");
            edad=parseInt(edad);       
        }
        siEstaEnPeligroDeExtincion=prompt("Esta enpeligro de extincion? si o no ");
        while(siEstaEnPeligroDeExtincion!="si" && siEstaEnPeligroDeExtincion!="no")
        {
            siEstaEnPeligroDeExtincion=prompt("Error..Esta enpeligro de extincion? si o no ");           
        }
        edadTotal=edadTotal+edad;
        
        if(banderaDelMasPesado==1)
        {
            razaDelMasPesado=raza;
            pesoDelMasPesado=peso;
            banderaDelMasPesado=0;
        }
        else
        {
            if(pesoDelMasPesado<peso)
            {
                razaDelMasPesado=raza;
                pesoDelMasPesado=peso;
            }
        }

        if(siEstaEnPeligroDeExtincion=="si")
        {
            if(banderaDeTemperaturaMaxima==1)
            {
                temperaturaMaxima=temperaturaDemidaDelLugar;
                banderaDeTemperaturaMaxima=0;
            }
            else
            {
                if(temperaturaMaxima<temperaturaDemidaDelLugar)
                {
                    temperaturaMaxima=temperaturaDemidaDelLugar;
                }
            }
            console.log("animales en extincion temp max."+temperaturaMaxima);
            contadorDeAnimalesEnExticion++; 
        }
        else
        {
             if(contadorDeAnimalesEnExticion==0)
            {
                console.log("No hay animales en extincion.") 
            }
        }           
        respuesta=confirm("Quiere seguir ingresando animales?");
        contadorDeEdad++;
    }
    promedioDeEdad=edadTotal/contadorDeEdad;
    console.log("el promedio de edad total"+promedioDeEdad);
    console.log("la raza del más pesado"+razaDelMasPesado);
}
