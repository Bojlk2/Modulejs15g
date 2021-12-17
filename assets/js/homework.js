const xhttp = new XMLHttpRequest()
// Abrir la conexion (empezar a creat el request)
// xhttp.open(metodo, url)
xhttp.open( "GET" , "https://jsonplaceholder.typicode.com/users", true)
// Escuchar cuando el response este listo
xhttp.onload = function(data) {
    if(data.target.status === 200){
        let resp = data.target.response
        let objResp = JSON.parse(resp)
        // console.log(res)
        // console.log(objResp)
        // imprimir en DOM
        let gridUser = ''
        objResp.forEach( element => {
            gridUser += `            
            <div class="col-12 col-md-4">
                <div class="card align-items-center mb-4 p-3 bg-primary bg-gradient text-white" >
                    <div class="card-body">
                        <h5 class="card-title">Nombre: ${element.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${element.id}</h6>
                        <p class="card-text"><strong>Usuario:</strong> ${element.username}</p>
                        <p class="card-text"><strong>Email:</strong> ${element.email}</p>
                        <p class="card-text"><strong>Dirección:</strong> ${element.address}</p>
                        <p class="card-text"><strong>Teléfono:</strong> ${element.phone}</p>
                        <p class="card-text"><strong>Website:</strong> ${element.website}</p>
                        <p class="card-text"><strong>Dirección:</strong> ${element.address.street}</p>
                        <p class="card-text"><strong>Compañia:</strong> ${element.company}</p>
                    </div>
                </div>
            </div>            
            `
        });
        document.querySelector('.row').innerHTML = gridUser
    }
}
// Enviar la peticion
xhttp.send()