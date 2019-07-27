var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click", cal);

function cal(){

        var numero= parseInt(document.getElementById('a').value);
        console.log("Has introducido el numero: " + numero);
        console.log("Inicio bucle desde 2 hasta " + (numero - 1));
      
        for (var i = 2; i < numero; i++) {
      
          console.log("Modulo entre " + numero + " y " + i + " = " + (numero % i));
      
          if (numero % i === 0) {
            console.log(i + " es un multiplo de " + numero);
            console.log(numero + " no es un numero primo porque " + i + " es un multiplo");
            resultado.innerHTML ='<p> '+numero +' no es un numero primo porque '+ i +' es un multiplo</p>';
            return false;
          }
      
        }
      
        if (numero === 1) {
          console.log("Has introducido el numero 1, recuerda que NO es un numero primo");
          resultado.innerHTML ='<p> '+numero +' no es un número primo</p>';
        } else {
          console.log("Como el numero ingresado no tuvo mas múltiplos entonces determinamos que SI es un numero primo.");
          resultado.innerHTML ='<p> '+numero +' es un numero primo </p>';
        }
      
        console.log("-------------------------------------");
      }
    
      


