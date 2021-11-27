let pal1 = prompt(`Introduce una palabra u oración`).replace(/ +/g, "").toLowerCase()
let wrev1 = ''
let count = 0

if(pal1 != ''){
    while(count <= pal1.length -1 ){
        wrev1 += count
        count++
    }
    console.log(wrev1)
    pal1 === wrev1 ? 
    console.log(`La palabra "${pal1}" es un palíndromo`) : 
    console.log(`La palabra "${pal1}" no es un palíndromo`)
} else {
    console.error(`Debe introducir una palabra u oración`)
}