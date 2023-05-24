


const valores= Object.values(pacientes)


//mostrar lista de pacientes
const listaPacientes = []
function mostrarListaPacientes(pListaPacientes) {

    for(let paciente of pListaPacientes) {
            listaPacientes[listaPacientes.length] = paciente
        }
        return listaPacientes
}
console.log(mostrarListaPacientes(pacientes));


// sacar pacientes con gripe

let key = 'diagnostico'

const listaFiltrada = []
function enfermosGripe(pListaPacientes, pDiagnostico) {

    for (let key of pListaPacientes){
        listaFiltrada += `<li>${key}</li>`
    }
    listaFiltrada = '</ul>'
    return listaFiltrada
}

console.log(enfermosGripe(listaPacientes, 'gripe'))





// sacar pacientes 18 y 25 años

function pacientesJovenes(pEdadMin, pEdadMax){

}
// sacar pacientes cuyo numero de la ss acabe en 0
function getSsAcabadoEn0 (pNumSs){

}
