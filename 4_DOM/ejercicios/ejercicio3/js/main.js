// Incluir cada libro del array en la sección correspondiente siguiendo el template de html indicado

//CORRECCIÓN
const sectionNovedades= document.querySelector('#novedades');
const sectionClasicos= document.querySelector('#clasicos');
/**
 *function que pinte una lista de libros en cualquier zona del html
 *Parametros una lista de libros y seccion del html
 */
function printOneBook (pBook, pDom){
    pDom.innerHTML += `<article>
                        <h3>${pBook.titulo}</h3>
                        <p>Autor: ${pBook.autor}</p>
                        </article>`
}
function printBooks(pList, pDom){
    pList.forEach(book => printOneBook(book, pDom));
}
function filtrarCategoria(pLista, pCategoria){
    const listaFiltrada= pLista.filter(book => book.categoria === pCategoria)
    return listaFiltrada;
}


const librosNovedades = filtrarCategoria(libros, 'noveades')
const librosClasicos = filtrarCategoria(libros, 'clasicos')
// printBooks(librosNovedades, sectionNovedades)
// printBooks(librosClasicos, sectionClasicos)

//callbacks (se puede hacer con o sin callbacks)
printBooks(filtrarCategoria(libros, 'clasicos'),sectionClasicos)
printBooks(filtrarCategoria(libros, 'novedades'),sectionNovedades)








// ejercicio DAVID
// const sectionNovedades= document.querySelector('#novedades');
// const sectionClasicos= document.querySelector('#clasicos');
// const librosNovedades = libros.filter(libro => libros.categoria === 'novedades')
// const librosClasicos = libros.filter(libro => libros.categoria === 'clasicos')

// librosNovedades.forEach(libro => {
//     sectionNovedades.innerHTML += `<article>
//                         <h3>${libro.titulo}</h3>
//                         <p>${libro.autor}</p>
//                     </article>`
// })
// librosClasicos.forEach(libro => {
//     sectionClasicos.innerHTML += `<article>
//                         <h3>${libro.titulo}</h3>
//                         <p>${libro.autor}</p>
//                     </article>`
// })





//EJERCICIO MIO
// libros.forEach((libro, i) => { libro.textContent = `<article>
    //     <h3>Titulo del libro</h3>
    //     <p>Autor: Nombre del autor</p>
    //     </article> ${i + 1}` })
    //     console.log(libros)

    //     const librosClasicos = document.getElementById('clasicos');
    //     librosClasicos.textcontent = libros.getElementById
    //     console.log(librosClasicos)
//     const librosNovedades = document.getElementById('novedades');
//     librosNovedades.textcontent = libros.getElementById
//     console.log(librosNovedades)



// const datos = [...libros.map((item, index) => {
//   console.log('Libro:', index,',',
//               'Titulo:', item.titulo,',',
//               'Autor:', item.autor)
//               return item.Nombre
// })]
// document.getElementById('clasicos').innerHTML = datos;

// function searchByName(pList, pBusqueda) {

// const filterList = pList.filter(alumno => {
//     return alumno.nombre.toLowerCase().includes(pBusqueda.toLowerCase())
// })

// console.log(filterList);
// }

// searchByName(alumnos, 't')


// function printOneStudent(pLibros) {
//             document.write(`<p>${pLibros.titulo} -  ${pLibros.autor}</p>`)
//         }
// printOneStudent(libros)
// console.log(printOneStudent(libros))
