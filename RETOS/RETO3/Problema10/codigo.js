
var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click", cal);

function cal(){

        var numA = parseInt(document.getElementById('a').value);
        var numB = parseInt(document.getElementById('b').value);

        var mcdFinal = 1;
        if (numA > numB) {
            mcdFinal = mcd(numA, numB);
            resultado.innerHTML='<p>El MCD entre '+numA+'  y  '+numB+' es: ' + mcdFinal + ' </p>';
        } else {
            resultado.innerHTML= "Error de sintaxis";
        } 
    }
    
    function mcd(a, b) {
        if (!b) {
            return a;
        }
        return mcd(b, a % b);
    };
