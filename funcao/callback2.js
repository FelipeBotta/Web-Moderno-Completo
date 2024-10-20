const notas = [7.7,7.5,6.2,4.0,9.9,3.6,4.2]

// Sem usar o callback

let notasBaixas = []
for (let i in notas){
  if (notas[i] < 7){
    notasBaixas.push(notas[i])
  }
}

console.log(notasBaixas)

// Usando callback
const notasBaixas2 = notas.filter(function (nota){
  return nota <=7 
})

console.log(notasBaixas2)

// Usando callback e arrow function
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

// Usando callback e arrow function
const notaMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notaMenorQue7)
console.log(notasBaixas4)