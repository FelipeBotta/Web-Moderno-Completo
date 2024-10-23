function formatarValorDecimal(x){
  console.log(`R$ ${x.toFixed(2).toString().replace(".",",")} `)
}

formatarValorDecimal(0.300000000000004)