// GET
// VERbost http (POST, PUT, PATCH,  GET,DELETE)

// POST
// const xhttp = new XMLHttpRequest()
// xhttp.open( "POST" , "https://genjs-292ac-default-rtdb.firebaseio.com/posts/.json", true)
// xhttp.onload = function(data) {
//     if(data.target.status === 200){
//         console.log(data)
//     }
// }

// let objNewPost =  {
//     author: 'Job López',
//     title: 'foo',
//     body: 'bar lorem',
// }

// xhttp.send( JSON.stringify(objNewPost) )

// PATCH actualizar datos
// const updateUser =  (objUpdate, idUser) => {
//     const xhttp = new XMLHttpRequest()
//     xhttp.open( "PATCH" , `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idUser}.json`, true)
//     xhttp.onload = function(data) {
//         if(data.target.status === 200){
//             console.log(data)
//         }
//     }
//     xhttp.send( JSON.stringify(objUpdate) )
// }

// let objUpdatePost =  {
//     author: 'Job López Arellano',
// }

// updateUser(objUpdatePost, '-Mr56r0WOvj7h1suIqQt')

// DELETE Eliminar datos
const deleteUser =  (idUser) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "DELETE" , `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idUser}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            console.log(data)
        }
    }
    xhttp.send()
}
deleteUser('-Mr56r0WOvj7h1suIqQt')