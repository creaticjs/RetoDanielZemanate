var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click",  cal);

function cal() {
    
var horas_trabajadas = document.getElementById('a').value;
var precio_hora= document.getElementById('b').value;
var salario = 0;
var horas_extra = 0;
console.log(horas_trabajadas, precio_hora);

    if (horas_trabajadas > 0 && horas_trabajadas < 38) {
    salario = horas_trabajadas * precio_hora;
    resultado.innerHTML = '<p> El salario del trabajador es:  '+ salario +' pesetas </p>'
    }
    else {
        horas_extra = horas_trabajadas - 37;
        salario = (horas_extra* (precio_hora *0.5) + (37 * precio_hora));
        resultado.innerHTML = '<p> El salario del trabajador es:  '+ salario +' pesetas </p>'
    }
    if (salario > 50000){
        var tax= salario * 0.1;
        resultado.innerHTML = '<p> El salario del trabajador es:  '+ salario +' pesetas y los impuestos son: '+tax+' pesetas </p>'
    }
}
