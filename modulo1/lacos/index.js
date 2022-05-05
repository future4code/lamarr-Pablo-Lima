//exercicio de escrita de codico

// exercicio 1

/*let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
a) ele vai imprimir de 0 a 4 no console*/

//exercicio 2

/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
a)todos os numeros maiores que 18
b)if (numero<lista.length)*/

//exercicio 3

/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
a)vai ser imprimido 4 asteriscos*/

//exercicio de escrita de codico

// exercicio 1

let numeroDePets = Number(prompt('quantos pets vc tem?'))
let arrayNomePet = []

if (numeroDePets === 0) {
  console.log('que pena! vc pode adotar um pet')
} else {
  for (i = 0; i < numeroDePets; i++) {
    let nomePets = prompt('qual o nome de seu pet? um por vez')
    arrayNomePet.push(nomePets)
  }
  console.log(arrayNomePet)
}

//exercicio 2

let arrayOriginal = [22, 34, 40, 60, 54, 44, 21]

function imprimirOsValores(array) {
  for (let i = 0; i < array.length; i++) {
    let numerosArray = array[i]

    console.log(numerosArray)
  }
}
imprimirOsValores(arrayOriginal)

function divisaoArray(array) {
  for (let i = 0; i < array.length; i++) {
    let divisaoNum = array[i] / 10

    console.log(divisaoNum)
  }
}
divisaoArray(arrayOriginal)
