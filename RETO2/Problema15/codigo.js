var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click",  hola);

var a = document.getElementById('a').value;
var b = document.getElementById('b').value;
console.log(a,b);

function daysInMonth(a, b) {


console.log(a,b);

 return new Date(b || new Date().getFullYear(),a, 0).getDate();
}
 function hola(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
     
     resultado.innerHTML =  '<p>EL mes: '+a+' del año: '+b+' tiene: '+daysInMonth(a,b)+' dias </p>';
 }

daysInMonth(2, 2009); // 28
daysInMonth(2, 2008); // 29

