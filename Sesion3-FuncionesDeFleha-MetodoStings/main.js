//Funciones de flecha

/* function myFunction (...args) {
    ...body
} 

const myFunction = (...args) => {
    ...body
}

*/

function returnEven(num) {
  if (num % 2 === 0) {
    console.log('True');
  } else {
    console.log('False');
  }
}

let returnEvenInArrowExplicit = (num) => {
  if (num % 2 === 0) {
    console.log('True');
  } else {
    console.log('False');
  }
};

let returnEvenInArrowImplicit = (num) => num % 2 === 0;

returnEven(10);

returnEvenInArrowExplicit(10);

returnEvenInArrowImplicit(10);

console.log('hola');

/*
Falsy and truthy
  ?         :

falsy => false || "" || undefined || null || 0 || NaN
truthy => !=falsy

*/

/* Recibir dos numeros => a-b si son iguales => "" son iguales */

const evaluateNumber = (a, b) => (a - b ? a - b : 'Adiós');

console.log(evaluateNumber(-1, -1));

0 > 1 ?? console.log('Devuelto'); // => Devuelto

/* let a = 10;
let b = 2;

console.log(a >> b); */
let prueba = null;
prueba ??= console.log('hola');
