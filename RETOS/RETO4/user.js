
    function traerDatos(url = "https://randomuser.me/api/", callback){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(this.readyState==4 && this.status==200){
                    console.log(JSON.parse(this.responseText));
                   callback(JSON.parse(this.responseText))
                //usuario = JSON.parse(this.responseText);
                //document.getElementById("nombre").innerHTML = usuario.name;
                //document.getElementById("id").innerHTML = usuario.id;
                }
            };
            //xhttp.open("GET", "https://swapi.co/api/people1");
           // xhttp.send();
            xhttp.open("GET",url);
            xhttp.send();
        }
//var contenido= document.getElementById("contenido").value;
var contendio= document.querySelector('#contenido');
function traer() {
    //contendio.innerHTML=`hola`;
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data =>{
        console.log(data.results['0']);
        contendio.innerHTML=`
        <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle">
        <p>Nombre: ${data.results['0'].name.first} ${data.results['0'].name.last} </p>
        <p>Ciudad: ${data.results['0'].location.city}, Direccion:  ${data.results['0'].location.street} </p>
        
        `
    })
      
}
    // .then(data => {
    //     console.log(data);
    //     contendio.innerHTML= data;)};