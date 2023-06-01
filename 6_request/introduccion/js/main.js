const ulUsers = document.querySelector('.users');
const url = 'https://jsonplaceholder.typicode.com/users';

//metodo amazon
const pedido = new XMLHttpRequest()

//abrir la web y comunicarme con la pagina
pedido.open('GET', url); //metodo sincrono
// GET -> obtener informacion
// POST -> enviar informacion
// PUT/PATH -> actualizar informacion
// DELETE  -> para borrar informacion

//enviar el pedido
pedido.send();

//tengo que estar atento a los cambios que sufre el pedido.
//pedido.addEventListener('readystatechange', cargarArchivo);
pedido.addEventListener('load', cargarArchivo);

function printOneUser(pUser, pDom) {
    console.log(pUser);
    pDom.innerHTML += `<li>${pUser.name} - <strong>${pUser.email.toLowerCase()}</strong></li>`
}

function printUsers(pList, pDom) {
    pList.forEach(user => printOneUser(user, pDom))
}

function cargarArchivo(event) {
    if (event.target.status === 200) {
        //aqui puedo hacer uso de mis datos
        //JSON.parse que sirve para convertir texto ya sea en un JSON o en un array
        let data = JSON.parse(event.target.response);
        printUsers(data, ulUsers);
    } else {
        alert('se ha caido la conexion');
    }
}


