// armazenando uma função em uma variavel

const imprimirSoma = function (a,b){
    console.log(a + b)
}

imprimirSoma(2,3);

// armazenando uma função arrow em uma variavel

const soma = (a,b) => {
    return a+b
}

console.log(soma(1,6));

// retorno implicito

const subtracao = (a,b) => a - b;

console.log(subtracao(1,3))

const imprimir2 = a => console.log(a);

imprimir2("Arrow Function é show !")