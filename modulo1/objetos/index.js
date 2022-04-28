//Exercícios de interpretação de código

/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
a)matheus nachtergaele, virginia cavendish, canal brasil 19h

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
a)cachorro: nome juca, idade 3, raca srd, gato:nome juba, idade 3, srd, tartaruga:nome jubo, idade 3, raca srd
b)expandem o conteudo de arrays

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
a)ele vai imprimir tudo dentro de pessoa e escrever backender sem imprimir o valor dele
b)por que o segundo elemento n deveria possuir aspas*/

//exercicio de escrita de codico

let pessoa1 = {
  nome: 'pablo',
  apelidos: ['ph', 'pabrinhu', 'pablito']
}
function apresentarPessoa() {
  let apresentar = `me chamo ${pessoa1.nome}, mas pode me chamar tbm de: ${pessoa1.apelidos}`
  return apresentar
}
console.log(apresentarPessoa(pessoa1))

let novosApelidos = { ...pessoa1, apelidos: ['pablinho', 'pb', 'pab'] }

console.log(
  `eu sou ${pessoa1.nome}, mas pode me chamar de: ${novosApelidos.apelidos}`
)

let primeiraPessoa = {
  nome: 'carlos',
  idade: 29,
  profissao: 'mecanico'
}

let segundaPessoa = {
  nome: 'alex',
  idade: 30,
  profissao: 'jogador'
}

function minhaFuncao(obj) {
  let informacoes = [
    obj.nome,
    obj.nome.length,
    obj.idade,
    obj.profissao,
    obj.profissao.length
  ]

  return informacoes
}

console.log(minhaFuncao(primeiraPessoa))
console.log(minhaFuncao(segundaPessoa))

const carrinho = []

let frutaUm = {
  nome: 'banana',
  disponibilidade: true
}

let frutaDois = {
  nome: 'maca verde',
  disponibilidade: true
}

let frutaTres = {
  nome: 'kiwi',
  disponibilidade: true
}

function frutasNoCarrinho(objetos) {
  carrinho.push(objetos)
}

frutasNoCarrinho(frutaUm)
frutasNoCarrinho(frutaDois)
frutasNoCarrinho(frutaTres)

console.log(carrinho)
