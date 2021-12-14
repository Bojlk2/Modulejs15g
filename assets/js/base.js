/**
 * Ejercicio 1.
 * Dado el siguiente Array ['Hoteles', 'Ofertas', 'Viajes', 'Ayuda', 'Cancelaciones']
 * Formar el siguiente markup en el DOM
 * <ul class="menu__booking" data-menu="booking">
        <li class="menu__booking__item">Hoteles</li>
        <li class="menu__booking__item">Ofertas</li>
        <li class="menu__booking__item">Viajes</li>
        <li class="menu__booking__item">Ayuda</li>
        <li class="menu__booking__item">Cancelaciones</li>
    </ul>
 * 
 */

    let menuContainer = document.createElement('ul')
    menuContainer.classList

const reverseUser = ( ) => {
    let word =document.querySelector('#username').value
    let revw = word.split('').reverse().join('')
    console.log(revw)
  }

  /**
 * Dado un array
 * ['colima', 'colombia','Estado de mexico']
 * 
 * EScuchar el evento keyup en un input
 * Filtrar del array las coincidencias
 * Pintar las coincidencias en una lista
 * 
 */

let cities = ['colima', 'colombia','Estado de mexico']

const filterCity = () => {
    // filtrar ciudades
    let citySearch = document.querySelector('#name__city').value
    let citiesFiltered = cities.filter( (city) => {
        if(city.includes(citySearch)){
            return city
        }
    })

    // creo el layout con las ciudades filtradas
    let lista = ''
    citiesFiltered.forEach( (value) => {
        lista += `<li>${value}</li>`
    })

    // agrego el layout
    document.querySelector('#listCity').innerHTML = lista
}



let koders = [
    {
        name: 'emilio',
        age: 30,
        city: 'Guadalajara'
    },
    {
        name: 'Brisset',
        age: 30,
        city: 'Lima'
    },
    {
        name: 'Job',
        age: 33,
        city: 'CDMX'
    }
]

const filterKoder = () => {
    let koderSearch = document.querySelector('#name__koder').value.toLowerCase()
    let kodersFiltered = koders.filter((koder) => {
        if(koder.name.toLowerCase().includes(koderSearch)){
            return koder
        }
    })

    let koderList = ''
    kodersFiltered.forEach( (value) => {
        koderList += `<li><strong>${value.name}</strong>
        <span>${value.age}</span>
        <span>${value.city}</span></li>`
    })

    document.querySelector('#listKoders').innerHTML = koderList
}

const filterKoderAge = () => {
    let koderSearchAge = document.querySelector('#age__koder').value.toLowerCase()
    let kodersFilteredAge = koders.filter( (koderAge) => {
        if(koderAge.age.toLowerCase().includes(koderSearchAge)){
            return koderAge
        }
    })

    let koderListAge = ''
    kodersFilteredAge.forEach((value) => {
        koderListAge += `<li><strong>${value.name}</strong>
        <span>${value.age}</span>
        <span>${value.city}</span></li>`
    })

    document.querySelector('#listKodersAge').innerHTML = koderListAge
}

const filterKoderCity = () => {
    let koderSearchCity = document.querySelector('#city__koder').value.toLowerCase()
    let kodersFilteredCity = koders.filter( (koderCity) => {
        if(koderCity.city.toLowerCase().includes(koderSearchCity)){
            return koderCity
        }
    })

    let koderListCity = ''
    kodersFilteredCity.forEach((value) => {
        koderListCity += `<li><strong>${value.name}</strong>
        <span>${value.age}</span>
        <span>${value.city}</span></li>`
    })

    document.querySelector('#listKodersCity').innerHTML = koderListCity
}



const changeFilter = () => {
    console.log('Cambio de filtro')
    let filter = document.querySelector('#filterby').value
    
    switch (filter) {
        case 'name':
            document.getElementById("name__koder").style.display = "inline-block"
            document.getElementById("age__koder").style.display = "none"
            document.getElementById("city__koder").style.display = "none"
            break

        case "age":
            document.getElementById("age__koder").style.display = "inline-block"
            document.getElementById("name__koder").style.display = "none"
            document.getElementById("city__koder").style.display = "none"
            break

        case "city":
            document.getElementById("city__koder").style.display = "inline-block"
            document.getElementById("name__koder").style.display = "none"
            document.getElementById("age__koder").style.display = "none"
            break
    }
}

let koders = [
    {
        name: 'emilio',
        age: 30,
        city: 'Guadalajara'
    },
    {
        name: 'emilio',
        age: 30,
        city: 'guanajuato'
    },
    {
        name: 'Brisset',
        age: 37,
        city: 'Lima'
    }
]


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

    console.log(kodersFiltered)

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
