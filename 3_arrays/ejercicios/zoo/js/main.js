
function getPeligrosidad(pNum) {
    let listaPeligrosidades = ['docil', 'suavecito', 'ojito', 'cuidadin', 'peligroso'];
    return listaPeligrosidades[pNum - 1];
}


function getAnimalArticle(pAnimal) {
    let html = `<article  class="${getPeligrosidad(pAnimal.peligrosidad)
        }">
                    <h3>${pAnimal.raza}</h3>
                    <figure>
                        <img src="${pAnimal.foto}" alt="${pAnimal.raza}">
                    </figure>
                    <p>Peso: ${pAnimal.peso}kg</p>
                    <p>Peligrosidad: ${pAnimal.peligrosidad}</p>
                </article>`
    return html;
}

function printAnimals(pAnimalList) {
    let section = `<section id="animales">`
    for (let animal of pAnimalList) {
        section += getAnimalArticle(animal)
    }
    section += `</section>`
    document.write(section);
}
printAnimals(animales);