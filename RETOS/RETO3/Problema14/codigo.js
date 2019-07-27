var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click", cal);

function cal(){

    var numero = parseInt(document.getElementById('a').value);
    var resultado1 = '';
    var espacio = '<br>'

    if (numero > 0) {
        for (var x = 1; x <= numero; x++) {
            var viñeta = '*'
            var variable = ''
            for (var j = 1; j <= x; j++) {
                variable += viñeta;
            }
            resultado1 += variable + espacio;
        }
      resultado.innerHTML = '<h3>' + resultado1 + ' </h3>';
    } else {
        resultado.innerHTML = '<p> ERROR DE SINTAXIS </p>';
    }
}