var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click", cal);

var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var n = 0;

function cal() {
    var año = parseInt(document.getElementById("a").value);
    if (año >= 1900 && año <= 2000) {
        a = año % 19;
        b = año % 4;
        c = año % 7;
        d = (19 * a + 24) % 30;
        e = ((2 * b) + (4 * c) + (6 * d) + 5) % 7;
        n = (22 + d + e);
        printDate(n);
    }
    else {
        resultado.innerHTML = '<p>Fecha Incorrecta </p>';
    }

}
function printDate(n) {
    if (n <= 31) {
        resultado.innerHTML = '<p>Fecha del Domingo de Pascua es: ' + n + ' de Marzo</p>';
    } else {
        const aprilDate = n - 31;
        resultado.innerHTML = '<p>Fecha del Domingo de Pascua es: ' + aprilDate + ' de Abril</p>';
    }
}
