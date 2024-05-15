
fetch("https://apolagarrone.github.io/TP2024_1C_Equipo20_CaC/datos.json")
.then(response => response.json())
.then(data => {
    // Procesamiento de la info que llega de la API
    console.log(data);
    })
.catch(error => console.log("Ocurrió un error!"));

