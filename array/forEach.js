// Parametros para o ForEach Nome, Indice e Array (todos opcionais) *sempre feito nesta sequencia
const aprovados = ['Agata','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome, indice) {
  console.log(`${indice + 1}) ${nome} `)
} )

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)