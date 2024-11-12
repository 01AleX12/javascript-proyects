'use strict';

function recomendar() {
    // Obtener los valores del nombre, edad y género seleccionados
    const nombre = document.getElementById("nombre").value.trim();
    const edad = parseInt(document.getElementById("edad").value);
    const genero = document.getElementById("genero").value;
    const resultado = document.getElementById("resultado");

    // Validar la entrada de datos
    if (!nombre || isNaN(edad) || edad <= 0) {
        resultado.textContent = "Por favor, ingresa un nombre válido y una edad correcta.";
        return; // Detener la ejecución si hay error
    }

    let peliculas = [];

    // Lógica para recomendar películas basadas en la edad y el género usando switch
    switch (genero) {
        case "drama":
            if (edad < 13) {
                peliculas = ["La Vida es Bella", "Matilda", "Buscando a Nemo"];
            } else if (edad < 18) {
                peliculas = ["El Pianista", "Los Puentes de Madison", "El Nido"];
            } else {
                peliculas = ["El Noto", "La La Land", "Parasite"];
            }
            break;

        case "comedia":
            if (edad < 13) {
                peliculas = ["Los Increíbles", "Mi Villano Favorito", "Shrek"];
            } else if (edad < 18) {
                peliculas = ["Superbad", "Zombieland", "La Cosa Más Dulce"];
            } else {
                peliculas = ["La Gran Lebowski", "El Lobo de Wall Street", "Supercool"];
            }
            break;

        case "musical":
            if (edad < 13) {
                peliculas = ["Frozen", "Annie", "El Rey León"];
            } else if (edad < 18) {
                peliculas = ["The Greatest Showman", "Pitch Perfect", "Mamma Mia!"];
            } else {
                peliculas = ["Chicago", "La La Land", "Hamilton"];
            }
            break;

        case "crimen":
            if (edad < 13) {
                peliculas = ["Los Goonies", "El Pequeño Vampiro", "Jumanji"];
            } else if (edad < 18) {
                peliculas = ["Se7en", "El Club de la Pelea", "Knives Out"];
            } else {
                peliculas = ["El Padrino", "Scarface", "Goodfellas"];
            }
            break;

        default:
            resultado.textContent = "Género no válido. Por favor, selecciona un género correcto.";
            return; // Detener la ejecución si hay un género no válido
    }

    // Mostrar la recomendación de películas
    resultado.textContent = `${nombre}, te recomendamos: ${peliculas.join(", ")}`;
}
