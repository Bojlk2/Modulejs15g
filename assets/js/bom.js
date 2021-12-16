/**
 * Browser Object Model
 * Como JS se comunica con el navegador
 * 
 * window:
 * window.innerHeight
 * window.innerWidth
 * 
 * location
 * window.location.href
 * window.location.hostname
 * window.location.pathname
 * window.location.protocol
 * 
 * Navigator
 * window.navigator.appName
 * window.navigator.appCodeName
 * window.navigator.platform
 * 
 * History
 * window.history.back()
 * window.history.forward()
 * 
 * Alert
 * window.alert()
 */

// alert
// window.alert('mensaje a mostrar')
// crear un listener de #prev
// aplicar history.back() o history.forward()

let prev = document.querySelector('#prev')
prev.addEventListener('click', () => {
    window.history.back()
})

let next = document.querySelector('#next')
next.addEventListener('click', () => {
    window.history.forward()
})