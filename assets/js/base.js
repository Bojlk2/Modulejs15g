// // funcion sin parametros
// function suma() {
// 	return 2 +  2
// }

// // funcion con parametros
// function toCelsius(fahrenheit) {
// 	let celsiusGrades = (5 / 9) * (fahrenheit - 32)	

// 	// retorno de la funcion
// 	return celsiusGrades
// }

// // let celsiusGradesReturned = toCelsius(100)
// // console.log(celsiusGradesReturned)

// // funcion que pida el nombre al usuario
// // y lo imprima en consola

// function userName(){
//     let nombre = prompt('Introduce tu nombre')
//     console.log(nombre)
// }


// /**
//  * Funcion que reciba una palabra
//  * y la retorne al revés
//  */

// function wordReverse(word1){
//     let wr = ''

//     for(j = word1.length -1; j >= 0; j--){
//     wr += word1[j]
//     }
//     return wr
// }


// Función 1:
// Imprimir en consola las tablas de multiplicar del 1 al 10 
function tables(){
    for(i = 1; i <= 10; i++){
        for(j = 1; j <= 10; j++){
            console.log(`${i} x ${j} = ${i * j}`)
        }
    }
}


// Función 2:
// Imprimir en consola la suma de 1 a N, siendo N un numero entre 1 y 100
function adding(numero){
    
    let counter = 1
    let suma = 0
    if(!isNaN(numero) && numero > 0 &&  numero <= 100){
            
            while(counter <= numero){
                suma += counter
                counter += 1
            }
            
            console.log(`La suma es: ${suma}`)
    }
}


// Función 3:
// Imprimir en consola si una oración es un palindromo (puede contener espacios)
// anita lava la tina -> True
function palindromo(phrase){
    let withOut = ''
    let pr = ''
    if(phrase != ' '){
        for(i = 0; i < phrase.length; i++){
            if(phrase[i] !== ' '){
                withOut += phrase[i] 
            }
        }
        for(j = withOut.length -1; j >= 0; j--){
            pr += withOut[j]
        }
        withOut === pr ? console.log(`true`) : console.log(`false`)
    }
}


// Función 4:
// Imprimir en consola la suma total de todos los digitos de una cantidad 
// p.ej. "1234" -> 10

// function addNumbers(num){
// for(j = num.length; j <= 0 ; j++){
//             wordReversed = wordReversed + wordWithoutSpace[j]
//         } 
//         console.log(wordReversed)
    
//         wordWithoutSpace === wordReversed ?
//             console.log(`La palabra "${wordUser}" es un palindromo`)
//         :
//             console.log(`La palabra "${wordUser}" No es un palindromo`)
    
//     } else {
//         console.log('Inserta una palabra valida')
//     }


// Función 5:
// Imprimir en consola la suma de los múltiplos de 3 y 5 contenidos entre el 1 y 100
// -> 233168

function multiplo(){
    let mult = 0
    for(i = 1; i <= 100; i++){
        if(i % 3 === 0 || i % 5 === 0){
            mult += + i
        }
    }
    console.log(`La suma de los mutliplos es = ${mult}`)
}