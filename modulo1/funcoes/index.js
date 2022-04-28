//interpretacao de codigo
/*function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a)2*5=10
b)10*5=50


let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
1)eu gosto de cenoura
2)cenoura e bom pra vista 
3)cenouras crescem na terra*/

function apresentacao() {
  'meu nome e pablo tenho 18 anos e moro em joiville'
}

let nomeUsuario = prompt('qual seu nome?')
let idadeUsuario = prompt('qual sua idade?')
let local = prompt('onde vc mora?')

function apresentarUsuario(nome, idade, local) {
  console.log('eu sou ' + nome + ' tenho ' + idade + ' e moro em ' + local)
}
apresentarUsuario(nomeUsuario, idadeUsuario, local)

let numUsuario = Number(prompt('digite um numero'))
let numUsuarioDois = Number(prompt('digite outro numero'))

function somar(num1, num2) {
  let somaDosNum = num1 + num2
  console.log(somaDosNum)
}
somar(numUsuario, numUsuarioDois)

let iguaisMaior = Number(prompt('digite algum numero'))
let iguaisMaiorDois = Number(prompt('digite novamente outro numero'))

function igualOuNao(numeroUm, NumeroDois) {
  let MaiorOuIgual = numeroUm >= NumeroDois

  console.log(MaiorOuIgual)
}
igualOuNao(iguaisMaior, iguaisMaiorDois)
