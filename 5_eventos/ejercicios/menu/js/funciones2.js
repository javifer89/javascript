const sectionComidas = document.querySelector('#comidas');
const divMenu = document.querySelector('.menu');

function printOnePlatos(pPlato, pDom) {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = ${pPlato.nombre};
    const pDescription = document.createElement('p');
    pDescription.textContent = Descripcion: ${pPlato.descripcion}
    const pPrecio = document.createElement('p');
    pPrecio.textContent = ${pPlato.precio};
    article.append(h3, pDescription, pPrecio);

    pDom.appendChild(article);

}





//primera funcion
function printListPlatos(pList, pDom) {
    pList.forEach(plato => printOnePlatos(plato, pDom));

}

printListPlatos(platos, sectionComidas);
