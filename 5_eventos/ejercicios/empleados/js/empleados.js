const registerForm = document.querySelector("#registerForm");
const sectionEmployees = document.querySelector("#empleados .flex");
let id = 2;
registerForm.addEventListener('submit', getDataForm); // cuando hacemos submit, recibe un evento (submit) que ejecuta una accion (getDataForm) que recoge los event.target recogidos en el formulario

function saveEmployee(pList, pEmployee) {
  let duplicado = pList.findIndex(employee => employee.mail === pEmployee.mail)//antes de hacer push del nuevo empleado debo comprobar si existe en la base de datos. Tengo que buscar un empleado con el mismo mail, si lo encuentro retorno KO y si no OK.
  if (duplicado === -1){
    //puedo insertar empleado(push)
     pList.push(pEmployee);
     return 'usuario guardado';
  } // no puedo insertar empleado
    return 'usuario duplicado';
  }


function printOneEmployee(pEmployee, pDom) {
  const article = document.createElement('article');
  const h3 = document.createElement('h3');
  const ul = document.createElement('ul');

  h3.textContent = pEmployee.name;
  ul.innerHTML = `<li>Edad:${pEmployee.age}</li>
                <li>Email: ${pEmployee.mail}</li>
                <li>Puesto: ${pEmployee.job}</li>
                <li>Salario: ${pEmployee.salary}</li>`;
  article.append(h3, ul);
  pDom.appendChild(article);
}

function comprobarForm(pForm){
    return (pForm.name.value !== "" &&
    pForm.age.value !== "" &&
    pForm.mail.value !== "" &&
    pForm.job.value !== "" &&
    pForm.salary.value !== ""
    );
}
function getDataForm(event) { // esta funcion es un manejador de eventos (eventhandler)

  //para prevenir la accion por defecto tanto form como de enlaces, debo hacerlos lo primero de todo.
  event.preventDefault();

  //para capturar los campos de un formulario nos valemos de su name para recoger value.
  if (comprobarForm(event.target)){
    const newEmployee = {
      id: id,
      name: event.target.name.value,
      age: parseInt(event.target.age.value),
      mail: event.target.mail.value,
      job: event.target.job.value,
      salary: Number(event.target.salary.value),
    }


    //guardar el empleado en el array
    let guardado = saveEmployee(employees, newEmployee);

    //imprimirlo
    if (guardado === 'usuario guardado') {
      printOneEmployee(newEmployee, sectionEmployees);
      id++;
      //reset de formulario
      event.target.reset(); // reset solo funciona para los formularios, para reiniciar los campos
    } else {
      alert(guardado);
      event.target.mail.style.border = '3px solid red';
    }
  } else {
    alert('Los campos no pueden ser vacios');
  }
}

function printAllEmployee(pList, pDom) {
  pList.forEach((employee) => printOneEmployee(employee, pDom));
}
printAllEmployee(employees, sectionEmployees);





//filtrar aquellos empleados que esten por debajo el sueldo minimo interprofesional

// function filterBySalary(pList, pSalary) {
//   let filterList = [];
//   pList.filter(pList.salary < pSalary);
//   return filterList;
// }
