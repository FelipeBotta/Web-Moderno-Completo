// Usando a forma literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções Construtoras
function Produto(nome, preco, desc){
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}

const p1 = new Produto("Caneta",7.99,0.15)
const p2 = new Produto("Notebook", 2998.99,0.25)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas){
  return{
    nome,
    salarioBase,
    faltas,
    getSalario(){
      return (salarioBase / 30 ) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario("João",2200,5)
const f2 = criarFuncionario("Maria",11400,1)
console.log(f1.getSalario().toFixed(2),f2.getSalario())

//  Object.create
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

//  Uma função que retorna Objeto
const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson.info)