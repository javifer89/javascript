const sectionPersonajes = document.querySelector("#sectionPersonajes");
const buttons = document.querySelectorAll(".pagination");
// funciones de pintado
function printOneCharacter(pCharacter, pDom) {
  const article = document.createElement("article");
  article.classList.add(pCharacter.status.toLowerCase());

  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = pCharacter.image;
  figure.appendChild(img);

  const ul = document.createElement("ul");
  ul.innerHTML = `<li>Genero: ${pCharacter.gender}</li>
                <li>Especies: ${pCharacter.species}</li>`;

  const h3 = document.createElement("h3");
  h3.textContent = pCharacter.name;

  article.append(figure, h3, ul);

  pDom.appendChild(article);
}

function printCharacters(pList, pDom) {
  pDom.innerHTML = "";
  pList.forEach((character) => printOneCharacter(character, pDom));
}

//botones de busqueda
//  const personaje = document.querySelector('#search').value


 //Versión Juanan del buscador

  const inputSearch = document.querySelector('#search');
  const btn = document.querySelector('#btn');

  async function getSearch(event) {
 // si event viene del inputSearch solo quiero que sea por la tecla intro

 let word = ""
 if(event.target.id === 'btn'){
   word = inputSearch.value;
  }else if(event.target.id === 'search')
   /aqui quiero saber qué tecla toco
  if (event.key === 'Enter'){
   word = event.target.value
  }
  }
  let urlBusqueda = `${url}/?name=${word}`
  let data = Await getApi(urlBusqueda);
 if (!data.error) {
  printCharactes(data.results, sectionPersonajes)
  } else {
  alert (data.error)
  }


  async function init(pUrl = url){
  let data = await getApi(pUrl);
  if (!data.error) {   //->  si data no tiene error
  printCharactes(data.results, sectionPersonajes)
  intPagination(data.info)
  } else {         //falta crear función para pintar notificaciones
  alert (data.error)
 }
}

init()


function goToPage(event){
  init(event.target.dataset.url);
}

function initPagination(pInfo){
buttons[0].dataset.url = pInfo.prev;
buttons[1].dataset.url = pInfo.next;
for (let button of buttons) {
  button.disabled  = (button.dataset.url === "null") ? true : false; //dataset convierte el contenido en STRING, por lo tanto si no va entre "" no reaccionará
  button.addEventListener('click', getToPage)
}
}

//FALTA CREAR FUNCION DE NOTIFICAR ERRORES


  btn.addEventListener('click', getSearch);
  //los eventos de teclado solo se pueden lanzar sobre el document y sobre elementos de tipo formulario (input y textArea)

 inputSearch.addEventListener('keypress', getSearch)
