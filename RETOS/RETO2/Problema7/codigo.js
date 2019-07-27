var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click", cal);

var dia;
var year;
var meses;
var x;

function cal() {
    dia = parseInt(document.getElementById("dia").value);
    year = document.getElementById("year").value;
    meses=document.getElementById("meses");
    x = document.getElementById("meses").length;

    for (let i = 1; i < x; i++) {
        //  Aca haces referencia al "option" actual
        var opt = i;
        // Haces lo que te de la gana aca
        console.log(opt);
        resultado.innerHTML = "La fecha es : "+ dia + "/ " + i + "/ "+ year;
    }

    
}

