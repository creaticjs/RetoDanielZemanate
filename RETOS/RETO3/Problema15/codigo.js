var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click", cal);

var a = 0;
var suma =0;

function cal() {
    var numero = parseInt(document.getElementById("a").value);
    console.log(numero);

        for (i = 1; i < numero; i++) {  // i son los divisores. Se divide desde 1 hasta numero-1 
            if (numero % i == 0) {
                 suma = suma + i;     // si es divisor se suma
            }
        }
        if (suma == numero) {  // si el numero es igual a la suma de sus divisores es perfecto
            resultado.innerHTML = '<p> El numero: '+ numero +' es perfecto </p>';
        }
        else {//  si el numero no es igual a la suma de sus divisores no es perfecto
            resultado.innerHTML = '<p> El numero: '+ numero +' no es perfecto </p>';
        }
   
}