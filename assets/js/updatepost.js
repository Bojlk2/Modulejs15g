window.addEventListener('load', () => {
    let idPost = location.search.slice(8)
    fetch(`https://job15gjs-default-rtdb.firebaseio.com/${idPost}.json`,)
    .then((response) => {
        return response.json()
    })
    .then((post) => {
        document.querySelector('#title').value = post.title
        document.querySelector('#author').value = post.author
        document.querySelector('#timetoread').value = post.timetoread
        document.querySelector('#resume').value = post.resume
    })
    .catch((err) => {
        console.log(err)
    })
})

const updateFetch = (objPost, idPost) => {
    fetch(`https://job15gjs-default-rtdb.firebaseio.com/${idPost}.json`, 
    {
        method: 'PATCH',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(objPost)
    }
    ).then((res) => {
        return res.json()
    }).then((res) => {
        console.log(res)
        document.querySelector('#alert__response').classList.remove('d-none')
    })
   
}
 
let update__post = document.querySelector('#update__post')
update__post.addEventListener('click', () => {

    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let timetoread = document.querySelector('#timetoread').value
    let resume = document.querySelector('#resume').value

    if(
        title !== '' &&
        author !== '' &&  
        timetoread !== '' &&
        resume !== ''
    ){
        let idPost = location.search.slice(8)
        let postToUpdate = {
            title: title,
            author: author,
            timetoread: timetoread,
            resume: resume
        }
    
        // updateUser(postToUpdate, idPost )
        updateFetch(postToUpdate, idPost )
    } else {
        alert('Algunos datos estan vacios')
    }

})

// DELETE eliminar post

let delete__post = document.getElementById('delete__post')
delete__post.addEventListener('click', () => {
    let idPost = location.search.slice(8)
    fetch(`https://job15gjs-default-rtdb.firebaseio.com/${idPost}.json`,
    {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then((res) => {
        return res.json()
    })
    .then((redir => {
        location.replace('http://127.0.0.1:5500/')
    }))
})
