const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // quando selecionamos um valor que não existe ele retorna como vazio

valores[4] = 10; // forma incorreta de adicionar um valor ao array
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, "teste"); // push permite incluir novos valores ao array
console.log(valores)

console.log(valores.pop()); // pop é utilizado para deletar um valor do array
delete valores [0]; // delete também é uma forma de deletar valor do array
console.log(valores);

console.log(typeof valores); // array é considerado um  