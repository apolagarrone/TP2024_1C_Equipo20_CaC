let persona=document.querySelector("#Persona");
let personaCopia=persona.cloneNode(true);

let contenedor=document.querySelector("#main-reseñas");//cambio main por main-reseñas
persona.remove()

 let botonAgregar=document.querySelector("#Agregar");
 botonAgregar.addEventListener("click", function(){
   AgregarPersona();
 
 });

 let botonQuitar = document.querySelector("#Quitar");
 botonQuitar.addEventListener("click", QuitarPersona)

let indexPersona=0;


 function AgregarPersona(){
    fetch("https://apolagarrone.github.io/TP2024_1C_Equipo20_CaC/datos.json")
    .then(response => response.json())
    .then(data => {
        // Procesamiento de la info que llega de la API
        let destino = data[0].Destinos[indexPersona];
        
        let nuevaPersona = personaCopia.cloneNode(true);
        nuevaPersona.querySelector("#Foto").src = destino.image;
        nuevaPersona.querySelector("#Foto").alt = "fot CV";
        nuevaPersona.querySelector("#Nombre").innerHTML = destino.Nombre;
        nuevaPersona.querySelector("#Servicio").innerHTML = destino.Servicio;

        nuevaPersona.querySelector("#Descripcion").innerHTML = destino.Descripcion;

        contenedor.appendChild(nuevaPersona);

        // Incrementar el índice para la próxima persona
        indexPersona++;

       
        if (indexPersona >= data[0].Destinos.length) {
            indexPersona=0; // inicia otra vez los registros
        }
        

       
    })
    .catch(error => console.log("Ocurrió un error! " + error));
}




function QuitarPersona(){
    if(contenedor.childElementCount > 0){
        contenedor.removeChild(contenedor.lastChild);
    }
}

/*
 let comentario = document.querySelectorAll('#Persona');
        
        let tamañoWidth = comentario[0].clientWidth;
        
        comentario.style.transform = "translate" + (- tamañoWidth * indexPersona) + "px";

}*/

