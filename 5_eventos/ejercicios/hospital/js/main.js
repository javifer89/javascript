
const sectionPacientes = document.querySelector("#pacientes");



function printOnePatient(pPatient, pDom) {  //pintamos el article en el DOM
    //creamos los elementos
  const article = document.createElement("article");
  const h3 = document.createElement("h3");
  h3.textContent = `${pPatient.nombre} ${pPatient.apellido}`;

  const pEdad = document.createElement("p");
  const pSS = document.createElement("p");
  const pDiag = document.createElement("p");

    // le damos el contenido
  pEdad.textContent = `Edad: ${pPatient.edad}`
  pSS.textContent = `NúmeroSS: ${pPatient.numeroSS}`
  pDiag.textContent = `Diagnostico: ` + `${pPatient.diagnostico}`;

  //Los coloco en el orden concreto
  article.append(h3, pEdad, pSS, pDiag)
// lanzamos el article en el DOM
  pDom.appendChild(article)
}

//pintar los elementos de la lista
function printPatients(pList, pDom) {
  //aqui en este punto tendré que tener en cuenta que estoy filtrando con lo que querré que un listado inicial desaparezca por otro.
  pDom.innerHTML = "";
  pList.forEach(patient => printOnePatient(patient, pDom));
}
printPatients(pacientes, sectionPacientes)

//capturar el selector de diagnostico, recoger su valor y filtrar el array para luego pintar.
const selectDiagnostico = document.querySelector("#diagnostico");

function getDiagnosis(event) {
    let listaFiltrada= filterPatientsByDiagnosis(pacientes, event.target.value)
    printPatients(listaFiltrada, sectionPacientes);
}
selectDiagnostico.addEventListener('change', getDiagnosis) //los selectores suelen llevar el evento change

// capturamos el input de edad minima y edad máxima, recogemos ambos valores y filtramos el array para luego pintar.
const inputEdadMin = document.querySelector("#edadmin");
const inputEdadMax = document.querySelector("#edadmax");
const btn = document.querySelector("#btn");

function getAge(){
let edadMin = parseInt(inputEdadMin.value);
let edadMax = parseInt(inputEdadMax.value);

if (isNaN(edadmin) || isNaN(edadmax)){
    alert ('Los campos son numéricos y  no pueden estar vacios')
    return
}
if(edadmin > edadmax){
    alert ('la edad minima no puede ser mayor que la maxima')
    return
}

let listaFiltrada =  filterPatientsByAge(pacientes, edadmin, edadmax)
printPatients(listaFiltrada, sectionPacientes)


//he terminado vacio los campos
inputEdadMax.value = "";
inputEdadMin.value = "";
}

btn.addEventListener('click', getAge)

/**
* capturar el boton de mostrar todos, simplemente lanzaria el evento y pintaria todos los pacientes.
*/

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', getAll);

function getAll(event) {
printPatients(pacientes, sectionPacientes);
}

/**
* captura el input de nombre, recogemos su valor, filtramos por nombre y pintamos.
*/

const inputNombre = document.querySelector('#nombre');

function getName(event) {
let palabraBuscar = event.target.value;
let listaFiltrada = filterByWord(pacientes, palabraBuscar);
printPatients(listaFiltrada, sectionPacientes);
}

inputNombre.addEventListener('input', getName);
