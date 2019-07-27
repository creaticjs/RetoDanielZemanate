var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click", cal);

function cal() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var d = document.getElementById('d').value;
    var e = document.getElementById('e').value;
    var f = document.getElementById('f').value;
    console.log(a,b,c,d,f);
    var x = ((c*e)-(b*f))/((a*e)-(b*d));
    var y = ((a*f)-(c*d))/((a*e)-(b*d));
  

    resultado.innerHTML = '<p>Valor x: ' + x + ' valor y: '+ y +' </p>';
}