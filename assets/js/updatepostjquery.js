let idPost = location.search.slice(8)
$.ajax({
    url: `https://job15gjs-default-rtdb.firebaseio.com/${idPost}.json`
}).done((post) => {
        $('#title').val(post.title)
        $('#author').val(post.author)
        $('#timetoread').val(post.timetoread)
        $('#resume').val(post.resume)
})

const updatePost = (upObject, idPost) => {
    $.ajax({
        method: 'PATCH',
        url: `https://job15gjs-default-rtdb.firebaseio.com/${idPost}.json`,
        data: JSON.stringify(upObject)
    }).done(() => {
        $('#alert__response').removeClass('d-none')
    })
}

$('#update__post').click(() => {
    let title = $('#title').val()
    let author = $('#author').val()
    let timetoread = $('#timetoread').val()
    let resume = $('#resume').val()

    if(title !== '' &&
    author !== '' &&  
    timetoread !== '' &&
    resume !== ''
    ){
        let idPost = location.search.slice(8)
        let upObject = {
            title: title,
            author: author,
            timetoread: timetoread,
            resume: resume
        }
        updatePost(upObject, idPost)
    } else {
        alert('Algunos datos estan vacios')
    }
})

//Delete

$('#delete__post').click( () => {
    let idPost = location.search.slice(8)
    $.ajax({
        method: 'DELETE',
        url: `https://job15gjs-default-rtdb.firebaseio.com/${idPost}.json`
    }).done(() => {
        location.replace('http://127.0.0.1:5500/')
    })
})