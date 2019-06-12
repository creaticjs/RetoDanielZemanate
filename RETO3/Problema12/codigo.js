var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click", cal);

function cal(){

    var numero = parseInt(document.getElementById('a').value);
    var suma = 0;

    if (numero > 0) {
        for (var i = 0; i < numero; i++) {
            suma += 1 / (i + 1);
        }
        resultado.innerHTML = '<p>El resultado de la suma de la serie es: ' + suma + '</p>';
    } else {
      resultado.innerHTML = '<p>Error de sintaxis</p>';
    }
}
      


