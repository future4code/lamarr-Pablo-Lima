// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  const alturaR = Number(prompt('insira a altura'))
  const larguraR = Number(prompt('insira a largura'))

  areaDoTriangulo = alturaR * larguraR

  console.log(areaDoTriangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  let atual = Number(prompt('digite o ano atual'))
  let nascimento = Number(prompt('digite seu ano de nascimento'))
  let idadeUsuario = atual - nascimento
  console.log(idadeUsuario)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return (imc = peso / (altura * altura))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nomeUsuario = prompt('qual seu nome?')
  let idadeUsuario = prompt('qual sua idade?')
  let emailUsuario = prompt('qual seu email?')

  console.log(
    `Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`
  )
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let corUm = prompt('digite uma cor')
  let corDois = prompt('digite outra cor')
  let corTres = prompt('digite uma ultima cor')

  let cores = [corUm, corDois, corTres]
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.includes === string2.includes
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}
