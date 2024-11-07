const produtos = [{
  nome: 'Notebook', preco: 2499, fragil: true},
  {nome: 'Ipad Pro', preco: 4199, fragil: true},
  {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
  {nome: 'Copo de Plastico', preco: 18.99, fragil: false}]


const produtoFragil = produto => produto.fragil === true
const produtoCaro = produto => produto.preco >= 500

console.log(produtos.filter(produtoFragil).filter(produtoCaro))

console.log(produtos.filter(function(p){
  return p.fragil === true
}))
