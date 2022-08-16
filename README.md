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

// exemplo no React
const [amount, setAmount] = useState(0)

//amount = 0
setAmount(2)
```
