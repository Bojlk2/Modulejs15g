let ulMenu = document.createElement('ul')
let liHotels = document.createElement('li')
let liOffers = document.createElement('li')
let liTravels = document.createElement('li')
let liHelp = document.createElement('li')
let liCancel = document.createElement('li')

ulMenu.setAttribute('class', 'menu__booking')
ulMenu.setAttribute('data-menu', 'booking')

liHotels.setAttribute('class', 'menu__booking__item')
liHotels.textContent = 'Hoteles'
ulMenu.appendChild(liHotels)

liOffers.setAttribute('class', 'menu__booking__item')
liOffers.textContent = 'Ofertas'
ulMenu.appendChild(liOffers)

liTravels.setAttribute('class', 'menu__booking__item')
liTravels.textContent = 'Viajes'
ulMenu.appendChild(liTravels)

liHelp.setAttribute('class', 'menu__booking__item')
liHelp.textContent = 'Ayuda'
ulMenu.appendChild(liHelp)

liCancel.setAttribute('class', 'menu__booking__item')
liCancel.textContent = 'Cancelaciones'
ulMenu.appendChild(liCancel)

document.getElementsByTagName('body')[0].appendChild(ulMenu)
