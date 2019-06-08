var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click",  cal);

function cal() {
    var numer = 0;
    numero = parseInt(document.getElementById('a').value);
    console.log(numero);

    if (numero > 0) {
    resultado.innerHTML = '<p> El Número Introducido:  '+ numero +' es positivo </p>'
    }
    else if( numero < 0) {
        resultado.innerHTML = '<p> El Número Introducido:  '+ numero +' es negativo</p>'
    }
    else {
        resultado.innerHTML = '<p> El Número Introducido:  '+ numero +' es Cero o Nulo</p>'
    }
}
