
var totalconejos=0;
var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click", cal);

function cal() {
    var meses = 0;
    var numconejos = parseInt(document.getElementById('a').value);
    
    resultado.innerHTML = '<p>pares de conejos: ' + totalconejos + ' </p>';
}

function conejos(paresconejos) {

    var a = 1;
    var b = 0;
    var temp;
    var contador = 0;

    while (b <= paresconejos) {
        // console.log('b =>', b, ' Pair =>', pairOfRabbits);
        contador++;
        temp = a;
        a = a + b;
        b = temp;
        var totalconejos = b;


        console.log(totalconejos);
    }
    return contador;

}
