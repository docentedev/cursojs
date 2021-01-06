// JSON
const persona = {
    name: 'Claudio',
    edad: 32,
    estatura: 1.7,
    'es Humano': true,
    extremidades: {
        piernas: 2,
        brazos: 2,
    },
    frasesTipicas: ['Hola', 'Estoy ocupado'],
};

console.log(persona);
console.log(persona.frasesTipicas);
console.log(persona["es Humano"]);
console.log(persona.extremidades.brazos);

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator
const a = [1, 2, 3, 4];
const b = [1, 4567, 6423, 456, 234562345];
const c = [
    ...a,
    ...b,
    12312312312,
];

console.log(c);

const x = { x1: 12, y1: 10 };
const y = { y1: 13 };

const z = {
    ...x,
    ...y,
    x: 122,
};
console.log(z);

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

const a1 = [1,2,3,4,5,6];

a1[0];

const [uno, dos, tres] = a1;

console.log(uno, dos, tres);

const o = {
    o1: 'foo',
    o2: 'var',
    o3: 24,
};

const { o2 } = o;

console.log(o2);