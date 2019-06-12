var resultado = document.getElementById("resultado");
var p = document.getElementById("calcular");
p.addEventListener("click",  generarInputs);


  function generarInputs(){
    var cantidad = document.getElementById("cantidad").value;
    
    var inputs = "";
    var inputContainer = document.getElementById("inputs");
    
    for (let i = 1; i <= cantidad ; i++)
    {
        inputs += `<input id="numero`+i+`" type="number" class="form-reto text-center" placeholder="Numero `+i+`">`;
    }
    
    inputContainer.innerHTML = inputs;

    document.getElementById("boton").innerHTML = '<br><input type ="button" class="botones" value="calcular" id="obtener"></br>';
    var a = document.getElementById("obtener");
    a.addEventListener("click",  cal);
}


function cal() {
    var suma = 0;
    var cantidad = document.getElementById("cantidad").value; 
    for (let i = 1; i <= cantidad ; i++)
    {
        var num =parseFloat(document.getElementById("numero"+i).value);
        suma += num;
    }

var media = suma/cantidad;
resultado.innerHTML = media;
}
