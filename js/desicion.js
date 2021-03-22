"use strict"
var fomulario = document.getElementById("forma");
var salida = document.getElementById("salida");
var sexos = document.getElementsByName("sexo");

function cotizar(){
    var camisetaVerde = forma["camisetaVerde"].checked;
    var dia = forma["dia"].value;
    var edad = forma["edad"].value;
    var cotizacion = 1000.0;

    if(camisetaVerde){
        cotizacion-=100;
    }

    switch (dia){

        case "Viernes":
            cotizacion-=100;
            break;
        case "Domingo":
            cotizacion-=200;
            break; 
    }

    switch (edad){
        case "NINO":
        case "ADOLECENTE":
        case "JOVEN":
            cotizacion-=100;
        break;

        case "TERCERA_EDAD":
            cotizacion-=150;
    }

    for(var i = 0,  total = sexos.length; i < total; i++){
        var sexo = sexos[i];
    
        if(sexo.checked && sexo.value === "femenino"){
            cotizacion-=100;
        }

    }
    salida.innerHTML = "<small>Cotizacion: $</small>" + cotizacion;
}
