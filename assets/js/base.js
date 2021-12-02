// Función 1:
// valor por defecto 10
// Imprimir en consola las tablas de multiplicar del 1 al 10 
const tables10 = (a = 10) => {
   for(i = 1; i <= a; i++){
        for(b = 1; b <= 10; b++){
            console.log(`${a} x ${b} = ${a * b}`)
        }
    }
}

// Función 2:
// valor por defecto 10
// Imprimir en consola la suma de 1 a N, siendo N un numero entre 1 y 100
const adding10 = (numero=10) => {
    let counter = 1
    let suma = 0
    if(!isNaN(numero) && numero > 0 &&  numero <= 100){
            
            while(counter <= numero){
                suma += counter
                counter += 1
            }
        } else {
            console.log('No es un número válido')
    }
    return suma
}


// Función 3:
// valor por defecto "1234"
// Imprimir en consola la suma total de todos los digitos de una cantidad 
// p.ej. "1234" -> 10
const sumatotal = (valor = 1234) => {
    let anterior = valor.toString()
    let nuevo = 0
    for(i = 0; i < anterior.length; i++){
        nuevo += parseInt(anterior[i])
    }
  
    return nuevo
}
  

// Función 4:
// valor por defecto 3 y 5, sino el que ponga el usuario 
// Imprimir en consola la suma de los múltiplos de 3 y 5 contenidos entre el 1 y 100
// -> 233168
const multiplo35 = (a=3,b=5) => {
    let mult = 0
    for(i = 1; i <= 100; i++){
        if(i % a === 0 || i % b === 0){
            mult += + i
        }
    }
    return mult
}
