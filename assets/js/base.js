const lm = (arr) => {
    let little = arr[0]
    arr.forEach( element => {
        if (little > element){
            little = element
        }
    console.log(little)
    })
    return little
}
console.log( lm( [3,1,0,6,5,2] ))


let array = [11,2,3,10,5]
const string = array.map( val => {return val.toString()})

console.log(string)
//Capitalizar solo las strings
const capitalizeArr = (arr) => {
    let arrCapitalized = []
    arrCapitalized = arr.map(
        val => {
            if(typeof val === 'string'){
                let resultCap = `${val.slice(0,1).toUpperCase()}${val.slice(1).toLowerCase()}`
                return resultCap
            } else {
                return val
            } 
        }
    )
    return arrCapitalized
}
let resultCap = capitalizeArr(['hOLA', 'mundo', 123])
console.log(resultCap)