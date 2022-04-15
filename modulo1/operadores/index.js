//exercicio de interpretacao

/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a.False ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b.False ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. false", resultado)

console.log("d. ", typeof resultado) (nao entendi)*/

/*let primeiroNumero = prompt('Digite um numero!')
let segundoNumero = prompt('Digite outro numero!')

let soma = parseInt(primeiroNumero) + parseInt(segundoNumero)
console.log(soma)
antes de ser concertado ele estava colocando o primeiro numero do lado do segundo numero*/

//exercicio de escrita de codigo

let idade = prompt('coloque sua idade')
let IdadeMelhorAmigo = prompt('idade de seu melhor amigo')

console.log(
  'sua idade e maior do que a do seu melhor amigo?',
  idade > IdadeMelhorAmigo
)

console.log(parseInt(idade) - parseInt(IdadeMelhorAmigo))

let numeroPar = prompt('coloque um numero par')

console.log('a divisao e igual a', parseInt(numeroPar) / 2)

//se o usuario inserir um numero impar ele sai quebrado

console.log('sua idade em meses e igual a', parseInt(idade) * 48)

console.log('sua idade em dias e', parseInt(idade) * 365)

console.log('sua idade em horas e', parseInt(idade) * 8766)

let primeiroNum = prompt('coloque qualque numero')
let segundoNum = prompt('coloque qualquer numero novamente')

console.log(
  'o primeiro numero e maior que o segundo?',
  primeiroNum > segundoNum
)

console.log('o primeiro numero e igual ao segundo?', primeiroNum === segundoNum)

console.log(
  'o primeiro numero e divisivel pelo segundo?',
  primeiroNum % segundoNum === 0
)

console.log(
  'o segundo numero e divisivel pelo primeiro?',
  segundoNum & (primeiroNum === 0)
)
