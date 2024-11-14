'use strict';

// Función para mostrar los animales en la interfaz
function mostrarAnimales() {

    const lista = document.getElementById("listaAnimales");
    
    lista.innerHTML = ""; // Limpiar la lista antes de mostrarla

    listaAnimales.forEach((animal) => {
        const item = document.createElement("li");

        item.innerText = animal.verDetalles();

        lista.appendChild(item);
    });
}

// Clase base Animal
class Animal {
    constructor(nombre, peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    verDetalles() {
        return `${this.nombre} - ${this.peso} kg - ${this.edad} años`;
    }
}

// Clase Perro que hereda de Animal y tiene la propiedad adicional raza
class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad);
        this.raza = raza;
    }

    verDetalles() {
        return `${super.verDetalles()} - Raza: ${this.raza}`;
    }
}

// Clase Gato que hereda de Animal y tiene la propiedad adicional sexo
class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad);
        this.sexo = sexo;
    }

    verDetalles() {
        return `${super.verDetalles()} - Sexo: ${this.sexo}`;
    }
}

// Clase Conejo que hereda de Animal y tiene la propiedad adicional color
class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad);
        this.color = color;
    }

    verDetalles() {
        return `${super.verDetalles()} - Color: ${this.color}`;
    }
}

// Crear instancias de cada tipo de animal
const perro1 = new Perro("Simba", 4, 11, "Shih Tzu");
const perro2 = new Perro("Max", 10, 3, "Labrador");
const perro3 = new Perro("Luna", 8, 5, "Bulldog");

const gato1 = new Gato("Ringo", 6, 4, "Macho");
const gato2 = new Gato("Mimi", 4, 2, "Hembra");
const gato3 = new Gato("Leo", 5, 3, "Macho");

const conejo1 = new Conejo("Dumbo", 3, 2, "Blanco");
const conejo2 = new Conejo("Bella", 2, 1, "Gris");
const conejo3 = new Conejo("Coco", 3, 3, "Negro");

// Array para almacenar todos los animales
const listaAnimales = [perro1, perro2, perro3, gato1, gato2, gato3, conejo1, conejo2, conejo3];