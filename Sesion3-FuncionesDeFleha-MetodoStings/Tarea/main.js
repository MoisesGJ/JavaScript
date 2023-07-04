/* 1-.EJERCICIO 1 : Necesito saber de cualquier string, 
el caracter que se encuentre en cualquier posicion que indiquemos */




const getCharacter = (string, position) => string.length > position ? console.log(string.charAt(position)) : console.log("No encuentro esa posición")


getCharacter("Hola", 4)




/* 2.-Necesitamos saber si un texto cualquiera tiene dentro otro string 
Israel "ra" - si lo incluye
Insrael "ac" -no incluye  */




const isContentString = (string, subString) => string.includes(subString) ? console.log("Sí") : console.log("NO")

isContentString("Victor", "or")



/* 3.-Necesito saber la cantidad de palabras de un texto cualqueira  */


const getCountWords = (string) => console.log(string.split(' ').length)

getCountWords("1 2 3 4 5")

/* 4.-Necesito reemplazar todas las coincidencias de una palabra dentro de un texto con otro texto
"mi perro es gris y es un latroso " es no es 
"mi perri no es gris y no es un latoso" */

const replaceString = (string, match, replace) => console.log(string.replaceAll(match, replace))

replaceString("mi perro es gris y es un latroso", "es", "no es")