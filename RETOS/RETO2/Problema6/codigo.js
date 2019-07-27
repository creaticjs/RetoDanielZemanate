var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click", cal);

var horas;
var minutos;

function cal() {
    horas = parseInt(document.getElementById("horas").value);
    minutos = document.getElementById("minutos").value;
    if (horas>0 && horas<12) 
    {
        if (minutos.length<2) 
        {
            resultado.innerHTML = "La hora en formato 12 horas es : "+ horas + ":0" + minutos + "AM";
        }
        else
        {
            resultado.innerHTML = "La hora en formato 12 horas es : "+ horas + ":" + minutos + "AM";
        }
    }
    else if(horas>=12 && horas<=24)
        {
            if (minutos.length<2) 
            {
                horas= horas -12;
                resultado.innerHTML = "La hora en formato 12 horas es : "+ horas + ":0" + minutos + "PM";
            }
            else 
            {
                horas= horas -12;
                resultado.innerHTML = "La hora en formato 12 horas es : "+ horas + ":" + minutos + "PM";
            }
        }
           
            
}


