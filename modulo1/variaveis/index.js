//Exercícios de interpretação de código
/*let a = 10
let b = 10

console.log(10)

b = 5
console.log(10,5)


let a = 10
let b = 20
c = a
b = c10
a = b

console.log(10, 10, 10)

let p = prompt("8")
let t = prompt("70")
alert(`Voce recebe ${t/p} por hora`)*/
const nome = prompt('qual seu nome')
const idade = prompt('qual sua idade')

console.log('ola', nome, 'vc tem', idade)

const jogaNoPc = prompt('vc joga no pc?SIM ou NAO')

const gostaDeAnime = prompt('vc gosta de animes? SIM ou NAO')

const fazEsportes = prompt('vc faz esportes? SIM ou NAO')

console.log(
  'vc joga?',
  jogaNoPc,
  'gosta de animes?',
  gostaDeAnime,
  'pratica esportes?',
  fazEsportes
)

let a = 10
let b = 25

c = a
a = b
b = c
console.log('o novo valor de A eh', a)
console.log('o novo valor de B eh', b)
console.log('e o valor de C eh', c)
