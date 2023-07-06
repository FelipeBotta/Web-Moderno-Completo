// par nome/valor

const saudacao = "opa"; // contexto léxico 1

function exec(){
    const saudacao = "Fala" // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: "Rua X",
        numero: 123 
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);


// Neste caso se tentassemos redeclarar a saudação daria erro pois é uma constante, se fosse var ele reatribuiria com o último valor recebio, mais um ponto para optar por const ou let e não var