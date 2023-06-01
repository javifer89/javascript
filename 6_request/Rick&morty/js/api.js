const url = 'https://rickandmortyapi.com/api/character' + `?name=${pName.buscador}`

async function getApi(pUrl){
    try{
        let peticion = await fetch(pUrl, {method: 'GET'})
        let data = await peticion.json();
        console.log(data)
        printCharacters(data.results, sectionPersonajes);
    }catch (error){
        console.log(error)
    }
}
getApi(url)


//buscar un personaje o personajes que metamos en el buscador

//https://rickandmortyapi.com/api/character/?name=rick  "rick" es un parametro que nos viene por buscador
