/** 
 * Dado un arreglo con nombres de personas, 
 * devuele un arreglo con los nombres de las personas que empiezan con vocales (capitalizados)
 * onlyNamesVowels( ['jorge','ana','ivan','sergio','luis','oscar' ] )
 * -> ['Ana','Ivan','Oscar']
*/
// const arr = [ ['jorge','ana','ivan','sergio','luis','oscar'] ]

// const onlyNamesVowels = (arr) => {
// return arr.filter( item => typeof item === 'string')
// .map( item => item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase() )
// .filter( item => item[0] === 'A' || item[0] === 'E' || item[0] === 'I' || item[0] === 'O' || item[0] === 'U')
// }


/**
 * 
 * Dado una arreglo compuesto por arreglos, 
 * crea una funcion que calcule la suma de los arreglos y posteriormente la suma de las sumas
 * additionMultiArr(  [	[1,2,3] , [1,3,2] , [3,2,1] ] )
 * 
 */
const arr = [ [1,2,3], [1,3,2], [3,2,1] ]

let resultado = []
arr.map(item =>{
    resultado.push(item.reduce((acc,cv) => acc + cv))    
    }, 0)

console.log (resultado)

let sumTotal = resultado.reduce((acc,cv) => acc +cv)

console.log(sumTotal)

// const additionMultiArr = (arr) => {
//     return arr.map(item =>{
//         resultado.push(item.reduce((acc,cv) => acc + cv))    
// }, 0)
// }