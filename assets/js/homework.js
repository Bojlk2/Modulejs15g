/** 
 * Ejercicio 1
 * imprimir en consola todos los numeros pares entre 1 y 100
 * -> 2
 * -> 4
 * -> 100
*/

let par = 0

for(i = 1; i <= 100; i++){
    if(par = i % 2){
        i += 1
        console.log(i)
    }
    
}

/**
 * Ejercicio 2
 * Pedir al usuario un string
 * Invertir el orden e imprimir en consola
 * Entrada: "reverse"
 * Salida: -> esrever
 * hint: https://www.w3schools.com/jsref/jsref_length_string.asp
*/

let word = prompt('Introduzca una palabra')
let wr = ''

for(j = word.length -1; j >= 0; j--){
    wr += word[j]
}
console.log(wr)

/**
 * Ejercicio 3 
 * Declarar un string de al menos 2 palabras
 * Imprimir en consola el string separado por guiones en cada palabra
 * "hola koders"
 * "hola-koders"
 * hint: https://www.w3schools.com/jsref/jsref_replace.asp
 */

let phrase = prompt('Introduce mas de 2 palabras').replace(/ /gi,'-')
console.log(phrase)

/**
 * Ejercicio 4
 * Declarar un string con un correo electrónico
 * Enmascarar con "*" el bloque del usuario
 * "jorgec@kodemia.mx"
 * "*****@kodemia.mx"
 * 
 * hint: https://www.w3schools.com/jsref/jsref_slice_string.asp
 * hint: https://www.w3schools.com/jsref/jsref_indexof.asp
 */

let mail = prompt('Introdroduce tu correo electronico')
let ocult = ''
let pri = 0
let reg = /\d.*\d/
for(k = mail.length -1; k >= 0; k--){
    ocult += mail[k]
}
pri = ocult.indexOf('@')
ocult = ocult.slice(pri + 1)
ocult = ocult.replace(/[a-z,0-9]/gi, '*')
for
console.log(pri)
console.log(ocult)

