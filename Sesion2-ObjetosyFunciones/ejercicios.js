/*
    1.- Crear funciones que hagan lo siguiente:
        sumar dos números
        restar dos números
        multiplicar dos números
        dividir dos números
    
    2.- Crear una función que me devuelva el nombre completo de una persona

    3.- Crear una función que reciba el nombre, color, tamaño, peso y raza de un perro, y me devuelva un objeto que represente a ese perro 
*/

function suma(a,b) {
    return a+b
} 

function resta(a,b) {
    return a-b
} 

function multi(a,b) {
    return a*b
}

function div(a,b) {
    return a/b
}

console.log(suma(1,2), resta(1,2), multi(5,5), div(10,5) )




function NombreCompleto(nombre, apellido) {
    return nombre+' '+apellido
} 


console.log(NombreCompleto('Moisés', 'García'))




function convertirAObjeto(nombre, color, tamanio, peso, raza) {
    const perro = {
        nombre,
        color,
        tamanio,
        peso,
        raza
    }


    return perro
}

console.log(convertirAObjeto('Firulais', 'Naranja', 'Grande', 'Mucho', 'Chihuahua'))