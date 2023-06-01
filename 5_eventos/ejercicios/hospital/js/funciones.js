//mostrar lista de pacientes (solamente mostrar la lista de pacientes completa)
const listaPacientes = [];
function mostrarListaPacientes(pListaPacientes) {
  for (let paciente of pListaPacientes) {
    listaPacientes[listaPacientes.length] = paciente;
  }
  return listaPacientes;
}


// Sacar pacientes con gripe

/** filterPatientsByDiagnosis
 * recibe dos parametros listapaciente array de json y diagnostico es un string
 * devuelve una lista de pacientes en formato json
 */
function filterPatientsByDiagnosis(pListaPacientes, pDiagnostico) {
  const listaFiltrada = [];

  for (let paciente of pListaPacientes) {
    if (paciente.diagnostico.toLowerCase().includes( pDiagnostico.toLowerCase())) {
      listaFiltrada[listaFiltrada.length] = paciente;
    }
  }
  return listaFiltrada;
}

// sacar pacientes 18 y 25 años

/** filterPatientsByAge
 *recibe tres parametros lista de pacientes en json, y edad minima y edad maxima en numero
 * devuelve una lista de pacientes en formato json
 */
function filterPatientsByAge(pPatientList, pAgeMin, pAgeMax) {
  const listaFiltrada = [];
  for (let paciente of pPatientList) {
    if (paciente.edad >= pAgeMin && paciente.edad <= pAgeMax) {
      listaFiltrada[listaFiltrada.length] = paciente;
    }
  }
  return listaFiltrada;
}

// sacar pacientes cuyo numero de la ss acabe en 0

/** filterPatientsBySs
 *recibe dos parametros lista de pacientes en json, y letra o numero en string de búsqueda
 * devuelve una lista de pacientes en formato json
 */
function filterPatientsBySs(pPatientList, pLetter) {
  const listaFiltrada = [];
  for (let paciente of pPatientList) {
    let numero = paciente.numeroSS;
    let ultimoNumero = numero % 10; // Si fuese STRING, lo haria con numero.length -1, numero%100 saco los dos últimos digitos
    if (ultimoNumero === pLetter) {
        listaFiltrada[listaFiltrada.length] = paciente;
    }
  }
return listaFiltrada
}
