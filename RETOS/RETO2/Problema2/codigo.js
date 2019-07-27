var m1 = 0;
var m2= 0;
var d1 = 1;
var gravedad = 6.673e-8; 
var total;

var resultado = document.getElementById("resultado");
var p= document.getElementById("calcular");
p.addEventListener("click",cal);

console.log(gravedad);

function cal() {
    masa1 = parseInt(document.getElementById("m1").value);
    masa2 = parseInt(document.getElementById("m2").value);
    distancia = parseInt(document.getElementById("d1").value);
    // alert("funcione");
    total = ( gravedad * masa1 * masa2 )/ (distancia*distancia);
    console.log(total);
    resultado.innerHTML = total;

}


