let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','EL número secreto es menor');
        } else {
            asignarTextoElemento('p','EL número secreto es mayor');
        }
        intentos++;
        limpiarCaja()
    }
}

function condicionesIniciales() {
    //Llamado de la función
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor((Math.random()*10)+1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Validar si ya todos los números del rango máx fueron sorteados.
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', "Ya se han sorteado todo los números posibles.");
    } else {
        //Almacenar y validar que el número no se haya usado anteriormente.
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            //Recursividad: la función se llama así misma para obtener un nuevo número válido.
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //mostar mensdajes iniciales
    condicionesIniciales();
    //Deshabilitar botón reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();