const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter
const r1 = a1.filter(n => n > 5);
console.log(r1);

// map
const r2 = a1.map(n => n * n);
console.log(r2);

// forEach
let numerosSumados = 0;
a1.forEach((n, i) => {
    numerosSumados += n;
});
console.log(numerosSumados);

a1.forEach((_, i) => {
    console.log(`a1 indice: ${i}, valor: ${a1[i]}`);
});

// every
console.log('every:');
const a2 = [1, 1, 1, 1, 1, 1, 2];
console.log(a2.every(n => n > 0));
console.log(a2.every(n => n === 1));

// some
console.log('some:');
console.log(a2.some(n => n > 0));
console.log(a2.some(n => n === 2));


const algunoMayorQue100 = a1
    .filter(n => n > 5)
    .map(n => n * n)
    .some(n => n > 99);

console.log(algunoMayorQue100);