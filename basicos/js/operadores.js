var numA = 8 ;
var numB = 3;


console.log('sumar', numA + numB);
console.log('restar', numA - numB);
console.log('multiplicar', numA * numB);
console.log('dividir', numA / numB);
console.log('resto', numA % 2);
console.log('potencia', numA ** numB);


var resultado = numA + numB; // almacenamos el resultado de la suma y se puede reutilizar siempre que se necesite
console.log(resultado); // 11



//Comparadores


//Negación

var activo = true;
console.log(!activo); // false


//Igualdad

console.log('igualdad', 20 == 20); // true , operador de igualdad devuelve booleano
console.log('igualdad', 20 == 21); // false

console.log('igualdad2', 20 == '20'); // true, porque no es una comparación ESTRICTA (number y string)

console.log('igualdad3', 20 === '20'); // false, porque es una comparación ESTRICTA (number y string)
console.log('igualdad3', 'hola' === 'adios'); // true, porque es el mismo tipo, aunque el texto no signifique lo mismo.

console.log('desigualdad', 20 != 20); // falso, ya que no son diferentes en tipo, aunque estamos utilizando la comparación de
                                        // valor
console.log('desigualdad', 20 !== 20); // falso, ya que no son diferentes ni en tipo ni en valor.


// AND

console.log (true && true); // true

var marca = 'nike';
var precio = 100;

console.log(marca === 'nike' && precio === 100); // true ambas
console.log(marca === 'adidas' && precio ===100); // la primera es false y la 2ª es true

//La marca debe ser nike y el precio debe estar entre 50 y 200
console.log(marca === 'nike'); //true
console.log(precio > 50); // true
console.log (precio < 200);
console.log(precio > 50 && precio < 200); // true

console.log((marca === 'nike') && (precio > 50 && precio < 200));


//OR

//La marca debe ser nike o el precio debe ser mayor de 500
console.log (marca === 'nike' || precio > 500); // true, ya que una de las dos condiciones se cumplen (marca, precio no)
