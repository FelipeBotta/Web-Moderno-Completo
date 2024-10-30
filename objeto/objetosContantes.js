// pessoa -> 123 -> {...}
// Só é possivel apontar algo para uma constante uma única vez
const pessoa = {nome: "João"}
pessoa.nome = "Luis"
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: "Ana"}

Object.freeze(pessoa) // Faz com que nada possa ser alterado no objeto

pessoa.nome = "Maria"
pessoa.endereco = "Rua ABC"

console.log(pessoa)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: "João"})
pessoaConstante.nome = "Maria"
console.log(pessoaConstante)