var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click", cal);



function cal() {
    var a = document.getElementById('a').value;
      if (((a % 4 == 0) && (a % 100 != 0 )) || (a % 400 == 0)){
        resultado.innerHTML = '<p>El año ' + a + ' es bisiesto  </p>';
      }
    
      else {
        resultado.innerHTML = '<p>El año ' + a + ' no es bisiesto  </p>';;
      }
}