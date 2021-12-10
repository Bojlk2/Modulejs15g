let koder = {
    name:"jorge",
    lastName:"Camarillo",
    average: [10, 10, 10, 8, 9],
    age: 30,

    getAge: function () {
        return this.age
    },

    get ageKoder() {
        return this.age
    },

    set ageKoder(age) {
        this.age = age
    },

    get fullName() {
        return `${ this.name } ${ this.lastName }`
    },

    set fullName(objFullName) {
        this.name = objFullName[0]
        this.lastName = objFullName[1]
    },


//    * 1. getter average
    get totalAverage() {
        return this.average.reduce(( acc, cv ) => {
            return acc += cv
        }, 0) / this.average.length
    },

//    2. getter, setter IMC
    get IMC() {
        return this.IMC = this.weight/this.height**2
    },

    set weightIMC( weight ) {
        this.weight = weight
    },

    set heightIMC( height ) {
        this.height = height
    },
    
//     3. setter Score
    set newScore ( val ) {
        this.average.push(val)
    }
    
// 4. setter newProperty
//     set newPropertyk( key ) {
//         this[key] = this.key
//     }

//     set newPropertyv( value ) {

// }
}

Object.defineProperty(koder, 'newProperty', {
    set(objProp) {
        this[objProp.nameProperty] = objProp.valueProperty
    }
})

koder.newProperty = {
    nameProperty: 'Generation',
    valueProperty: 15
}

// Metodos
console.log( koder.getAge() )

// getters
console.log('Edad inicial: ', koder.ageKoder)
console.log('Nombre completo: ', koder.fullName)
console.log('Promedio de calificaciones: ', koder.average)
console.log('Indice de Masa Corporal: ', koder.IMC)

// setters
koder.ageKoder = 47
koder.fullName = ['jorge luis', 'camarillo']
koder.weightIMC = 86
koder.heightIMC = 1.8
//koder.newParameter = ['Hobbie']
koder.newScore = 9

// getter y setter de 
/**
 * 

 * 
 * 
 *
 * 
 * 
 */