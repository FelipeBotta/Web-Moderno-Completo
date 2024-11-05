// Object.preventExtensions (é possivel alterar e excluir)
const produto = Object.preventExtensions({
  nome: "Qualquer", preco: 1.99, tag: 'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = "Borracha"
produto.descricao = "Borracha escolar"
delete produto.tag
console.log(produto)

// Object.seal (é possivel apenas modificar)
const pessoa = {nome: "Juliana", idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = "Silva"
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze (faz o mesmo que o seal e os valores são constantes, ou seja, não é possível modificar)