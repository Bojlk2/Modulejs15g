// ejercicio
// Agregar a 5 koders mas
// pintarlos en el DOM
// 1. utilizar bootstrap
// 2. Que sea responsive
// 3. minimo 3 cards por row

let koders = [
    {
        name: 'Emilio',
        age: 30,
        city: 'Guadalajara',
        generacion: 6,
        typeKoder: 'js',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=3'
    },
    {
        name: 'Juan',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
        name: 'Ismael',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 15,
        typeKoder: 'js',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=7'
    },
    {
        name: 'Ivonne',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 15,
        typeKoder: 'js',
        gender: 'F',
        avatar: 'https://i.pravatar.cc/150?img=9'
    },
    {
        name: 'Leo',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 15,
        typeKoder: 'js',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=1'
    },
]


const printKoders = () => {
    cardsKoders = ''
    koders.forEach((koder) => {
        cardsKoders += `
        <div class= 'col-12 col-md-4'>
            <div class="card align-items-center mb-4 p-3">
                <img src="${koder.avatar}" class="rounded-circle" alt="${koder.name}">
                <div class="card-body">
                    <h5 class="card-Name">Nombre: ${koder.name}</h5>
                    <p class="card-text">Edad: ${koder.age} años</p>
                    <p class="card-text">Ciudad: ${koder.city}</p>
                    <p class="card-text">Generación: ${koder.generacion}</p>
                    <p class="card-text">Curso: ${koder.typeKoder}</p>
                    <p class="card-text">Genero: ${koder.gender}</p>
                </div>
            </div>
        </div>`
})
document.querySelector('.kardsKoders').innerHTML = cardsKoders
}

let sKod = document.querySelector('.kod')
sKod.addEventListener('click', () => {
    printKoders()
})
