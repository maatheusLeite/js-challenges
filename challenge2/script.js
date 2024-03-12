// WRITE A FUNCTION THAT RECEIVES A NUMBER AND RETURNS 
// AN EQUIVALENT AMOUNT OF "chunks" SEPARATED BY A 
// DASH "-" WITHOUT USING ANY REPETITION STRUCTURES 
// (while, doWhile, for, etc).

// ESCREVA UMA FUNÇÃO QUE RECEBE UM NÚMERO E RETORNA 
// UMA QUANTIDADE EQUIVALENTE DE "chunks" SEPARADOS 
// POR UM TRAÇO "-" SEM UTILIZAR NENHUMA ESTRUTURA 
// DE REPETIÇÃO (while, doWhile, for, etc).

function getEquivalentChunks(quantity) {
    if (quantity === 0) {
        return 'Empty'
    }
    if (quantity === 1) {
        return 'chunk'
    }
    else {
        return 'chunk-' + getEquivalentChunks(quantity - 1)
    }
}

console.log(getEquivalentChunks(4))
console.log(getEquivalentChunks(1))
console.log(getEquivalentChunks(8))
console.log(getEquivalentChunks(2))
console.log(getEquivalentChunks(0))
