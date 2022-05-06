//exercicio de interpretacao de codico

//exercicio 1

/*const usuarios = [
  { nome: 'Amanda Rangel', apelido: 'Mandi' },
  { nome: 'Laís Petra', apelido: 'Laura' },
  { nome: 'Letícia Chijo', apelido: 'Chijo' }
]

const novoArrayA = usuarios.map((item, index, array) => {
  console.log(item, index, array)
})
a) vai imprimir uma nova array com as informacoes do original*/

//exercicio 2

/*const usuarios = [
  { nome: 'Amanda Rangel', apelido: 'Mandi' },
  { nome: 'Laís Petra', apelido: 'Laura' },
  { nome: 'Letícia Chijo', apelido: 'Chijo' }
]

const novoArrayB = usuarios.map((item, index, array) => {
  return item.nome
})

console.log(novoArrayB)
a) vai imprimir um novo array apenas com o item nome*/

//exercicio 3

/*const usuarios = [
  { nome: 'Amanda Rangel', apelido: 'Mandi' },
  { nome: 'Laís Petra', apelido: 'Laura' },
  { nome: 'Letícia Chijo', apelido: 'Chijo' }
]

const novoArrayC = usuarios.filter((item, index, array) => {
  return item.apelido !== 'Chijo'
})

console.log(novoArrayC)
a) vai retornar tudo que nao tiver a palavra chijo*/

//exercicio de escrita de codico

const pets = [
  { nome: 'Lupin', raca: 'Salsicha' },
  { nome: 'Polly', raca: 'Lhasa Apso' },
  { nome: 'Madame', raca: 'Poodle' },
  { nome: 'Quentinho', raca: 'Salsicha' },
  { nome: 'Fluffy', raca: 'Poodle' },
  { nome: 'Caramelo', raca: 'Vira-lata' }
]

let novoArrNomePets = pets.map((item, index, array) => {
  return item.nome
})
console.log(novoArrNomePets)

let apenasSalsicha = pets.filter((item, index, array) => {
  return item.raca.includes('Salsicha')
})
console.log(apenasSalsicha)

let enviarDesconto = pets
  .filter((item, index, array) => {
    return item.raca.includes('Poodle')
  })
  .map(item => {
    return `voce ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
  })
console.log(enviarDesconto)

//exercicio 2

const produtos = [
  { nome: 'Alface Lavada', categoria: 'Hortifruti', preco: 2.5 },
  { nome: 'Guaraná 2l', categoria: 'Bebidas', preco: 7.8 },
  { nome: 'Veja Multiuso', categoria: 'Limpeza', preco: 12.6 },
  { nome: 'Dúzia de Banana', categoria: 'Hortifruti', preco: 5.7 },
  { nome: 'Leite', categoria: 'Bebidas', preco: 2.99 },
  { nome: 'Cândida', categoria: 'Limpeza', preco: 3.3 },
  { nome: 'Detergente Ypê', categoria: 'Limpeza', preco: 2.2 },
  { nome: 'Vinho Tinto', categoria: 'Bebidas', preco: 55 },
  { nome: 'Berinjela kg', categoria: 'Hortifruti', preco: 8.99 },
  { nome: 'Sabão em Pó Ypê', categoria: 'Limpeza', preco: 10.8 }
]

let produNomes = produtos.map((item, index, array) => {
  return item.nome
})
console.log(produNomes)

let proDescontos = produtos.map(item => {
  return {
    nome: item.nome,
    preço: (item.preco - item.preco / 20).toFixed(2)
  }
})
console.log(proDescontos)

let apenasGole = produtos.filter(item => {
  return item.categoria.includes('Bebidas')
})
console.log(apenasGole)

let apenasYpe = produtos.filter(item => {
  return item.nome.includes('Ypê')
})
console.log(apenasYpe)

let apenasYpeDois = produtos
  .filter(item => {
    return item.nome.includes('Ypê')
  })
  .map(item => {
    return `compre ${item.nome} por ${item.preco}`
  })
console.log(apenasYpeDois)
