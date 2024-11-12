'use strict';

//esta funcion calcula la suma de los dos numeros y lo muestra en el resultado
function suma() {
    const num1 =  parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const resultado = num1 + num2;
    document.getElementById('resultado').value = resultado;
}

//esta funcion calcula la resta de los dos numeros y lo muestra en el resultado
function resta() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    const resultado = num1 - num2;
    document.getElementById('resultado').value = resultado;
}

//esta funcion calcula la multiplicacion de los dos numeros y lo muestra en el resultado
function multiplicacion() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const resultado = num1 * num2;
    document.getElementById('resultado').value = resultado;
}

//esta funcion cogera el numero 1 y el numero 2 y hara la division teniendo en cuenta de que si
//el numero2 es 0 nos tirará error ya que no se puede dividir entre cero
function division() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (num2==0) {
        alert("No se puede dividir entre cero")
        document.getElementById('resultado').value = 'Error';
    } else {
        const resultado = num1/num2;
        document.getElementById('resultado').value = resultado;
    }
}

//esta funcion nos calculara la raiz cuadrada de un numero teniendo en cuenta que si 
//el numero es negativo nos dara error
function raiz() {
    const num1 = parseFloat(document.getElementById('num1').value);
    if (num1<0) {
        alert('No se puede calcular la raiz cuadrada de un numero negativo')
        document.getElementById('resultado').value = 'Error';
    } else {
        const resultado = Math.sqrt(num1);
        document.getElementById('resultado').value = resultado;
    }
}

//esta funcion lo que nos hace es calcular la potencia elevando el primer numero al segundo
function potencia() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = Math.pow(num1, num2);
    document.getElementById("resultado").value = resultado;
}

//esta funcion nos calculara el valor absoluto de cada numero, es decir, su valor da igual si es positivo
//o negativo y lo mostrará en el resultado
function absoluto(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const resultado = Math.abs(num1);

    document.getElementById('resultado').value = resultado;
}

//creamos esta funcion para el boton random, que nos generara un numero random
//y lo mostrara en el resultado
function random() {
    const resultado = Math.random() * 100;

    document.getElementById('resultado').value = resultado;
}