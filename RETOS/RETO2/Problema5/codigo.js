var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click", cal);


var a = 0;
var b = 0;
var c = 0;
var total;

function cal() {
    a = parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);
    c = parseInt(document.getElementById("c").value);

    // alert("funcione");
    p= ( (a+b+c)/2 );
    t= p*(p-a)*(p-b)*(p-c);
    total = Math.sqrt(t);
    console.log(total);
    resultado.innerHTML = "El Área del Triángulo es : "+ parseFloat(total).toFixed(4) ;

}


