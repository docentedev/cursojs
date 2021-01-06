const lista = [12, 4, 234, 4, 256, 111, 12345, 6, 6, 66656, 534634563456, 34567, 3456, 6];


function funcionFiltradora(numero) {
    // return numero > 10;
    if (numero > 10) {
        return true;
    } else {
        return false;
    }
}

const numerosMayoresQue10 = lista.filter(funcionFiltradora);
const numerosMenorQue10 = lista.filter(n => n < 10);

console.log(numerosMayoresQue10);