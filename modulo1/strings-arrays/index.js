// exercicio de interpretacao de codigo

/*let array
console.log('a.Faz a variavel poder ser mudada ', array)

array = null
console.log('b.null e quando a array esta vazia sem um tamanho definido ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c.expressa o tamanho do que esta dentro do array ', array.length)

let i = 0
console.log('d. o zero e uma variavel mutavel ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)
Nao consegui fazer as ultimas duas*/

/*const frase = prompt("Subi num ônibus em Marrocos")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
Colocara a frase em letras maiusculas e mudara os A por I*/

//exercicio de escrita de codigo

let emailUsuario = prompt('digite seu email')

console.log(
  `o email ${emailUsuario} foi cadastrado com sucesso.Seja bem vindo ${emailUsuario}`
)

let comidasPref = [
  'batata frita',
  'lasanha',
  'macarronada',
  'hamburguer',
  'estrogonoff'
]

console.log(comidasPref)
console.log('essas sao minhas comidas preferidas')
console.log(comidasPref[0])
console.log(comidasPref[1])
console.log(comidasPref[2])
console.log(comidasPref[3])
console.log(comidasPref[4])

let listaDeTarefaz = []
let tarefaUm = prompt('que tarefa vc realiza durante a manha?')
let tarefaDois = prompt('que tarefa vc realiza durante a tarde?')
let tarefaTres = prompt('que tarefa vc realiza durante a noite?')
listaDeTarefaz.push(tarefaUm)
listaDeTarefaz.push(tarefaDois)
listaDeTarefaz.push(tarefaTres)
console.log(listaDeTarefaz)
let apagarUmaTarefa = Number(prompt('digite um numero de 1 a 3'))
listaDeTarefaz.splice(apagarUmaTarefa - 1, 1)
console.log(listaDeTarefaz)
