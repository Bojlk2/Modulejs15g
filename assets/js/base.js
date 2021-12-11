/**
 * Selecionar elementos
 * 
 * 1. Selecionar por ID
 */

//  1. Selecionar por ID
// document.getElementById('head__title') 
// document.getElementsByTagName('li')
// document.getElementsByClassName('link__menu')

// document.querySelector('#head__title')
// document.querySelector('li')
// document.querySelector('.link__menu')
// document.querySelectorAll('.link__menu')
// // document.querySelectorAll('')

// /**
//  * Obtener atributos
//  * Setear atributos
//  */

// // get
// let title = document.querySelector('#head__title').getAttribute('data-title')
// let level = document.querySelector('#head__title').getAttribute('data-level')

// // set
// document.querySelector('#head__title').setAttribute('data-custom','random')
// // reemplazando clases 
// document.querySelector('#head__title').setAttribute('class','trees cuatro')

// // Agregar clases
// document.querySelector('#head__title').classList.add('clase3')
// // remover clases
// document.querySelector('#head__title').classList.remove('clase2')

// // comprobar si existe un atributo
// document.querySelector('#head__title').hasAttribute('class')


// comprobar si el titulo tiene class
/**
 * Si si, comprobar 
 * ---si tiene la clase "clase1 clase2"
 * ----- Agregar la "clase 3"
 * ---sino 
 * ----- Agregar la clase "custom"
 */
if(document.querySelector('#head__title').hasAttribute('class') ) {
    if ( document.querySelector('#head__title').getAttribute('class') === 'clase1 clase2' ) {
        document.querySelector('#head__title').classList.add('class3')
    } else {
        document.querySelector('#head__title').classList.add('custom')
    }
}

let ulElement = document.createElement('ul')
// <ul></ul>

let liFirst = document.createElement('li')
// <li></li>
liFirst.textContent = 'item 1'
// <li>item 1</li>
ulElement.appendChild(liFirst)
// <ul> <li>item 1</li> </ul>

let liSecond = document.createElement('li')
// <li></li>
liSecond.textContent = 'item 2'
// <li>item 2</li>
ulElement.appendChild(liSecond)
// <ul> <li>item 1</li> <li>item 2</li> </ul>

document.getElementsByTagName('body')[0].appendChild(ulElement)
// body -> <ul> <li>item 1</li> <li>item 2</li> </ul>

let ulist = document.createElement('ul')
let liste = document.createElement('li')
liste.textContent = 'Home'
ulist.appendChild(liste)
let list1 = document.createElement('li')
list1.textContent = 'Products'
ulist.appendChild(list1)
let list2 = document.createElement('li')
list2.textContent = 'About Us'
ulist.appendChild(list2)
document.querySelector('ul').classList.add('menu')




document.querySelector('li').classList.add('item_menu')


document.getElementsByTagName('body')[0].appendChild(ulist)




