// let saludo = 'hola'
// for(i = 0; i < saludo.length; i++){
//     console.log(saludo[i])
// }

//Pedir al ususario un string
// contar las vocales y las consonantes
//imprimir en consola
// 2 vocales y 2 consonantes
// let word = prompt('Introduce una palabra')


// if(word.length > 0){
//     let vocal = 0
//     let consonante = 0
//     for(i = 0; i < word.length; i++){
//             let letter = word[i].toLowerCase()
//                 if(letter !== ' '){
//                     if(
//                         letter === 'a' ||
//                         letter === 'á' ||
//                         letter === 'e' ||
//                         letter === 'é' ||
//                         letter === 'i' ||
//                         letter === 'í' ||
//                         letter === 'o' ||
//                         letter === 'ó' ||
//                         letter === 'u' ||
//                         letter === 'ú'
//                     ) {
//                         vocal++
//                     } else {
//                         consonante++
//                 }
                
//             } 
//     }console.log(`Tu palabra "${word}", tiene ${vocal} vocales y ${consonante} consonantes`)
// } else {
//     console.log('Inserta una palabra')
// }
// pedir una palanbra con espacio al inicio y al final
// contar las letras "a" y "e", 
// Contar numero de espacios, sin contar los espacios
// al inicio y al final

// let spword = prompt('Introduce una palabra con espacio al inicio y al final').trim().toLowerCase()
// let a, e, space = 0

// if(spword.length > 0){
    
// } else {
//     console.log('Debes introducir una palabra')
// }

// Pedir el usuario 1 numero entre 1 y 100
// sumar todos los numeros entre el 1 y este numero
// Mandar un alert con el  total                           

// 10
// 1+2+3+4+5+6+7+8+9+10
// total -> ?
let num = parseInt(prompt('Introduce un número entre 1 y 100'))
let add = 0
if(!isNaN(num) && num > 0 && num <=100){
    for(i = 1; i <= num; i++){
        add += i
    }
    alert(`La suma de los numeros es = ${add}`)
} else {
    console.error(`No es un número válido`)
}

// pedir al usuario una palabra (permitir espacios, mayusculas)
// Verificar que sea un palindromo
// mandar en consola el resultado
// -> La palabra "anita lava la tina" es un palindromo
const pal = prompt(`Introduce una palabra u oración`).replace(/ +/g, "").toLowerCase()
let wrev = ''

if(pal != ''){
    for(i = pal.length - 1; i >= 0; i--){
        wrev += pal[i]
    }
    pal === wrev ? 
    console.log(`La palabra "${pal}" es un palíndromo`) : 
    console.log(`La palabra "${pal}" no es un palíndromo`)
 } else {
    console.error(`Debe introducir una palabra u oración`)
}