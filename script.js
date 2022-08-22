console.log('Hello World')

// recursividade
const factorial = (x) => {
    if(x === 0) {
        return 1
    }

    return x * factorial(x - 1)
}

console.log(factorial(4))

// Exemplo de imutabilidade
const adress = {
    city: 'Suzano',
    road: 'Mario Freitas', 
    number: 345
}

const rest = {
    ...adress, 
    city: 'Londres',
    road: 'Oxford Street',
    number: 123
}

const sayMyName = () => console.log('Yes Paulo')
const runFunction = (fn) => fn()

console.log(runFunction(sayMyName))