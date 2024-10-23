function jurosSimples(capital,tx,t){
  console.log("Montante de R$ " + capital * tx * t)
}

function jurosComposto(capital,tx,t){
  montante = capital * (1+tx) ** t 
  console.log("Montante de R$ " + montante.toFixed(2))
}
jurosSimples(5000,0.1,12)
jurosComposto(5000,0.1,12)