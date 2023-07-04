/*
1.- crear una función que reciba un nombre y haga lo siguiente:
si el nombre tiene más de 5 letras, imprimir en pantalla "el nombre es largo" si no, imprimir "el nombre es corto"
*/

function getName (name) {
    if ( name.length > 5 ) {
        console.log('El nombre es largo.')
    } else {
        console.log('El nombre es corto.')
    }
  }
  
  getName('Moisés')
  
  /*
  2.- Crear una función que reciba 2 números y me devuelva un texto con base en las condiciones siguientes:
  si el resulta es par, devolver "tu resultado es par"
  si es non, devolver "el resultado es non"
  */
  
  function isOddOrEven (firstNum, SecondNum) {
    const result = firstNum + SecondNum
    if ( result % 2 === 0 ) {
        console.log('La suma de los números es par.')
    } else {
        console.log('La suma de los números es non.')
    }
  }
  
  isOddOrEven(10, 3)
  
  
  /*3.- Crear una función que reciba el nombre y apellidos de una persona y me devuelva la cantidad de caracteres de el nombre completo*/
  
  function lengthFullName (name, lastName) {
    const aux = name+lastName
    
    return aux.length
  }
  
  console.log( 'La cantidad de caracteres totales es ' + lengthFullName('Moisés', 'García') + '.' )