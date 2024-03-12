// WRITE A FUNCTION THAT RECEIVES AN ARRAY AND RETURNS 
// A NEW ARRAY WITH ALL POSITIONS REVERSED FROM THE 
// ORIGINAL WITHOUT CHANGING IT. DO NOT USE JAVASCRIPT 
// GLOBAL ARRAY OBJECT METHODS (reverse, map, forEach, etc.).

// ESCREVA UMA FUNÇÃO QUE RECEBE UM ARRAY E RETORNE 
// UM NOVO ARRAY COM TODAS AS POSIÇÕES INVERTIDAS 
// DO ORIGINAL SEM ALTERÁ-LO. NÃO UTILIZE OS 
// MÉTODOS DO OBJETO GLOBAL Array DO JAVASCRIPT 
// (reverse, map, forEach, etc).

function reverseArray(array) {
    const reversedArray = []

    for (let i = 0; i < array.length; i++) {
        reversedArray[i] = array[array.length - i - 1]
    }
    return reversedArray
}

const array1 = [0, 9, 6, 8, 9, 1, 5, 7]
const array2 = ['Oh', 'Hi', 'Mark']
const array3 = [false, true, true, true]
const array4 = ["It's", "not", true, 0]

console.log(reverseArray(array1))
console.log(reverseArray(array2))
console.log(reverseArray(array3))
console.log(reverseArray(array4))
