/**
 * 
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
let number = parseInt(prompt('Introduce un número entre 1 y 100'))
let result = (number >= 1 && number <= 100) ? (number % 2 === 0) ? console.log('Es número par') : console.log('Es número impar') : console.error('¡Número fuera de los parametros!')

/**
 * 
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */
let day = prompt('Introduce un día de la semana')
let message = (day === 'Lunes') ? console.log(`${day} -> 1`) :
            (day === 'Martes') ? console.log(`${day} -> 2`) :
            (day === 'Miercoles') ? console.log(`${day} -> 3`) :
            (day === 'Jueves') ? console.log(`${day} -> 4`) :
            (day === 'Viernes') ? console.log(`${day} -> 5`) :
            (day === 'Sabado') ? console.log(`${day} -> 6`) :
            (day === 'Domingo') ? console.log(`${day} -> 7`) :
            console.error('Debe ser un día de la semana')



/**
 * 
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */
let n1 = parseInt(prompt('Introduce un número'))
let n2 = parseInt(prompt('Introduce otro número'))

let show = (n1 > n2) ? console.log(`El número mayor es ${n1} y el menor es ${n2}`) : console.log(`El número mayor es ${n2} y el menor es ${n1}`)

/**
 * 
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */
 let dayWeek = prompt("¿Qué día de la semana es hoy?")
 dayWeek = dayWeek.toLowerCase()
 switch (dayWeek) {
     case "lunes":
         console.log(`${dayWeek} es el dia 1`)
         break
     case "martes":
         console.log(`${dayWeek} es el dia 2`)
         break
     case "miercoles":
     case "miércoles":
         console.log(`${dayWeek} es el dia 3`)
         break
     case "jueves":
         console.log(`${dayWeek} es el dia 4`)
         break
     case "viernes":
         console.log(`${dayWeek} es el dia 5`)
         break
     case "sabado":
     case "sábado":
         console.log(`${dayWeek} es el dia 6`)
         break
     case "domingo":
         console.log(`${dayWeek} es el dia 7`)
         break
     default:
         console.error(`Es un día invalido`)
         break
 }