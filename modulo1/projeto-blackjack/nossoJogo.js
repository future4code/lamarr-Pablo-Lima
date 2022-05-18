/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log('boas vindas ao jogo de Blackjack!')

if (confirm('quer iniciar uma nova rodada?')) {
  let cartaUsu1 = comprarCarta()
  let cartaUsu2 = comprarCarta()
  let cartaPc1 = comprarCarta()
  let cartaPc2 = comprarCarta()
  let somaUsu = cartaUsu1.valor + cartaUsu2.valor
  let somaPc = cartaPc1.valor + cartaPc2.valor
  console.log(
    'usuario - cartas:',
    cartaUsu1.texto,
    '+',
    cartaUsu2.texto,
    '-',
    'pontuacao',
    somaUsu
  )
  console.log(
    'computador - cartas:',
    cartaPc1.texto,
    '+',
    cartaPc2.texto,
    '-',
    'pontuacao',
    somaPc
  )
  if (somaUsu > somaPc) {
    console.log('o usuario ganhou!')
  }
  if (somaPc > somaUsu) {
    console.log('o computador ganhou!')
  }
  if (somaUsu === somaPc) {
    console.log('empate!')
  }
} else {
  console.log('o jogo acabou')
}
