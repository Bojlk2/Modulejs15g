const createPost = (objPost) => {
    $.ajax({
        method: 'POST',
        url: 'https://job15gjs-default-rtdb.firebaseio.com/.json',
        data: JSON.stringify(objPost)
    }).done( (newPost) => {
        $('#title').val('')
        $('#author').val('')
        $('#timetoread').val('')
        $('#resume').val('')
        $('#post__id').html(newPost.name)
        $('#alert__response').removeClass('d-none')
    })
}

$('#send__post').click(() => {
    let title = $('#title').val()
    let author = $('#author').val()
    let timetoread = $('#timetoread').val()
    let resume = $('#resume').val()
    if(
        title !== '' &&
        author !== '' &&  
        timetoread !== '' &&
        resume !== ''
    ){
        let objPost = {
            title: title,
            author: author,
            timetoread: timetoread,
            resume: resume
        }

        createPost(objPost)
    } else {
        alert('Algunos datos estan vacios')
    }

})