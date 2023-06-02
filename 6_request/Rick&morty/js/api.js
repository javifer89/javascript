// const url = `https://rickandmortyapi.com/api/character?name=rick`

async function getApi() {
    const personaje = document.querySelector('#search').value
    const url = `https://rickandmortyapi.com/api/character?name=${personaje}`
    try{
        let peticion = await fetch(url, {method: 'GET'})
        let data = await peticion.json();
        console.log(data)
        printCharacters(data.results, sectionPersonajes);
    }catch (error){
        console.log(error)
    }
}
async function getApi() {
    try{
        let peticion = await fetch(url, {method: 'GET'})
        let data = await peticion.json();
        return data;
    }catch{
        console.log(error)
    }
}
// getApi(url)



//buscar un personaje o personajes que metamos en el buscador

//https://rickandmortyapi.com/api/character/?name=rick  "rick" es un parametro que nos viene por buscador






/** Versión Juanan del buscador
 *
 *
 * script.js
 *
 *
 * const inputSearch = document.querySelector('#search');
 * const btn = document.querySelector('#btn');
 *
 * async function getSearch(event) {
 * si event viene del inputSearch solo quiero que sea por la tecla intro
 *
 *let word = ""
 *if(event.target.id === 'btn'){
 *  word = inputSearch.value;
 * }else if(event.target.id === 'search')
 *  /aqui quiero saber qué tecla toco
 * if (event.key === 'Enter'){
 *  word = event.target.value
 * }
 * }
 * let urlBusqueda = `${url}/?name=${word}`
 * let data = Await getApi(urlBusqueda);
 *if (!data.error) {
 * printCharactes(data.results, sectionPersonajes)
 * } else {
 * alert (data.error)
 *
 *
 *
 * async function init(){
 * let data = await getApi(url);
 * if (!data.error) {   ->  si data no tiene error
 * printCharactes(data.results, sectionPersonajes)
 * } else {
 * alert (data.error)
 *}
 }
init()
//FALTA CREAR FUNCION DE NOTIFICAR ERRORES



 * btn.addEventListener('click', getSearch);
 * /los eventos de teclado solo se pueden lanzar sobre el document y sobre elementos de tipo formulario (input y textArea)
 *
 *inputSearch.addEventListener('keypress', getSearch)
 *
 *
 *
 *
 *API.js
 * async function getApi() {
    try{
        let peticion = await fetch(url, {method: 'GET'})
        let data = await peticion.json();
        return data;
    }catch{
        console.log(error)
    }
}
 */
