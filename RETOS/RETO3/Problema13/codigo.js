var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click", cal);

function cal(){

        var numero = parseInt(document.getElementById('a').value);
        var resultado1 = 0;
    
        if (numero > 0) {
    
            for (var i = 1; i <= numero; i++) {
                const num = i;
                const total = Math.pow(2, i);
                resultado1 += num / total;
                console.log(resultado1);
            }
            resultado.innerHTML = '<p> El resultado de la suma de la serie hasta n terminos es : ' + resultado1 + ' </p>';
        } else {
            resultado.innerHTML = '<p>Error de Sintaxis </p>';
    }
}