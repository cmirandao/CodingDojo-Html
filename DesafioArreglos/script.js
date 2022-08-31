// Escribe una función a la que se le asigne un arreglo, y cada vez que el valor sea "comida" debería mostrar "delicioso"en la consola. Si "comida" no estaba presente en el arreglo, que la consola registre "Tengo hambre" una vez.
function siempreHambriento(arr) {
    var cont=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]=="comida"){
            console.log("delicioso");
            cont++;
        }
    }
    if(cont==0){
        console.log("Tengo hambre");
    }
}
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

// Dado un arreglo y un valor cutoff, devuelve un nuevo arreglo que contenga solo los valores mayores a cutoff.
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var a=0;a<arr.length;a++){
        // si el valor del arreglo es mayor al valor de cutoff, lo agrego al nuevo arreglo
        if(arr[a]>cutoff){
            filteredArr.push(arr[a]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

// Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio.
function betterThanAverage(arr) {
    var sum = 0;
    var count = 0
    for(var b=0;b<arr.length;b++){
        sum+=arr[b];
    }
    // calcula el promedio
    var promedio=sum/arr.length;
    for(var b=0;b<arr.length;b++){
        // cuenta cuántos valores son mayores al promedio
        if(arr[b]>promedio){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

// Escribe una función que invierta los valores de un arreglo y los devuelva.
function reverse(arr) {
    // establece los indices extremos del arreglo
    var valor_menor = 0;
    var valor_mayor = arr.length - 1;
    while(valor_menor < valor_mayor) {
        // guarda en una variable temporal el primer valor del arreglo
        var temp = arr[valor_menor];
        // ahora a ese primer valor del arreglo le reasigna el ultimo valor
        arr[valor_menor] = arr[valor_mayor];
        // y finalmente al ultimo valor le reasigna la variable temporal que contenia el primer valor 
        arr[valor_mayor] = temp;
        valor_menor++;
        valor_mayor--;
    }
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

// Escribe una función que devuelva un arreglo de números de Fibonacci hasta una longitud dada n. Los números de Fibonacci se calculan sumando los dos últimos valores de la secuencia. Entonces, si el cuarto valor es 2 y el quinto valor es 3 entonces el siguiente valor en la secuencia es 5.
function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    var num=0;
    // mientras el largo del arreglo sea menor a la variable recibida en la funcion
    while(fibArr.length < n){
        // sumo el penultimo y el antepenultimo valor del arreglo
        num=fibArr[fibArr.length-1]+fibArr[fibArr.length-2];
        // ingreso la suma al final del arreglo
        fibArr.push(num);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]