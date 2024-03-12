// WRITE A FUNCTION THAT RECEIVES ANY NUMBER OF 
// INTEGER NUMBERS AS ARGUMENTS AND RETURNS THE 
// ARITHIMETIC AVERAGE BETWEEN THEM.

// ESCREVA UMA FUNÇÃO QUE RECEBE UM NÚMERO QUALQUER 
// DE NÚMEROS INTEIROS COMO ARGUMENTOS E RETORNE A 
// MÉDIA ARITIMÉTICA ENTRE ELES.

function calcArithmeticMean(...numbers) {
    const initialValue = 0
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
    const arithmeticMean = sum / numbers.length
    return arithmeticMean
}

console.log(calcArithmeticMean(10, 9, 6, 8, 9, 1, 5, 7))
console.log(calcArithmeticMean(2, 5, 7, 1, -2))
console.log(calcArithmeticMean(10, 10, 10, 10, 9))
console.log(calcArithmeticMean(25, 75))