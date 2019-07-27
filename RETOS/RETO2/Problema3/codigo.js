var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click", cal);


var m1 = 0;
var c = 2.99e10; 
var total;

console.log(c);

function cal() {
    m1 = parseInt(document.getElementById("m1").value);

    // alert("funcione");
    total = ( c * m1* m1*m1 );
    console.log(total);
    resultado.innerHTML = total + " ergioz";

}


