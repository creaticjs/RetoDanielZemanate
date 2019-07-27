var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click", cal);

function cal() {

    var valx = parseInt(document.getElementById('a').value);
    var suma = 0;
    var total = 0;

    for (var i = 1; i <= 100; i++) {
        var numeroSuma = Math.pow(valx, (i + 1)) / (this.factorial(i));
        total = total + numeroSuma;
    }

    suma = 1 + total;
    resultado.innerHTML = suma;

    function factorial() {
        var factorial = 1;
     
            for (var i=1; i <= document.getElementById ('a').value; i++){
                factorial *= i;
            }
     
           resultado.innerHTML = factorial;
}
}
