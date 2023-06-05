Ejercicio1
// Realizar un programa que permita el ingreso de un número y muestre su tabla de multiplicar(Los primeros 10 múltiplos).

let numeroIngresado = prompt("Ingrese un numero");


function tablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + numero * i);

    }
}
tablaMultiplicar(numeroIngresado);

Ejercicio2
// Realizar un programa que permita el ingreso de números los cuales se tienen que ir acumulando.El ingreso de datos terminará cuando el usuario ingrese un valor 0. Al finalizar el programa mostrar el valor acumulado.

let numeroIngresado = prompt("Ingrese un numero ej 2");
let acumulador = 0;

function acumular(numero) {
    do {
        acumulador = acumulador + parseInt(numero);
        numero = prompt("Ingrese un numero");
    } while (numero != 0);

    console.log(acumulador);
}

acumular(numeroIngresado);



Ejercicio3
// Guarda el número final del ejercicio N°2 en una variable, el mismo deberá estar en un rango entre 1 - 100. La persona deberá poder ingresar números hasta adivinar el valor guardado en dicha variable.Si el valor ingresado es mayor al número secreto, avisarle al usuario, lo mismo si el valor es menor.Así sucesivamente hasta que el usuario adivine el número secreto.Por último mostrar un mensaje de felicitaciones y decirle en cuantos intentos lo ha realizado.



function encontrarNumero(numero) {
    do {
        adivinar2 = prompt("Ingrese un numero entre 1 y 100");

        if (adivinar2 > numero) {
            console.log("El numero es menor");
        }
        else if (adivinar2 < numero) {
            console.log("El numero es mayor");
        }

    } while (numero != adivinar2);
}

encontrarNumero(acumulador);
Ejercicio4




Ejercicio5

// Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre un mensaje por consola con cada uno de los elementos del array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
    console.log("El elemento del array es: " + array[i]);
}

Ejercicio6


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    let doble = numeros[i] * 2;
    console.log("El doble de " + numeros[i] + " es: " + doble);
}




Ejercicio7
// Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que muestre un mensaje de presentación por cada elemento del array.

let familia = [
    {
        nombre: "Jorgito",
        apellido: "Tarable",
        edad: 30,
        dni: 194195678
    },
    {
        nombre: "Rigoberta",
        apellido: "Tarable",
        edad: 25,
        dni: 9238178
    },
    {
        nombre: "Fede",
        apellido: "Tarable",
        edad: 40,
        dni: 54345678
    }
    {
        nombre: "Mariano",
        apellido: "Tarable",
        edad: 50,
        dni: 12345412
    },
    {
        nombre: "Gonazalo",
        apellido: "Tarable",
        edad: 20,
        dni: 123123678
    }
]

function mostrarFamilia(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("Hola, mi nombre es " + array[i].nombre + " " + array[i].apellido + " y tengo " + array[i].edad + " años. Mi DNI es:  " + array[i].dni + ".");
    }
}

mostrarFamilia(familia);

Ejercicio9
// Dado un array de 10 números, realizar un programa que recorra el array y solo muestre los números impares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function numerosImpares(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            console.log(array[i]);
        }
    }
}

numerosImpares(numeros);

Ejercicio10
// Realizar un programa que permita la entrada de números y calcule la suma de los números pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el usuario ingresa un 0.

let nros = []
let n1 = 0;

do {
    n1 = prompt("Ingrese un numero");
    nros.push(n1);
} while (n1 != 0)

function sumEvenAndOdds(array) {

    let even = 0;
    let odd = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            even = even + parseInt(array[i]);
        }
        else {
            odd = odd + parseInt(array[i]);
        }
    }

    console.log("La suma de los numeros pares es: " + even);
    console.log("La suma de los numeros impares es: " + odd);

}

sumEvenAndOdds(nros);



Ejercicio11
//Dado un array de 10 números, realizar un programa que imprima por pantalla el número más grande.

let arrayNumeros = [1, 222, 33, 4, 5, 62, 7, 8, 99, 10];

function numeroMasGrande(array) {
    let numeroMayor = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > numeroMayor) {
            numeroMayor = array[i];
        }
    }

    console.log(numeroMayor);
}

numeroMasGrande(arrayNumeros);