console.log("Sesion js02");
/*
Funciones declaradas / funciones definidas
(function declaration/ function statemen)

Una caracteristica de las funciones declaradas es que tiene hosting (elevacion).


*/
console.log("El resultado de 5 * 10 = " + mult(5, 10)) ;

function mult(a,b){
    return a*b;
}

/*
funciones expresadas / function expression

Son funciones declaradas dentro de una variable

*/

/**
 * Suma de 2 valores
 * @param {number} a primer operador para sumar
 * @param {number} b segundo operador para sumar
 * @returns resultado de a + b;
 */

const suma = function(a,b) {
    const result = a+ b;
    return result;
}

console.log("La sumatoria de 4 + 6 = " + suma(4,6));

/*

Funciones auto invocadas.

Las funciones autoinvocadas( self-ivoking function)
Son funciones que se ejecutan en su definicion.
Pueden ser anonimas.
*/

( function saludos() {
    console.log("Hola, me estoy autoinvocando");
})

();

( function saludos() {
    console.log("Holi, me estoy autoinvocando");
})

();

/*
funciones flecha / arrow function
Son funciones que no requieresn la palabra function; ademas si solo tienen un instruccion return ni llaves
*/

const resta = function(a,b){
    return a-b;
}

const minum = (a,b) => a - b;
console.log("La resta de 20 - 2 = " + minum(20,2));

const exponente = (a,b) => {
    const result = a ** b;
}
console.log(" 4 a la 3 = " + exponente(4,3));

/* const alcuadrado(a) = a ** 2 =>{
    console.log("4 al cuadrado es  " + alcuadrado(4));
}
*/
const imprimeSaludos = () => console.log("Holi");
imprimeSaludos();

/*
Funciones con parametros inicializados.
*/

function divide ( a = 1, b = 1){
    return a/b;
}

console.log("Divicion de 3/1 = " + divide(5) );

/* 
Rest Parametros
El parametro rest nos permiten representar una serie de valores indefinidos en los argumentos como un array.
*/
// el parametro rest siempre debe ir al principio de todos los parametros.
/* 
function sumaIn(a,b, ...restoDeDatos) {
    for (let i = 0; i < restoDeDatos.length; i++){
        sumatoria += restoDeDatos[i];
    }
    return sumatoria ;
}
*/




console.log("Sumar varios numeros: " + sumaIn(2,3));

/*
Funciones recursivas.
funcion recursiva es una funcion que se llama a si misma

Factorial de 0 = 1
Factorial de 3 = 3 * 2 * 1 //6
Factorial de 5 = 5 * 4 * 3 * 2 * 1 //120

*/
/*
function factorialConCicloFor ( a ) {
    let total = 1;
    for (i=1; i<=a; i++) {
        total *= i;
    }
    return total;

}
*/

/*
function factorialConRecursion( a ) {
    return a * factorialConRecursion(a-1);
}
*/





