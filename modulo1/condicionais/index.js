//exercicio de codicos
/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
a)ele ve se o numero e multiplo de 2 
b) quando e multiplo de 2 
c) para quando nao e multiplo de 2



let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

A)para o usuario escolher algum dos itens citados a cima
b)o nome maca e o preco dele serao impresos no log
c)o preco iria trocar para 5 ao inves de 5,5



const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
a)esta pedindo para o usuario escolher um numero
b)caso o usuario digite 10 o resultado seria positivo, se for -10 nao iria imprimir nada 
c)sim por que o ultimo log esta fora das chaves*/

//exercicio de escrita de codico

//exercicio 1

let idadeU = Number(prompt('digite sua idade'))

if (idadeU >= 18) {
  console.log('Parabens vc pode dirigir')
} else {
  console.log('infelizmente vc nao pode dirigir tente outro ano')
}

//exercicio 2

/*let horarioDeEstudo = prompt('em qual turno vc estuda? M|V|N')

if (horarioDeEstudo === 'M') {
  console.log('Bom dia')
}
if (horarioDeEstudo === 'V') {
  console.log('Boa tarde')
}

if (horarioDeEstudo === 'N') {
  console.log('Boa noite ')
}*/

//exercicio 3

let horarioDeEstudo = prompt('em qual turno vc estuda? M|V|N')
switch (horarioDeEstudo) {
  case 'M':
    console.log('Bom dia')

    break
  case 'V':
    console.log('Boa tarde')
    break
  case 'N':
    console.log('boa noite')
    break
  default:
    console.log('nao estuda nao amigo?')
    break
}

let generoFilme = prompt('escolha o genero de filme')
let precoDoFilme = prompt('qual o preco do filme?')

if (generoFilme === 'fantasia' && precoDoFilme < '15') {
  console.log('bom filme')
} else {
  console.log('escolha outro filme')
}
