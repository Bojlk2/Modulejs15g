// POST crear datos
const createUser =  (objPost) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "POST" , "https://job15gjs-default-rtdb.firebaseio.com/.json", true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            document.querySelector('#title').value = ''
            document.querySelector('#author').value = ''
            document.querySelector('#timetoread').value = ''
            document.querySelector('#resume').value = ''
            let res = JSON.parse(data.target.response )
            let idPost = res.name
            document.getElementById('post__id').innerText = idPost
            document.getElementById('alert__response').classList.remove('d-none')
        }
    }
    xhttp.send( JSON.stringify(objPost) )
}


let send__post = document.querySelector('#send__post')
send__post.addEventListener('click', () => {
    
    
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let timetoread = document.querySelector('#timetoread').value
    let resume = document.querySelector('#resume').value

    if (title === '' || author === '' || timetoread === '' || resume === ''){
        alert('Falta llenar un campo')
    } else {
        
    // console.log(title, author, timetoread, resume)

    let objNewPost = {
        title: title,
        author: author,
        timetoread: timetoread,
        resume: resume
    }

    createUser(objNewPost)
    }
})

const getData = (url, callback) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "GET" , "https://job15gjs-default-rtdb.firebaseio.com/.json", true)

    xhttp.onload = function(data) {
        if(data.target.status === 200) {
            let objResp = JSON.parse(data.target.response)
            // callback
            callback(objResp)

        }
    }

    xhttp.send()
}






// let objNewPost =  {
//     author: 'Jorge luis',
//     title: 'foo',
//     body: 'bar lorem',
// }