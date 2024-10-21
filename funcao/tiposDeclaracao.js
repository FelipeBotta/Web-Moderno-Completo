console.log(soma(3,4)) // Function declaration consegue ser lido antes mesmo de chegar na linha onde ele foi declarado, outras declarações não irá reconhecer antes de ser declarado

// Function declaration
function soma(x,y){
  return x + y
}

// Function expression
const sub = function(x,y){
  return x - y
}

// Named function expression (pouco usada)
const mult = function mult(x,y){
  return x * y
}

// 

