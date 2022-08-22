# Programação Funcional - _Curso Conceitual_

- Apresentação do paradigma
- Conceitos fundamentais
- Javascript

**Porque Javascript como linguagem?**

- Linguagem da web
- Multiparadigma
- Foco no entendimento do paradigma

## O que é Programação Funcional?

`É um paradigma de programação como a Orientação a Objeto`

> **Funções**

- Pequenas tarefas dentro de uma função
- Abstrair um problema e isolar ele dentro da função
- Não modificar dados fora dela
- Pequenas e bem específicas no que fazem

## Princípios

PARADIGMA

- programação imperativa
- programação declarativa

DADOS

- imutabilidade
- statelles

FUNÇÕES

- independentes
- puras
- higher-order
- first-class
- composição

> Programação Imperativa
<!-- Faça da seguinte forma -->

```js
let number = 2

function addition() {
    return number + number
}

number = addition() // 4
```

> Programação Declarativa
<!-- O que fazer e não como fazer -->

```js
const sum = (n) => n + n

sum(2) // 4
```

## Imutabilidade

- **uma variável não vai variar**
- **se você precisar mudar uma variável, você não muda, você cria uma nova**

```js
// Exemplo de imutabilidade em função
let person = {
    name: 'Paulo',
    age: 26,
}

function changeData(name, age) {
    let rest = {
        ...person,
        name: name,
        age: age
    }

    return rest
}

console.log(changeData(person.name = 'Renan', person.age = 14)) 
// Os dados do primeiro objeto são mantidos, e um segundo objeto é criado com as mesmas props e novos dados

// exemplo no React
const [amount, setAmount] = useState(0)

//amount = 0
setAmount(2)
```

## FUNÇÕES - **características das funções na programação funcional**

[x] funções independentes
[x] funções puras
[x] first-class function
[x] higher-order - function
[x] composição de funções

> Funções independentes

🛠 deve ter ao menos _um argumento_ passado

🛠 deverá retornar algo

🛠 nada que acontece dentro da função afeta o mundo externo: dados imutáveis/não guarda estado

🛠 não faz uso de métodos em loops

```js
const random = (number, MATH) => {
    MATH.floor(MATH.random() * number)
}

// recursiva
const factorial = (x) => {
    if(x === 0) {
        return 1
    }

    return x * factorial(x - 1) // 4*3*2*1 = 24
}

factorial(4) // resultado 24
```

> Funções Puras

🛠 não deverá _depender de nenhum dado externo_ a não ser o que for passsado como argumanto

🛠 não deverá sofrer _nenhuma interferência_ do mundo externo a ela

🛠 não terá _nenhum efeito colateral_ no seu código: Não irá modificar nenhum dado/não irá guardar nenhum estado

```js
// FUNÇÃO IMPURA
// Exemplo 1. está dependendo de dado externo que não foi passado como parâmetro
function calculateCircunference(radius) {
    return MATH.PI * (radius + redius)
}

// Exemplo 2. está alterando um dado externo (isso não pode acontecer)
const person = {
    name: 'John'
    age: 36,
}
// este tipo de função impura não pode acontecer
function changeName(name) {
    return person.name = name
}

// FUNÇÃO PURA
// Exemplo 1.
function calculateCircunference(pi, radius) { // 
    return pi * (redius + radius) // os dois argumentos são passados para que haja os dois parâ metros
}

// com arrow function
const calcultaCircunference = (pi, radius) => {
    return pi * (redius + radius)
}

// Exemplo 2. 
const person = {
    name: 'John'
    age: 36,
}

function changeName(person, name) {
    return ({...person, name})
}
```

### First Class Function

- Podem estar em qualquer lugar, inclusive como parâmentro de outras funções
- A função poderá ser entendida como uma variável

```js
const sayMyName = () => console.log('Hey Paulo')
const runFunction = (fn) => fn()

runFunction(sayMyName) // Hey Paulo
```

## Function Higher-order

🛠 Funções que recebem funções como argumentos

🛠 Funções que poderão retornar outra função

<!-Exemplo com .map() JS-!>

```js
const numbers = [2, 4, 8, 12]
const multiplyNumbers = (x) => x * x

const getMultiplication = numbers.map(multiplyNumbers)
```

## Composição de funções

🛠 Um encadeamento de funções

🛠 Uma função que retorna um dado e vai para outra função, que retorna um dado e e vai para outra função, e retorna...

```js
// Exemplo:
const persons = ['Paulo', 'Rayanne', 'Reinaldo', 'Franciele']

const upperCasePeopleThatStartsWithR = persons.filter(person => person.startsWith('R'))
.map(rperson => rperson.toUpperCase()) // result => 'RAYANNE, REINALDO'
```
