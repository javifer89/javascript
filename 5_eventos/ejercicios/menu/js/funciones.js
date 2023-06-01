const sectionMenu = document.querySelector('#menu');
const divPlatos = document.querySelector('.comida');

const btn1 = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');

function printOnePlato(pPlato, pDom){
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = `${pPlato.nombre}`;
    const pDescription = document.createElement('p');
    pDescription.textContent = `descripcion: ${pPlato.descripcion}`;
    const pPrice = document.createElement('p');
    pPrice.textContent = `${pPlato.precio} €`
    // const figure = document.createElement("figure");
    // figure.innerHTML = pPlato.foto
    article.append(h3, pDescription, pPrice, btn1, btn2);
    pDom.appendChild(article);
}

// let listaPlatos = []
function printListPlatos(pList, pDom){
    pList.forEach(plato => printOnePlato(plato, pDom));
}
printListPlatos(platos,sectionMenu);
// console.log(printListPlatos(menu,sectionMenu));



btn1.addEventListener('click', addPlato);
btn2.addEventListener('click', removePlato);

// function addPlato(pPlato, sectionMenu){
// platos.push(pPlato)  // o unshift (por el principio)
// }
// function removePlato(pPlato, sectionMenu){
//     platos.pop(pPlato)
//     }

// const platosModificados= platos.splice(1, 2);
