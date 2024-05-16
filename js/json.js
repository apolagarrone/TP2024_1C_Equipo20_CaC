let persona=document.querySelector("#Persona");
let personaCopia=persona.cloneNode(true);

let contenedor=document.querySelector("main");
persona.remove()


fetch("https://apolagarrone.github.io/TP2024_1C_Equipo20_CaC/datos.json")
.then(response => response.json())
.then(data => {
    // Procesamiento de la info que llega de la API
   let nuevaPersona=personaCopia.cloneNode(true);

   nuevaPersona.querySelector("#Foto").src=data[0].Destinos[1].image;
   nuevaPersona.querySelector("#Foto").alt="fot CV";
   nuevaPersona.querySelector("#Nombre").innerHTML=data[0].Destinos[0].Nombre;
   nuevaPersona.querySelector("#Origen").innerHTML=data[0].Destinos[0].Origen;
   nuevaPersona.querySelector("#Descripcion").innerHTML=data[0].Destinos[0].Descripcion;
   
   contenedor.appendChild(nuevaPersona);



    })
.catch(error => console.log("Ocurrió un error!"));

