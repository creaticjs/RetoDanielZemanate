var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click", cal);


var a= 0;
var b = 0; 
var total;

function cal() {
    a = parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);

    // alert("funcione");
    t= ( (a*a) + (b*b) );
    total = Math.sqrt(t);
    console.log(total);
    resultado.innerHTML = total ;

}


