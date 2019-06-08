
var resultado = document.getElementById("resultado");
var p= document.getElementById("calcular");
p.addEventListener("click",promedio1);

function promedio1()
{
    var nota1 = document.getElementById("n1");
    n1 = parseInt(nota1.value);
    console.log(n1);

    var nota2 = document.getElementById("n2");
    n2 = parseInt(nota2.value);
    console.log(n2);
    c=(n1 + n2)/2;
  resultado.innerHTML = c;

}