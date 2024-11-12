'use strict';

//array donde vamos a guardas todos los empleados
let empleados = [];

//objeto empleado con sus propiedades
function empleado (id, nombre, apellidos, fecha, cargo) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fecha = fecha;
    this.cargo = cargo;
}

//funcion para agregar un empleado al array de empleados
function agregarEmpleado () {
    const id = document.getElementById("empleadoid").value;
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const fecha = document.getElementById("fecha").value;
    const cargo = document.getElementById("cargo").value;

    const nuevoEmpleado = new empleado (id, nombre, apellidos, fecha, cargo);
    empleados.push(nuevoEmpleado);

    //llamamos a la funcion limpiar los campos que iguala todo los valores recogidos 
    limpiarCampos();
    //si se ha insertado el empleado se lo hacemos saber al usuario con un alert
    alert("Empleado agregado correctamente");
}

//la funcion limpiar campos iguala todos los valores de los campos recogidos a un espacio en blanco
function limpiarCampos() {
    document.getElementById("empleadoid").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("cargo").value = "";
}

//funcion para mostrar la lista de los campos
function mostrarEmpleados(){

    //creamos una constante llamada lista de empleados en la que se refleje en el documento como una ul
    const listaEmpleados = document.createElement('ul');

    //para cada elemento del array vacio llamado empleados le llamamos empleado y le decimos para cada elemento, se va a crear un list item en el que contendra el objeto empleado con sus propiedades 
    empleados.forEach(empleado => {

        const li = document.createElement("li");
        
        li.textContent = `ID: ${empleado.id}, Nombre: ${empleado.nombre}, Apellidos: ${empleado.apellidos}, Fecha de Nacimiento: ${empleado.fecha}, Cargo: ${empleado.cargo}`;

        //esto agrega el li como hijo del ul
        listaEmpleados.appendChild(li);
    });

    //agregamos la lista creada como hija del body, es decir, pasamos de crearla en memoria a usarla y que este dentro del body
    document.body.appendChild(listaEmpleados);
}

//funcionalidades de los botones
document.querySelector(".cargar").addEventListener("click", agregarEmpleado);
document.querySelector(".mostrar").addEventListener("click", mostrarEmpleados);