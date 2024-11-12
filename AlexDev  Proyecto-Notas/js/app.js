let notas = []; // Array vacío donde se guardarán las notas ingresadas

// Función para mostrar las notas ingresadas en la lista
function mostrarNotas() {
    // Capturamos el valor del campo de entrada donde el usuario ingresa las notas
    const notasInput = document.getElementById("notasInput").value;

    // Convertimos el string de notas en un array de números
    // Separamos por comas y eliminamos espacios innecesarios
    notas = notasInput.split(',').map(nota => parseFloat(nota.trim())); 

    // Obtenemos el elemento de la lista donde se mostrarán las notas
    const listaNotas = document.getElementById("listaNotas");
    listaNotas.innerHTML = ""; // Limpiamos la lista anterior

    // Añadimos cada nota como un elemento <li> a la lista <ul>
    notas.forEach(nota => {
        const li = document.createElement("li"); // Creamos un nuevo elemento de lista
        li.textContent = nota; // Asignamos el texto de la nota
        listaNotas.appendChild(li); // Añadimos el elemento a la lista
    });
}

// Función para calcular el promedio
function calcularPromedio() {
    // Verificamos si hay notas ingresadas
    if (notas.length === 0) {
        alert("Primero debes ingresar las notas."); // Alerta si no hay notas
        return; // Salimos de la función
    }
    // Calculamos la suma de todas las notas
    const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    // Calculamos el promedio dividiendo la suma por la cantidad de notas
    const promedio = suma / notas.length;
    // Mostramos el promedio en el elemento con el id 'promedio', con 1 decimal
    document.getElementById('promedio').textContent = promedio.toFixed(1); 
}

// Función para buscar la nota más alta
function buscarNotaMasAlta() {
    // Verificamos si hay notas ingresadas
    if (notas.length === 0) {
        alert("Primero debes ingresar las notas."); // Alerta si no hay notas
        return; // Salimos de la función
    }
    // Encontramos la nota más alta usando Math.max
    const notaMasAlta = Math.max(...notas);
    // Mostramos la nota más alta en el elemento con el id 'notaMasAlta'
    document.getElementById('notaMasAlta').textContent = notaMasAlta;
}

// Función para consultar si hay algún suspenso
function consultarSuspenso() {
    // Verificamos si hay notas ingresadas
    if (notas.length === 0) {
        alert("Primero debes ingresar las notas."); // Alerta si no hay notas
        return; // Salimos de la función
    }
    // Comprobamos si hay alguna nota menor de 5
    const haySuspenso = notas.some(nota => nota < 5); // true si alguna nota es menor de 5
    // Mostramos 'Sí' o 'No' en el elemento con el id 'suspenso'
    document.getElementById('suspenso').textContent = haySuspenso ? 'Sí' : 'No';
}
