let idPost = location.search.slice(8)
$.ajax({
    url: `https://job15gjs-default-rtdb.firebaseio.com/${idPost}.json`
}).done((post) => {
    for(view in post) {
        $('.card-title').html(post.title)
        $('.card__author').html(post.author)
        $('.card__timetoread').html(post.timetoread)
        $('.card__resume').html(post.resume)
    }
})

$('.back_button').click(() =>{
    location.replace('http://127.0.0.1:5500/')
})