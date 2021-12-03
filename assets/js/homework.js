// 1. Generar una function
// que reciba un array como parametro
// y devuelva solo los items que son pares
// p.ej. onlyEvenValues( [1, 2, 3, 4] )
// -> [2, 4]
// Aplicar el metodo .forEach()
// hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

const onlyEvenValues = arrNumbers => {
    let even = []
        arrNumbers.forEach(element => {
            if( element % 2 === 0){            
                even.push(element)
            }
        }
    )
    return even
}
console.log(onlyEvenValues( [2,3,4,5,6,7,8,30,45,44] ))



// 2. function que reciba como parametro una array de strings
// y devuelva la primer y ultima letra del string
// de cada uno de los items del array 
// -> firstAndLast (['hola', 'mundo'] )
// -> ['ha', 'mo']
// .forEach() o .map()

const firstAndLast = arrStrings => {
    let modify = []
        arrStrings.forEach( word => {
            modify.push(word.slice(0,1) + word.slice(-1))
        }
        )
    return modify
}
console.log(firstAndLast())

/**
 * 3. Funcion que reciba un array de numeros
 * y devuelva el promedio
 * -> getAverage( [10, 8, 9, 7] )
 * -> 8.5
 */

const getAverage = (arr) => {
    let addit = 0
    arr.forEach( item => addit += item)   
    return (addit/arr.length)
}
console.log(getAverage( [10,10,10] ))

//  4. funcion
// dado un array de años, filtre los elementos
// y devuelva un array con los años que son bisiesto
// convertLeapYear( [1990, 2000, 2001, 2020] )
// -> [2000,2020]
// .forEach()
// hint: https://docs.microsoft.com/es-es/office/troubleshoot/excel/determine-a-leap-year

const convertLeapYear = arr => {
    
}