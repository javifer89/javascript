//Ejecución de pacientes filtrados por enfermedad
const filterPatientsByDiagnosis= filterPatientsByAge(listaPacientes, 'gripe')
console.log(filterPatientsByDiagnosis(listaPacientes, 'gripe'))
console.log(filterPatientsByDiagnosis(listaPacientes, 'diabetes'))

//Ejecución de pacientes filtrados por edad
 const filterPatientsByAge = filterPatientsByAge(listaPacientes, '18', '35')
console.log(filterPatientsByAge(listaPacientes, '18', '35'))


//Ejecución de pacientes filtrados por terminación de número de SS
const filterPatientsBySs = filterPatientsBySs(pacientes, 0)
console.log(filterPatientsBySs(pacientes, 0))
