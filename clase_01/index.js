console.log('Hola mundo');
// Variables no tipadas
// Inferencia de tipo
var nombre = 'Claudio';
var edad = 32;
var esHumano = true;
var estatura = 1.7;

const n = 12;
// n = 13;

console.log(
    typeof nombre,
    typeof edad,
    typeof esHumano,
    typeof estatura)

console.log(nombre + edad);

// Condicionales
console.log('Condicionales');
if (edad == '32') {
    console.log('Si ==');
}

if (edad !== '32') {
    console.log('Si ===');
} else {
    console.log('No ===');
}

function holaSoyUnaFuncion(x, y) {
    return x + y;
}

const unaFuncionAnonima = function (x, y) {
    return x + y;
}

const unaFuncionArrow = (x, y) => {
    return x + y;
}

const unaFuncionArrowMin = (x, y) => x + y;

const unaFuncionArrowMinDeUnParametro = x => x * 5;
