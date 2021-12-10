let koder = {
    name: 'Jorge',
    lastName: 'Camarillo',
    age: 30,
    average: [ 10, 10, 10, 8, 9 ],
    
}

koder.getAverage = function () {
    return this.average.reduce(( acc, cv ) => {
        return acc + cv
    }, 0) / this.average.length
}

console.log(koder.getAverage())

koder.setAverage = function () {
    this.totalAverage = this.getAverage()
}

koder.setAverage()

koder.setGetIMC = function () {
    this.peso = 57
    this.altura = 1.5
    this.IMC = this.peso/this.altura**2
}

koder.setGetIMC()

// Agregar un metodo para Agregar un nuevo promedio
koder.setNewAve = function () {
    this.average.push(10)
}



// Agregar un metodo para agregar una nueva propiedad 
koder.addNewProperty = function (key, value) {
    this[key] = value
}

koder.addNewProperty('nationality', 'Mexican')