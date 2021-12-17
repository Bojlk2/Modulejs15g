// / XMLHttpRequest()
/**
 * Declarar un objeto XMLHttpRequest
 * Abrir la conexion (empezar a creat el request)
 * Escuchar cuando el response este listo
 * Enviar la peticion
 *
 */
//  Declarar un objeto XMLHttpRequest
const xhttp = new XMLHttpRequest()
// Abrir la conexion (empezar a creat el request)
// xhttp.open(metodo, url)
xhttp.open( "GET" , "https://jsonplaceholder.typicode.com/posts", true)
// Escuchar cuando el response este listo
xhttp.onload = function(data) {
    if(data.target.status === 200){
        let res = data.target.response
        let objResp = JSON.parse(res)
        // console.log(res)
        // console.log(objResp)
        // imprimir en DOM
        let templateUser = ''
        objResp.forEach( element => {
            templateUser += `            
            <div class="col-12 col-md-4">
                <div class="card align-items-center mb-4 p-3 bg-info" >
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${element.id}</h6>
                        <p class="card-text">${element.body}</p>
                    </div>
                </div>
            </div>            
            `
        });
        document.querySelector('.row').innerHTML = templateUser
    }
}
// Enviar la peticion
xhttp.send()