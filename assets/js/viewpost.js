window.addEventListener('load', () => {
    let idPost = location.search.slice(8)
    fetch(`https://job15gjs-default-rtdb.firebaseio.com/${idPost}.json`)
        .then((res) => {
            return res.json()
        })
        .then((view) => {
            for(post in view) {
                document.querySelector('.card-title').innerText = view.title
                document.querySelector('.card__author').innerText = view.author
                document.querySelector('.card__timetoread').innerText = view.timetoread + ' min'
                document.querySelector('.card__resume').innerText = view.resume
            }
        })

})