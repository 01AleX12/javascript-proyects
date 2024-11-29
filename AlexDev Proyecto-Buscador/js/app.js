// Esperamos a que todo el contenido del DOM esté cargado para comenzar a ejecutar el código
document.addEventListener("DOMContentLoaded", function() {

    // Inicializamos un objeto que contendrá los datos de búsqueda seleccionados por el usuario
    const datosBusqueda = {
        marca: '', // Marca del vehículo
        year: '', // Año de fabricación
        precioMin: '', // Precio mínimo deseado
        precioMax: '', // Precio máximo permitido
        puertas: '', // Cantidad de puertas requeridas
        transmision: '', // Tipo de transmisión
        color: '' // Color del vehículo
    }

    // Obtenemos referencias a los elementos del formulario según su identificador
    const marca = document.querySelector('#marca')
    const year = document.querySelector('#year')
    const minimo = document.querySelector('#minimo')
    const maximo = document.querySelector('#maximo')
    const puertas = document.querySelector('#puertas')
    const transmision = document.querySelector('#transmision')
    const color = document.querySelector('#color')

    // Agregamos un evento `change` a cada uno de los elementos del formulario
    // Este evento se activa cada vez que el usuario selecciona un nuevo valor en un campo
    marca.addEventListener('change', (e) => {
        datosBusqueda.marca = e.target.value // Guardamos el valor seleccionado en el objeto datosBusqueda
        filtrarAutos() // Llamamos a la función para aplicar los filtros y mostrar los resultados
    })

    year.addEventListener('change', (e) => {
        datosBusqueda.year = e.target.value
        filtrarAutos()
    })

    minimo.addEventListener('change', (e) => {
        datosBusqueda.precioMin = e.target.value
        filtrarAutos()
    })

    maximo.addEventListener('change', (e) => {
        datosBusqueda.precioMax = e.target.value
        filtrarAutos()
    })

    puertas.addEventListener('change', (e) => {
        datosBusqueda.puertas = e.target.value
        filtrarAutos()
    })

    transmision.addEventListener('change', (e) => {
        datosBusqueda.transmision = e.target.value
        filtrarAutos()
    })

    color.addEventListener('change', (e) => {
        datosBusqueda.color = e.target.value
        filtrarAutos()
    })

    // Función principal que se encarga de filtrar los autos basándose en los datos seleccionados
    function filtrarAutos() {
        // Aplicamos los filtros al listado de autos usando el método filter
        const autosFiltrados = autos
            .filter(filtrarMarca)
            .filter(filtrarYear)
            .filter(filtrarPrecioMin)
            .filter(filtrarPrecioMax)
            .filter(filtrarPuertas)
            .filter(filtrarTransmision)
            .filter(filtrarColor)

        // Mostramos los autos que cumplieron con los filtros en el DOM
        mostrarAutos(autosFiltrados)
    }

    // Función para filtrar autos por marca
    // Verifica si el auto coincide con la marca seleccionada
    function filtrarMarca(auto) {
        if (datosBusqueda.marca && auto.marca !== datosBusqueda.marca) {
            return false // Si la marca no coincide, el auto no pasa el filtro
        }
        return true // Si no hay marca seleccionada o coincide, el auto pasa el filtro
    }

    // Función para filtrar autos por año
    function filtrarYear(auto) {
        if (datosBusqueda.year && auto.year !== parseInt(datosBusqueda.year)) {
            return false
        }
        return true
    }

    // Función para filtrar autos por precio mínimo
    function filtrarPrecioMin(auto) {
        if (datosBusqueda.precioMin && auto.precio < parseInt(datosBusqueda.precioMin)) {
            return false
        }
        return true
    }

    // Función para filtrar autos por precio máximo
    function filtrarPrecioMax(auto) {
        if (datosBusqueda.precioMax && auto.precio > parseInt(datosBusqueda.precioMax)) {
            return false
        }
        return true
    }

    // Función para filtrar autos por número de puertas
    function filtrarPuertas(auto) {
        if (datosBusqueda.puertas && auto.puertas !== parseInt(datosBusqueda.puertas)) {
            return false
        }
        return true
    }

    // Función para filtrar autos por tipo de transmisión
    function filtrarTransmision(auto) {
        if (datosBusqueda.transmision && auto.transmision !== datosBusqueda.transmision) {
            return false
        }
        return true
    }

    // Función para filtrar autos por color
    function filtrarColor(auto) {
        if (datosBusqueda.color && auto.color !== datosBusqueda.color) {
            return false
        }
        return true
    }

    // Función para mostrar los autos que cumplen con los filtros
    function mostrarAutos(autos) {
        const resultado = document.querySelector('#resultado') // Seleccionamos el contenedor de resultados

        resultado.innerHTML = '' // Limpiamos los resultados anteriores

        if (autos.length === 0) {
            mostrarMensaje('No se encontraron autos que coincidan con los filtros', 'error') // Mostramos un mensaje si no hay resultados
        } else {
            // Recorremos el listado de autos filtrados y creamos elementos en el DOM para mostrarlos
            autos.forEach(auto => {
                const autoHTML = document.createElement('p')
                autoHTML.textContent = `${auto.marca} ${auto.modelo} (${auto.year}) - $${auto.precio} - ${auto.color} - ${auto.transmision}`
                resultado.appendChild(autoHTML)
            })
        }
    }

    // Función para mostrar un mensaje de error si no hay resultados
    function mostrarMensaje(msg, tipo) {
        const div = document.createElement('div') // Creamos un elemento div para mostrar el mensaje
        div.classList.add('alerta', tipo) // Le agregamos clases para darle estilo
        div.textContent = msg // Asignamos el texto del mensaje
        const resultado = document.querySelector('#resultado')
        resultado.appendChild(div) // Agregamos el mensaje al contenedor de resultados
    }

    // Función para llenar el selector de años con valores dinámicos
    function llenarSelect() {
        const yearSelect = document.querySelector('#year') // Seleccionamos el elemento select de años
        const anioMin = 2000 // Año mínimo permitido
        const anioMax = new Date().getFullYear() // Año máximo es el actual

        // Rellenamos el selector con los años desde el más reciente al más antiguo
        for (let i = anioMax; i >= anioMin; i--) {
            const option = document.createElement('option') // Creamos una opción para el select
            option.value = i
            option.textContent = i
            yearSelect.appendChild(option) // Agregamos la opción al selector
        }
    }

    // Llamamos a la función para llenar el selector de años al cargar la página
    llenarSelect()
})
