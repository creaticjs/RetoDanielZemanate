var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click",  cal);

function cal() {
    
var salario = parseInt (document.getElementById('a').value);
var aumento = 0;
var SalarioNuevo = 0;
console.log(salario);

    if (salario > 0 && salario <= 9000) {
    aumento = salario * 0.2 ;
    SalarioNuevo = salario+aumento;
    resultado.innerHTML = '<p> El salario del trabajador es:  '+ SalarioNuevo +' dolares </p>'
    }

    if (salario > 9001 && salario <= 15000) {
        aumento = salario * 0.1 ;
        SalarioNuevo = salario+aumento;
        resultado.innerHTML = '<p> El salario del trabajador es:  '+ SalarioNuevo +' dolares </p>'
    }
    if (salario > 15001 && salario <= 20000) {
        aumento = salario * 0.05 ;
        SalarioNuevo = salario+aumento;
        resultado.innerHTML = '<p> El salario del trabajador es:  '+ SalarioNuevo +' dolares </p>'
    }

    if (salario > 20000) {
        resultado.innerHTML = '<p> El salario del trabajador es:  '+ salario +' dolares </p>'
    }
}   
