let koder = {
    name: 'Job',
    lastName: 'Lopez',
    age: 33,
    generation: '15js',
    payMethod: 'paypal',
    city: 'cdmx'
}

let counter = 1

for(let propiedad in koder){
    console.log( `${counter}. ${propiedad}: ${koder[propiedad]} ` )
    counter++
}
// Ejercios
/**
 * Del siguiente objeto
 * 1. Contar el numero de empleados
 * 2. Suma total a pagar
 * -> Son 3 empleados y el total es 130000
 */
let salarios = {
    'Juan': 30000,
    'Albert': 50000,
    'Jorge': 50000
}

let empl = 0
let sal = 0
for(let property in salarios){
    empl++
    sal += salarios[property]
}
console.log( `Son ${empl} y el total es ${sal} ` )
// 1. Declarar una funcion que reciba un objeto
// 2. Declarar un array vacio
// 3. iterar el objeto ( for in )
// 4. -- En cada iteracion 
// 5. ----- Obtener el valor de cada llave
// 6. ----- Verificar si es un string
// 7. ----- sí si, Agregar al array
// 8. -- fin iteracion
// 9. retornar el array

let objOnlyString = {
    modelo: 'Jetta',
    marca: 'VW',
    color: 'Red',
    year: 2020,
    tenencias: [2019,2020,2021],
    version: 'Sport',
    origen: 'México'
}

const filterStringObject = (obj) => {
    let onlyString = []
    for(let key in obj){
        if(typeof obj[key] === 'string'){
            onlyString.push(key)
        } 
    }
    return onlyString
}

console.log(filterStringObject(objOnlyString))

// Array de objetos
let koders =  [
    {
        name: 'jorge luis',
        lastName: 'Camarillo',
        age: 30,
        generation: 6,
        modulos: ['js','node js', 'cloud'],
    },
    {
        name: 'Erik',
        lastName: 'Gutierrez',
        age: 20,
        generation: 15,
        modulos: ['js'],
    },
    {
        name: 'Sara',
        lastName: 'Reveles',
        age: 24,
        generation: 12,
        modulos: ['js'],
    }
]

// koders.forEach((element, index, array) => {
    // console.log(element.lastName)
    // console.log(element.age)
    // console.log(element.generation)
    // console.log(element.modulos)
//     console.log(`${element.name} ${element.lastName} tiene ${element.age} años`)  
// })

/**
 * 1. Hacer una funcion que reciba un objeto de koders
 * 2. Obtener la suma de todas las edades
 * 3. Retornar el total
 * hint: .forEach() .reduce()
 */

const totalAge = (arr) => {
    let total = 0
    arr.forEach(element => {
        total += element.age
    })
    return total
}

console.log(totalAge(koders))

const countAge = (arr) => arr.reduce(( acc, val ) => acc + val.age,0)

console.log(countAge(koders))