let listaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//Imprimir el arreglo de lenguajes.
function mostrarLenguajes() {
    console.log(lenguajesDeProgramacion);
}

//Imprimir el arreglo de lenguajes invertido.
function mostrarLenguajesInvertidos(params) {
    console.log(lenguajesDeProgramacion.reverse());
    
}

//Promedio de una lista de números.
function listaDeNumeros() {
    let numeros = crearListaDeNumeros(10,100);
    let suma = 0;
    let promedioDeNumeros = 0;
    console.log(numeros);
    for(let i of numeros) suma+=i;
    promedioDeNumeros = suma / numeros.length;
    console.log(suma);
    console.log(promedioDeNumeros);
}

//Buscar un elemento y retornar la posición si se encuentra.
function buscarNumeroEnLista(numeroBuscado) {
    let numerosEnLista = crearListaDeNumeros(10,10);
    console.log(numerosEnLista);
    return(numerosEnLista.indexOf(numeroBuscado));
}

//Sumar dos listas de números.
function sumarListasDeNumeros(lista1, lista2) {
    let sumatoriaDeListas = [];
    for (let i = 0; i < lista1.length; i++) {
        let suma = lista1[i] + lista2[i];
        sumatoriaDeListas.push(suma);
    }
    return sumatoriaDeListas;
}

//Crear lista de números aleatorios.
function crearListaDeNumeros(tamaño, limite) {
    let listaDeNumerosaleatorios = [];
    for (let i = 0; i < tamaño; i++) {
        listaDeNumerosaleatorios.push(Math.floor((Math.random()*limite)+1));
    }
    return listaDeNumerosaleatorios;
}


mostrarLenguajes();
mostrarLenguajesInvertidos();
listaDeNumeros();
console.log(buscarNumeroEnLista(4));
console.log(sumarListasDeNumeros(crearListaDeNumeros(10,10),crearListaDeNumeros(10,100)));