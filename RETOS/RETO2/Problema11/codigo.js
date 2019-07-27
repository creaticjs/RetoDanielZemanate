var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click", cal);

function cal(){
var a= document.getElementById('a').value;
var b= document.getElementById('b').value;
var c= document.getElementById('c').value;
var d= document.getElementById('d').value;
console.log(a,b,c,d);

suma= parseInt(c+d);

if (suma <= 50 && suma >= 0) 
{
   
    var miles = parseInt(a);
    var centenas=parseInt(b);
    var decenas= parseInt(c) - parseInt(c);
    var unidades=parseInt(d) - parseInt(d);
    resultado.innerHTML = ""+miles+""+centenas+""+decenas+""+""+unidades;
    
    
}
 if(suma > 50 && suma <=99)
{
    numero=parseInt(b);
    if (numero==9) {
        var miles = parseInt(a) + 1;
        var centenas=parseInt(b) - parseInt(b);
        var decenas= parseInt(c) - parseInt(c);
        var unidades=parseInt(d) - parseInt(d);
        resultado.innerHTML = ""+miles+""+centenas+""+decenas+""+""+unidades;
        
    }
    else{
    var miles = parseInt(a);
    var centenas=parseInt(b) + 1;
    var decenas= parseInt(c) - parseInt(c);
    var unidades=parseInt(d) - parseInt(d);
    }
    resultado.innerHTML = ""+miles+""+centenas+""+decenas+""+""+unidades;

}



}