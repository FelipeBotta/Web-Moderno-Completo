// funcao sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2,3);

// imprimirSoma(2); Irá retornar NaN pois não houve o segundo item para executar
// imprimirSoma(2, 20, 4, 5, 6, 7, 8); Quando inserido mais criterios do que os solicitados pela função, ela ira somar os dois primeiros e ignorar todo o resto
// imprimirSoma(); Irá retornar um NaN pois não haverá números para somar

// funcao com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2,3));
console.log(soma(1)); // não da erro pois definimos um valor padrão para o segundo, que pode ser alterado durante a soma ou podemos utilizar apenas 1 numero para somar ao definido