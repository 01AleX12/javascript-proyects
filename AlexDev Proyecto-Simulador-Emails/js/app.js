document.addEventListener('DOMContentLoaded', () => {
    // Crear referencias a los elementos del DOM
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    //constante que almacena todo lo del formulario
    const form = document.querySelector('#formulario');

    //cogemos el boton de enviar y el de resetear del formulario para poder usarlos
    const submitButton = form.querySelector('button[type="submit"]');
    const resetButton = form.querySelector('button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    // Objeto principal para manejar el estado del formulario
    const contenido = {
        email: '',
        asunto: '',
        mensaje: ''
    };

    /*----------------------VALIDAR CAMPOS----------------------*/
    const validarCampo = (e) => {

        //guardamos el id y el value de lo que disparo el evento (inpt en este caso) y lo asociamos al elemento que disparó el evento
        const { id, value } = e.target;

        //si el valor sin espacios esta vacio 
        if (value.trim() === '') {
            //si esta vacio llamamos a la funcion mostrar alerta y le pasamos como argumentos el mensaje y el contenido que tiene que ser obligatorio
            mostrarAlerta(`El campo ${id} es obligatorio`, id);
            // Especificamos que el campo del formulario que se dejó vacío se actualiza en el objeto 'contenido'
            contenido[id] = ''; 
            // Llamamos a la función comprobarObjeto para verificar si hay campos vacíos en el objeto, para que asi se le aplique a todos los campos vacios,
            //ya que antes lo estabamos comprobando individualmente pero ahora comprobamos todos los campos del objeto, es decir, todos los campos del formulario
            comprobarObjeto();
            //acabamos la funcion
            return;
        }

        /*si el id que estamos usando, es decir, si el campo que estamos tocando es el que tiene el id email y no cumple la funcion validarEmail el value que tiene dentro el input, pues mostraremos una alerta con un mensaje que ponga que el email no es valido*/
        if (id === 'email' && !validarEmail(value)) {
            mostrarAlerta('El email no es válido', id);
            contenido[id] = ''; 
            comprobarObjeto();
            return;
        }

        limpiarAlerta(id); // Quitar alerta si existe y pasa validación
        contenido[id] = value.trim().toLowerCase(); // Actualizar el objeto
        comprobarObjeto(); // Verificar si el formulario está listo
    };

    /*----------------------VALIDAR EMAIL----------------------*/
    const validarEmail = (email) => {
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return validEmail.test(email);
    };

    /*----------------------MOSTRAR ALERTA----------------------*/
    /*le pasamos como parametros mensaje e id, id se sustituira por el id correspondiente*/
    const mostrarAlerta = (mensaje, id) => {

        /*antes de mostrar ninguna alerta, las borramos todas, para asi no mostrar
        alertas de mas*/
        limpiarAlerta(id); // Prevenir múltiples alertas

        /*creamos una constante llamada alerta que en el html nos cree un p,
        el contenido de ese p sera el mensaje que le pasamos por parametro*/
        const alerta = document.createElement('p');
        alerta.textContent = mensaje;
        //le añadimos a alerta algunas clases
        alerta.classList.add('bg-red-500', 'text-black', 'p-2', 'mt-1', 'rounded');
        
        /*Busca el elemento con el id que le pasas y selecciona el elemento padre al que pertenece, 
        .parentElement se asegura de que estamos trabajando con el contenedor del campo (no con el mismo campo), que es donde queremos añadir la alerta*/
        const campo = document.querySelector(`#${id}`).parentElement;
        /*Una vez que tenemos el contenedor del campo (que es el div que contiene el
        input), usamos appendChild() para añadir el elemento alerta (que es el mensaje
        de error) dentro de ese contenedor.*/
        campo.appendChild(alerta);
    };

    /*----------------------LIMPIAR ALERTA----------------------*/
    /*creo una funcion que se llame limpiarAlerta, a la que le pasare como argumento el id, creamos una constante que almacene el campo del que viene el id, y lo
    seleccionamos con querySelector el id que tenga una alerta, por eso ponemos 
    el id entre ${}, para que se sustituya, ponemos parentElement para que lo busque
    en el contenedor padre de ese id*/ 
    const limpiarAlerta = (id) => {
        const campo = document.querySelector(`#${id}`).parentElement;
        /*creamos otra variable llamada alerta que almacenara todo lo que contenga
        la clase .bg-red-500, ya que esa clase solo lo tienen los campos que tienen
        alertas*/
        const alerta = campo.querySelector('.bg-red-500');
        /*por ultimo, si alerta existe, la borramos */
        if (alerta) {
            alerta.remove();
        }
    };

    /*----------------------COMPROBAR OBJETO----------------------*/
    const comprobarObjeto = () => {
    // Creamos la constante 'valores' que almacenará todos los valores del objeto 'contenido'
        const valores = Object.values(contenido);
    // Si alguno de los valores del objeto está vacío (es una cadena vacía '')
        if (valores.includes('')) {
        // Deshabilitamos el botón de enviar
        submitButton.disabled = true;
        // Añadimos la clase 'opacity-50' para darle un aspecto deshabilitado
        submitButton.classList.add('opacity-50');
        } else {
        // Si todos los valores están completos (no hay valores vacíos)
        // Activamos el botón de enviar
        submitButton.disabled = false;
        // Removemos la clase 'opacity-50' para que el botón se vea completamente visible
        submitButton.classList.remove('opacity-50');
        }
    };

    /*----------------------ENVIAR EMAIL----------------------*/

    /*creamos una constante llamada enviar email y llamamos e al evento que se ejecuta*/
    const enviarEmail = (e) => {
        //esta funcion previene la ejecuccion predeterminada de un formulario, es decir, que le des a enviar y se envie al instante
        e.preventDefault();
        //le quitamos al spinner la propiedad hidden y le damos la flex, para que se vea al enviar el email
        spinner.classList.remove('hidden');
        spinner.classList.add('flex');

        /*usamos la funcion settimeout, que lo que hara es poner un tiempo por defecto
        hasta que se realize la accion de la funcion principal, en este caso, enviar el email */
        setTimeout(() => {
            //cuando se acabe el tiempo  el spinner volvera a estar escondido
            spinner.classList.add('hidden');
            spinner.classList.remove('flex');
            mostrarAlertaExito();
            resetearFormulario();
            //seteamos el tiempo en 3seg (3000miliseg)
        }, 3000);
    };

    /*----------------------MOSTRAR ALERTA DE EXITO----------------------*/
    const mostrarAlertaExito = () => {
        //creamos una constante que almacene la alerta, que se creara en el html como un p
        const alerta = document.createElement('p');
        //el contenido del p sera este mensaje y tendra las propiedades de abajo de css
        alerta.textContent = 'Mensaje enviado correctamente';
        alerta.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded', 'mt-2');
        //añadimos la alerta a todos los campos del formulario
        form.appendChild(alerta);
        //le establecemos un tiempo de 3seg, cuando pase ese tiempo, la alerta se borrará
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    };

    /*----------------------RESET FORMULARIO----------------------*/
    const resetearFormulario = () => {
        //cuanod presionemos el boton de reset, el formulario se reseteará
        form.reset();
        //todas las propiedades del objeto se quedarán vacias ya que se ha reseteado
        contenido.email = '';
        contenido.asunto = '';
        contenido.mensaje = '';
        //llamamos a la funcion comprobar objeto para usarla y que asi cuando se resetee todo este vacio y que el boton enviar este deshabilitado y menos opaco
        comprobarObjeto();
    };

    // Event listeners
    //el input del email tiene un evento de tipo input y cuando se realize el evento se usara la funcion validarCampo automaticamente, y asi con todos los inputs
    inputEmail.addEventListener('input', validarCampo);
    inputAsunto.addEventListener('input', validarCampo);
    inputMensaje.addEventListener('input', validarCampo);

    //dentro del formulario el boton enviar tiene un evento de tipo submit y cuando lo presionemos usara la funcion enviarEmail
    form.addEventListener('submit', enviarEmail);

    //el boton de reset tiene un tipo de evento onclick y usa un evento que se le pasa al event listener
    resetButton.addEventListener('click', (e) => {
        e.preventDefault();//previene que se comporte de forma predeterminada
        resetearFormulario();//llama a mi funcion resetearFormulario
    });
});