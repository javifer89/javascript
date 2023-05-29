//capturar los elementos del DOM con los que interactuo
const sectionPoligonos = document.querySelector('.poligonos');


let i = 1;
//pintar un poligono en el DOM
function pintarUnPoligono(pPoligono, pDom) {

    const div = document.createElement('div');
    div.id = 'poligono_' + i++;
    div.isOpen = false;

    for (let clave in pPoligono) {
        //div.style.backgroundColor = pPoligono.backgroundColor
        div.style[clave] = pPoligono[clave]
    }
    pDom.appendChild(div);
    div.addEventListener('click', () => {
        if(div.isOpen) {
            moverPoligono(div.id, 0)
            div.isOpen = !div.isOpen
        } else {
            moverPoligono(div.id, 200)
            div.isOpen = !div.isOpen
        }
    })

}


//pintar todos los poligonos del array de poligonos.
function pintarPoligonos(pList, pDom) {
    pList.forEach(poligono => pintarUnPoligono(poligono, pDom))
}

pintarPoligonos(poligonos, sectionPoligonos);


//funcion mover un poligono necesito el id del poligono y la cantidad de pixeles que quiero mover.

function moverPoligono(pIdpoligono, pPixeles) {
    const poligonoAmover = document.querySelector(`#${pIdpoligono}`)
    poligonoAmover.style.marginLeft = pPixeles + 'px';
}

//moverPoligono('poligono_1', 200)
