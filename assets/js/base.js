// let celsius = parseInt(prompt('Introduce los grados Celsius de tu localidad'))
// let far = ((celsius * 9/5) + 32)
// if(!isNaN(celsius)){
//     alert(`La temperatura actual en grados Fahrenheit es: ${far}`)
// } else {
//     alert('Debe ser un número')
// }


// let n1 = parseInt(prompt('Introduce el primer número'))
// let n2 = parseInt(prompt('Introduce el segundo número'))
// let n3 = parseInt(prompt('Introduce el tercer número'))

// if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)){
// ((n1 > n2) && (n1 > n3)) ? console.log(`${n1} es el mayor de los números`) :
// ((n2 > n1) && (n2 > n3)) ? console.log(`${n2} es el mayor de los números`) :
// ((n3 > n1) && (n3 > n2))
// console.log(`${n3} es el mayor de los números`)
// } else {console.log('Introducir solo números')
// }
const a = 'Soleado'
const b = 'Lluvioso'
const c = 'Nevando'
const d = 'Nublado'
let weather = prompt('El clima de tu ciudad es: a. Soleado, b. Lluvioso, c. Nevando, d. Nublado')
let cel = parseInt(prompt('Introduce la temperatura de tu ciudad en °C'))
let farhen = ((cel * 9/5) + 32)

switch(a || b || c || d){
    case a:
        console.log(`En tu ciudad, el día es ${weather} con una temperatura de ${farhen} °F`)
        break
    case b:
        console.log(`En tu ciudad, el día es ${weather} con una temperatura de ${farhen} °F`)
        break
    case c:
        console.log(`En tu ciudad, el día es ${weather} con una temperatura de ${farhen} °F`)
        break
    case d:
        console.log(`En tu ciudad, el día es ${weather} con una temperatura de ${farhen} °F`)
        break
} 
    