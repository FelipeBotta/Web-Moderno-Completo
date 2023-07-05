const escola = "Cod3r";

console.log(escola.charAt(4)); // charAt é utilizado para indicar determinado caracter dentro da posição indicada

console.log(escola.charAt(5)); // nesse exeplo o 5 não existe, ao invés de apresentar erro ele devolveu vazio " "

console.log(escola.charCodeAt(3)); // charCodeAt faz com que busque a posição do caracter mencionado dentro da tabela Unicode

console.log(escola.indexOf('3')); // retorna a posição do caractere que você indicou

console.log(escola.substring(1)); // retorna a string a partir do incide indicado, nesse exemplo referenciando 1 ele imprime a partir da segunda letra (pois a primeira é 0)

console.log(escola.substring(0,3)); // semelhante ao de cima, porém como utiliza 2 parametros imprime a partir do primeiro até o segundo indicado

console.log("Escola ".concat(escola).concat(" !")); // concat serve para concatenar strings (ou seja junta-las)

console.log(escola.replace(3, "e")); // replace utilizado para substituir o caractere sendo o primeiro parametro o escolhido para ser substituido pelo segundo

