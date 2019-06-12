var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click",  cal);

function cal() {
    var decimales =parseFloat(document.getElementById("a").value);
    var i = 1,
        p = 0;
    while (i < 50000000){
        p += 1/i - 1/(i+2);
        i += 4;
    }
    resultado.innerHTML= +(4*p).toFixed(decimales);
  }
   
