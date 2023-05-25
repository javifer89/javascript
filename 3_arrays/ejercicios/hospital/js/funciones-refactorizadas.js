//mostrar lista de pacientes (solamente mostrar la lista de pacientes completa)

// const listaPacientes = [];
// function mostrarListaPacientes(pListaPacientes) {
//   for (let paciente of pListaPacientes) {
//     listaPacientes[listaPacientes.length] = paciente;
//   }
//   return listaPacientes;
// }


// Sacar pacientes con gripe

/** filterPatientsByDiagnosis
 * recibe dos parametros listapaciente array de json y diagnostico es un string
 * devuelve una lista de pacientes en formato json
 */


// Opción 1 refactorizado
//function filterPatientsByDiagnosis(pListaPacientes, pDiagnostico) {
//   return pListaPacientes.filter(paciente => paciente.diagnostico.toLowerCase() === pDiagnostico.toLowerCase())
// }

//Opción 2 refactorizado
const filterPatientsByDiagnosis = (pListaPacientes, pDiagnostico) => pListaPacientes.filter(paciente => paciente.diagnostico.toLowerCase() === pDiagnostico.toLowerCase())
let resultado = filterPatientsByDiagnosis(pacientes, 'gripe')




// sacar pacientes 18 y 25 años

/** filterPatientsByAge
 *recibe tres parametros lista de pacientes en json, y edad minima y edad maxima en numero
 * devuelve una lista de pacientes en formato json
 */

// function filterPatientsByAge(pPatientList, pAgeMin, pAgeMax) {
//   const listaFiltrada = [];
//   for (let paciente of pPatientList) {
//     if (paciente.edad >= pAgeMin && paciente.edad <= pAgeMax) {
//       listaFiltrada[listaFiltrada.length] = paciente;
//     }
//   }
//   return listaFiltrada;
//}
//refactorizado
const filterPatientsByAge = (pPatientList, pAgeMin, pAgeMax) => pPatientList.filter(paciente => paciente.edad >= pAgeMin && paciente.edad <= pAgeMax)
let resultado2 = filterPatientsByAge(pacientes, 18, 25)
// console.log(resultado2)




// sacar pacientes cuyo numero de la ss acabe en 0

/** filterPatientsBySs
 *recibe dos parametros lista de pacientes en json, y letra o numero en string de búsqueda
 * devuelve una lista de pacientes en formato json
 */

// function filterPatientsBySs(pPatientList, pLetter) {
//   const listaFiltrada = [];
//   for (let paciente of pPatientList) {
//     let numero = paciente.numeroSS;
//     let ultimoNumero = numero % 10; // Si fuese STRING, lo haria con numero.length -1, numero%100 saco los dos últimos digitos
//     if (ultimoNumero === pLetter) {
//         listaFiltrada[listaFiltrada.length] = paciente;
//     }
//   }
// return listaFiltrada
// }



//refactorizado
const filterPatientsBySs =(pPatientList, pLetter) => pPatientList.filter(paciente => paciente.numeroSS%10 === pLetter)
let resultado3 = filterPatientsBySs(pacientes, 0)

