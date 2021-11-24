const number1 = parseInt(prompt('Introduce un numero'))
const number2 = parseInt(prompt('Introduce otro numero'))

if(isNaN(number1) === false && isNaN(number2) === false){
    if(number1 > number2){
        console.log('La división es =', number1/number2)
    } else if(number1 < number2){
        console.log('La suma es =', number1+number2)
    } else if(number1 === number2){
        console.log('La multiplicación es =', number1*number2)
    }
} else {
    console.error('Algunos de los números no son tipo number')
}

for(i=1; i <= 10; i++){
    console.log(`Tabla del ${i}`)
    for(j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
}
