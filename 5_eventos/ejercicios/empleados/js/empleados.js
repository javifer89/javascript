const registerForm = document.querySelector('#registerForm');
const sectionEmployees = document.querySelector('#empleados .flex');
let id = 1;
registerForm.addEventListener('submit', getDataForm);

function getDataForm(event) {
    //para prevenir la accion por defecto tanto form como de enlaces, debo hacerlos lo primero de todo.
    event.preventDefault();

    //para capturar los campos de un formulario nos valemos de su name para recoger value.
    const newEmployee = {
        id: id,
        name: event.target.name.value,
        age: parseInt(event.target.age.value),
        mail: event.target.mail.value,
        job: event.target.job.value,
        salary: Number(event.target.salary.value)
    }
    //guardar el empleado en el array
    function saveEmployee(empleados, newEmployee){
        empleados.push(newEmployee);
    }


    //imprimirlo
    function printOneEmployee(newEmployee, sectionEmployees){
    sectionEmployees.innerHTML += `<article>
    <h3>${newEmployee.name}</h3>
    <ul>
        <li>Edad${newEmployee.age}</li>
        <li>Email: ${newEmployee.mail}</li>
        <li>Puesto: ${newEmployee.job}</li>
        <li>Salario: ${newEmployee.salary}</li>
    </ul>
    </article>`
}return printOneEmployee(newEmployee, sectionEmployees)
}
// printOneEmployee(newEmployee, sectionEmployee)

//filtrar aquellos empleados que esten por debajo el sueldo minimo interprofesional
function filterBySalary(pList,pSalary){
    let filterList = []
pList.filter(pList.salary < pSalary)
return filterList
}
console.log(filterBySalary(sectionEmployees, 1000))
