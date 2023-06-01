const sectionPersonajes = document.querySelector('#sectionPersonajes');

// funciones de pintado
function printOneCharacter(pCharacter, pDom){
const article = document.createElement('article');
article.classList.add(pCharacter.status.toLowerCase())

const figure = document.createElement('figure')
const img = document.createElement('img')
img.src = pCharacter.image;
figure.appendChild(img)

const ul = document.createElement('ul');
ul.innerHTML = `<li>Genero: ${pCharacter.gender}</li>
                <li>Especies: ${pCharacter.species}</li>`

const h3 = document.createElement('h3');
h3.textContent = pCharacter.name;

article.append(figure, h3, ul)

pDom.appendChild(article)
}


function printCharacters(pList, pDom){
    pDom.innerHTML = "";
    pList.forEach(character => printOneCharacter(character, pDom));
}

//botones de busqueda
