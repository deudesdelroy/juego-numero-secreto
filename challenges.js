//Indice de masa corporal
function calcularIndiceMasaCorporal(peso, estatura) {
    let imc = peso / (Math.pow(estatura, 2));
    return imc;
}

console.log(calcularIndiceMasaCorporal(75, 1.75));

//Tabla de multiplicar
function tablaDeMultiplicar(multiplicador) {
    let multiplicando = 1;
    while (multiplicando <= 10) {
        let producto = multiplicando * multiplicador;
        console.log(`${multiplicando} x ${multiplicador} = ${producto}`);
        multiplicando++;
    } 
}

tablaDeMultiplicar(3);