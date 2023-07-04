//Funciones de flecha

/* function myFunction (...args) {
    ...body
} 

const myFunction = (...args) => {
    ...body
}

*/

function returnEven (num) {
    if ( num % 2 === 0 ) {
        console.log("True")
    } else {
        console.log("False")
    }
}

let returnEvenInArrowExplicit = (num) => {
    if ( num % 2 === 0 ) {
        console.log("True")
    } else {
        console.log("False")
    }
}

let returnEvenInArrowImplicit = (num) => num % 2 === 0


returnEven(10)

returnEvenInArrowExplicit(10)

returnEvenInArrowImplicit(10)


