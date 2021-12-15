let koders = [
    {
        name: 'emilio',
        age: 30,
        city: 'Guadalajara'
    },
    {
        name: 'juan',
        age: 32,
        city: 'Zacatecas'
    },
    {
        name: 'brisset',
        age: 37,
        city: 'Lima'
    },
    
]


const orderDesc = (a, b) => {
    let koderascdesc = document.querySelector('#order').value
    let KoderTerm = document.querySelector('#filterby').value.toLowerCase()
    
    if(koderascdesc === 'desc') { 
        if (a[KoderTerm] < b[KoderTerm]) {
            return -1
        }
        if (a[KoderTerm] > b[KoderTerm]) {
            return 1
        }
        return 0
    } else {
        if (a[KoderTerm] > b[KoderTerm]) {
            return -1
        }
        if (a[KoderTerm] < b[KoderTerm]) {
            return 1
        }
        return 0
    }
    console.log(koders.sort(orderDesc))
}


// FUncion => tarea especifica


const filterKoders = () => {
    // filtrar ciudades
    let KoderSearch = document.querySelector('#name__koder').value.toLowerCase()
    let KoderTerm = document.querySelector('#filterby').value.toLowerCase()
    console.log(KoderTerm)

    let kodersFiltered = koders.filter( (koder) => {
        console.log(koder)

        // if( koder.name.toLowerCase().includes(KoderSearch) ){
        //     return koder  
        // }

        
        let koderTerm = typeof koder[KoderTerm] !== 'number' ? koder[KoderTerm].toLowerCase() : koder[KoderTerm]
        console.log(koderTerm)

        if(KoderTerm === 'age') {
            if((koderTerm).toString().includes(KoderSearch) === true){
                return koder
            }
        } else  {
            if(koderTerm.includes(KoderSearch) === true){
                return koder
            }
        }
    })
    console.log(kodersFiltered.sort(orderDesc))

    
    // creo el layout con las ciudades filtradas
    let lista = ''
    kodersFiltered.forEach( (koder) => {
        lista += `
            <li>
                <strong>${koder.name}</strong>
                <span>${koder.age} años</span>
                <span>${koder.city}</span>
            </li>
        `
    })
    
    console.log(lista)

    // agrego el layout
    document.querySelector('#listKoders').innerHTML = lista
}

const filterKoder = () => {
    filterKoders()
}



const changeFilter = () => {
    filterKoders()
}

