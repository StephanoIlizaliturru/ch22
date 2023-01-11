console.log("Sesion js01");

 /* Son 7 datos primitivos de JavaScript
 -String ("Hola Mundi")
 -Number ( 188.01 ) 
 -BigInt ( 188n )
   Convertir un dato numerico a BigInt let bigIntVar(maxNumber);
   bigIntVar + 1n
 -Boolean
   (true) || (false)
 -Undefined
   dato al azar sin asignacion de tipo de dato.
 -Null
   Intencionalmente se borra el tipo de dato, solo se declara.
 -Symbol

 NaN 
 not a number Number.isNaN (sxmi);

Tipos de datos Object:
-Object
let myObject {};

-Array

Funciones
es un fracmento de codigo que puede ser llamado.
 se dedine e invoca con
 function nombreDeFuncion() {

 }
 invoca con :
 nombreDeFuncion();
 <
*/

let myObject = {clave: "valor", edad: 18, 5:5 };
console.log( myObject.edad );
const propiedad = "edad";
console.log( myObject[propiedad] );
console.log( myObject["5"]  );

//Convertir de datos string a numerico
 //Numerico.parseInt("12");
 //Numerico.parseFloat("12.4");

 //Convertir numerico a String
 //let num = 12;
 //num.tostring();
 //"12"
 //num.tostring(2); entre parentesis es la base por ejemplo binario
 // math.round(4.7);
 //4





