/*
	Pedir al usuario una palabra
	Devolver la palabra capitalizada
	p.ej. 'galAxiA'
	Ouput -> 'Galaxia'
*/
let word = prompt(`Introduzca una palabra`).toLowerCase()
let letter = word[0].toUpperCase()

for(let i = 1; i < word.length; i++){
    letter += word[i]
}

console.log(letter)              

/*
	Pedir al usuario una oración (permitir espacios)
	Capitalizar cada una de las palabras de la oración
	p.ej. 'En una galaxia muy muy lejana'
	Ouput -> 'En Una Galaxia Muy Muy Lejana'
*/
const statement = prompt('Introduce un enunciado').trim().toLowerCase()
let wordCap = ''

for(i = 0; i < statement.length; i++){
    if(statement[i] == ' '){
        wordCap = ' ' + statement[i + 1].toUpperCase()
        i += 1
    } else {
        wordCap = wordCap + statement[i]
    }
}

wordCap = wordCap.substring(0,1).toUpperCase() + wordCap.substring(1)

console.log(wordCap)

/*
	Pedir al usuario cuantas materias tiene actualmente
	Pedir al usuario la calificacion de cada una de esas N materias
	Arrojar el promedio en un alert
*/
let mat = parseInt(prompt(`¿Cuantas materias cursas?`))
let qual = 0
let sumqual = 0

for(k = 1; k <= mat; k++){
    qual = parseInt(prompt(`¿Cuál es tu calificación?`))
    sumqual += qual
    console.log(sumqual)
}

console.log(`Tu promedio es de: ${sumqual / mat}`)