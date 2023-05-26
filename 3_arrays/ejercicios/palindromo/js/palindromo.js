// CORRECCIÓN
let texto = 'La ruta nos aporto otro paso natural'

function quitarTildes(pCadena){
    let cadena = pCadena.replaceAll('á', 'a') //replaceAll cambia caracteres en TODA la cadena.
    texto = texto.replaceAll('é','e')
    texto = texto.replaceAll('í','i')
    texto = texto.replaceAll('ó','o')
    texto = texto.replaceAll('ú','u')
    return texto;
}

function isPalindrome(pSentence) {
let results = true;

let minusculas = pSentence.toLowerCase()

//let sinEspacio = minusculas.replaceAll(" ", "");  // replaceAll hace lo mismo que split y join juntos en este caso
let sinEspacio = minusculas.split(" ").join("")
let sinTildes = quitarTildes(sinEspacio);
let arrayCaracteres = sinTildes.split("") // la frase se convierte en array de caracteres
let arrayInvertido = [...arrayCaracteres].reverse();

// para comparar array tenemos que recorrerlos elemento por elemento o caracter por caracter
//puedo convertir de nuevo mis array en texto y asi si poderlo comparar
let sinTildesInvertido = arrayInvertido.join('')
if (sinTildes !== sinTildesInvertido){
    results = false;
}
return results
}
let palindromo = isPalindrome(texto)
console.log(palindromo)






// EJERCICIO MIO
// const frase = 'La ruta nos aporto otro paso natural'

// palindromo = (pFrase) => pFrase.split(" ").join("")
// console.log(palindromo(frase))


// const fraseArray = frase.split(" ")
// console.log(fraseArray)              // array normal

// const fraseInvertida = fraseArray.reverse();
// console.log(fraseInvertida)              // array invertido

//falta invertir el orden de cada palabra dentro del array invertido y unir en frase con la funcion palindromo
