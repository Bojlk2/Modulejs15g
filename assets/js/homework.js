// Ejercicio 1
// dado el siguiene array de objetos
let users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
]

// obtener un nuevo objeto con esta estructura
//-> {
//    'Bradley Bouley': 'Full Stack Resident',
//   'Chloe Alnaji': 'Full Stack Resident'
//      ....
//   }
// hint: .reduce() o .forEach()
const nameRole = (arr) => {
    let nr = []
    arr.forEach(element => {
       nr.push( `${element.firstName} ${element.lastName}: ${element.role}` ) 
    })
    return nr
}
console.log(nameRole(users))

const nlRole = (arr) => arr.reduce((acc, cv) => `${acc}${cv.firstName} ${cv.lastName}: ${cv.role}, `, [])
console.log(nlRole(users))
// Ejercicio 2:
//  tomando el array users,
//  hacer una funcion que reciba 2 parametros (arrayUsers, role)
//  y retorne un array con los usuarios que cumplan con el role
// -> filterUserByRole(arrayUsers, 'Instructor')
// ->   [
//          { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//          { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
//      ]
// hint: .filter()
const filterUserByRole = (arr, role) => {
    return arr.filter(arr => arr.role === role)
}

console.log(filterUserByRole(users, 'Instructor'))

// Ejercicio 3
// tomando el siguiente array de objetos
// filtrar lo siguiente
// 1. Cantidad de personas que votaron
// 2. Cual es el promedio de Edad de los votantes

let persons = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age: 55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name:'Mary', age: 31, voted: false},
    {name:'Becky', age: 43, voted: false},
    {name:'Joey', age: 41, voted: true},
    {name:'Jeff', age: 30, voted: true},
    {name:'Zack', age: 19, voted: false}
]

const ageAverage = (arr) => {
    let numVotet = arr.filter(arr => arr.voted === true)
    let averageVoted = numVotet.reduce((acc, cv) => (acc + cv.age), 0) / numVotet.length
    return `Personas que votaron: ${numVotet.length}\nPromedio de edad de los votantes: ${averageVoted}`
}
console.log(ageAverage(persons))

