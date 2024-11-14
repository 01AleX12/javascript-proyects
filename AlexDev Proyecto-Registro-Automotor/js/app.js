'use strict';

class Coche { 
    constructor(nombre, año, propietario) {

        //propiedades
        this.nombre = nombre;
        this.año = año;
        this.propietario = propietario;
    }

    // Método para cambiar el propietario del coche
    cambiarPropietario(nuevoPropietario) {

        this.propietario = nuevoPropietario;

        console.log(`El nuevo propietario de ${this.nombre} es ${nuevoPropietario}`);
    }

    // Método para mostrar los detalles del coche
    verDetalles() {
        return `${this.nombre} - ${this.año} - Propietario: ${this.propietario}`;
    }
}

// Crear instancias de Coche
const coche1 = new Coche("Ford Fiesta", 2015, "Martín Pérez");
const coche2 = new Coche("Chevrolet Camaro", 2018, "Silvia Marquez");
const coche3 = new Coche("Toyota Corolla", 2021, "Carlos Gómez");

// Array para almacenar los coches
const listaCoches = [coche1, coche2, coche3];

// Variable para almacenar el coche seleccionado
let cocheSeleccionado = null;

// Función para mostrar los coches en la interfaz
function mostrarCoches() {

    const lista = document.getElementById("listaCoches"); // Asegúrate de que el ID en el HTML coincida con este

    lista.innerHTML = ""; // Limpiar la lista antes de mostrarla

    listaCoches.forEach((coche, index) => {

        const item = document.createElement("li");

        item.innerText = `${index + 1}. ${coche.verDetalles()}`;

        lista.appendChild(item);
    });
}

// Función para seleccionar un coche del array
function seleccionarCoche() {

    const indice = prompt("Introduce el número del coche que quieres seleccionar (1, 2 o 3):");

    const indiceCoche = parseInt(indice) - 1; 

    if (indiceCoche >= 0 && indiceCoche < listaCoches.length) {
        cocheSeleccionado = listaCoches[indiceCoche];

        alert(`Coche seleccionado: ${cocheSeleccionado.verDetalles()}`);
    } else {
        alert("Número inválido. Por favor, selecciona un número válido.");
    }
}

// Función para arrancar el motor del coche seleccionado
function arrancarMotor() {

    const estadoMotor = document.getElementById("estadoMotor");

    if (cocheSeleccionado) {

        estadoMotor.innerText = `El motor del coche ${cocheSeleccionado.nombre} está arrancado.`; // Muestra el mensaje en la página
    
    } else {
        estadoMotor.innerText = "Por favor, selecciona un coche primero.";
    }
}

// Función para cambiar el nombre del propietario del coche seleccionado
function cambiarPropietario() {

    if (cocheSeleccionado) {

        const nuevoPropietario = prompt("Introduce el nuevo nombre del propietario:");

        if (nuevoPropietario) {

            cocheSeleccionado.cambiarPropietario(nuevoPropietario);

            alert(`Propietario cambiado a: ${nuevoPropietario}`);

            mostrarCoches(); 
        } else {
            alert("No se ha introducido un nombre válido.");
        }
    } else {
        alert("Por favor, selecciona un coche primero.");
    }
}
