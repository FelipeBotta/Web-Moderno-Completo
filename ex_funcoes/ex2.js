function triangulo(a,b,c){
  if (a == b && b == c){
    console.log("Triangulo Equilátero")
  } else if (a == b || b == c || a == c) {
    console.log("Triangulo Isóceles")
  } else{
    console.log("Tirangulo Escaleno")
  }
}

const teste = triangulo(2,2,2)

