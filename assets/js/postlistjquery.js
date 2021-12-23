$.ajax({
    url: 'https://job15gjs-default-rtdb.firebaseio.com/.json'
}).done((listpost) => {
    let layout = ''
    for(post in listpost) {
        let { title, timetoread, resume, author } = listpost[post]
        layout += `
        <div class="col-12 col-md-4 mb-4">
            <div class="card text-dark bg-light">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${author} -  ${timetoread} min</h6>
                    <p class="card-text">${resume}</p>
                    <a href="updatepost.html?idpost=${post}" class="card-link">Editar post</a>
                    <a href="viewpost.html?idpost=${post}" class="card-link">Ver post</a>
                </div>
            </div>
        </div>
        `
        console.log(layout)
    }
    $('.list__posts').html(layout)
})