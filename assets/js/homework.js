/**
 * Escribir un arrow function que invierta una oracion
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * hint: https://www.w3schools.com/jsref/jsref_join.asp
 */
const sentenceReverse = (sentence='Esta es una función que invierte la oración') => {
    let wordsSentence = sentence.split('')
    let reversed = wordsSentence.reverse().join('')
    return reversed
    
}

/**
 * Escribir un arrow function que compruebe
 * si una oración es un palindromo
 * hint: https://ricardometring.com/javascript-replace-special-characters
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 */
const palindrome = (pal='Isáac no ronca así') => {
    let normal = pal.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/([^\w]+|\s+)/g, '')
    let wr = normal.split('').reverse().join('')
    return normal === wr ? true : false
}

/**
 * Escribir un arrow function que tome como parametro 2 arrays, 
 * y devuelva un numero con la suma total de esos 2 arrays.
 * arrayReduce( [1,2,3,4], [1,2]) 
 * -> 13
 * 
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * 
*/
const array1 = [1, 2, 3, 4]
const array2 = [1, 2]

const addArrays = (array1, array2) => {
    let add = 0
    let mix = array1.concat(array2)
    mix.forEach(adding)
    const adding => add +=
}

/**
 * Escribir una función que tome como parametro 2 arrays, y devuelva un array 
 * con los numeros repetidos en los 2 arrays
 * arrayReduce([1,2,3,4],[1,2,5]). 
 * -> [1,2]
*/
// const array3 = [1, 2, 3, 4]
// const array4 = [1, 2, 5]

// const addArrays = () => {

// }