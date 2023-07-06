let num1 = 1;
let num2 = 2;

num1++; // pos fixado
console.log(num1);
--num1; // pre fixado
console.log(num1);

console.log(++num1 === num2--); //sera true pois o numero um teve um incremento antes da comparação e o decremento do num2 é apos a comparação
console.log(num1 === num2); //agora já é false pois na linha de cima ele adiciona e subtrai, agora eles já estão com os respectivos valores após as alterações

