let salarios = {
    'Jorge': 3000,
    'Juan': 7000,
    'Pedro': 8000
}

const addSal = (obj) => {
    let add = 0
    Object.keys(obj).forEach( (value) => {
        let salario = obj[value]
        add += salario
        
    })
    return add
}
console.log(addSal(salarios))

const addRed = (obj) => {
    return total = Object.keys(obj).reduce((acc, key) => acc += obj[key],0)
}
console.log(addRed(salarios))
// 
//     console.log(add)
    
const valRed = (obj) => {
    return suma = Object.values(obj).reduce((acc, cv) => acc += cv, 0 )
}
console.log(valRed(salarios))