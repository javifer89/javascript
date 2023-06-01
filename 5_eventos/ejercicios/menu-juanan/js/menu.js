//capturamos elementos del dom

const sectionMeals = document.querySelector("#menu .meals");



function printMenu(pList, pDom) {
  (pDom.innerHTML = ""), pList.forEach((item) => printOneItem(item, pDom));
}
// printMenu(menu, sectionMeals);


function filterByCategory(pList, pCategory) {
return pList.filter(item => item.category === pCategory);
}

function changeMenu (event){
let category = event.target.textContent.toLowerCase();
const menuFiltered = filterByCategory(menu, category)
}

//vamos a capturar los botones del menu de la izq
const lis = document.querySelectorAll('.select-lunch-time li')
lis = lis.forEach( li  => li.addEventListener('click', changeMenu))

printMenu(menuFiltered,sectionMeals);





//borrar del array - saber el id del elemento
function deleteItemArray(pId, pList) {
  //splice borrar por posición, tenemos una ID para saber su posición
  //findIndex devuelve la posición si se cumplela condición y -1 si no se cumple.
  let posicionBorrar = pList.findIndex((item) => item.id === pId);
  if (posicionBorrar !== -1) {
    pList.splice(posicionBorrar, 1);
  }
  console.log(pList);
}

function deleteItem(event) {
  event.preventDefault();
  let id = parseInt(event.target.dataset.id);
  // console.log(id, typeof id)

  //borrar fisicamente del DOM
  //antes de borrar desde "a" tengo que recoger el article -> 2 nodos
  const articleDelete = event.target.parentNode.parentNode; //haremos tantos parentNode como nodos tengamos que subir
  articleDelete.parentNode.removeChild(articleDelete);
}

function printOneItem(pMenuItem, pDom) {
  const article = document.createElement("article");
  const figure = document.createElement("div");
  const img = document.createElement("img");
  img.src = pMenuItem.url;
  img.alt = pMenuItem.title;

  figure.appendChild(img);

  const div = document.createElement("div");
  const header = document.createElement("header");
  header.innerHTML = `<h3>${pMenuItem.title}</h3>
  <span>${pMenuItem.price}</span>`;
  const p = document.createElement("p");
  p.textContent = pMenuItem.description;

  const a = document.createElement("a");
  //creo un dataset para enviar cada vez que hagamos click en el boton, el id del elemento que quiero borrar
  a.dataset.id = pMenuItem.id;

  a.addEventListener("click", deleteItem);
  a.href = "#";
  a.classList.add("boton");
  a.textContent = "Borrar";

  div.appendChild(header, p, a);
  article.append(figure, div);
  pDom.appendChild(article);
}



// RETO, asignar la class ACTIVE a la seccion del menu que esté en activo
//añadir clase al activo (event.target), pero hay que apagar el que no esta activo
