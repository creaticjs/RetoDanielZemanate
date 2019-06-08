var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click", cal);

function cal() {
    var radious = document.getElementById('radio').value;
    var diameter = 2*radious;
    var pi = 3.1416;
    var circ = pi*diameter;
    var diameter2 = Math.pow(radious, 2)
    var area = pi*diameter2;

    resultado.innerHTML = '<p>Circunferencia: ' + circ + ' | Area: ' + area + ' | Diametro: ' + diameter + ' </p>';
}