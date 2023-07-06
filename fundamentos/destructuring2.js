// Desestruturando array

const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9 ,8];
console.log(n1,n3,n5,n6); // o N1 recebeu o valor 10, o n3 o valor de 9 o n5 não teve numero definido pois só haviam 4 numeros declarados e o n6 recebeu o 0 dentro da declaração.

const [,[, nota]] = [[, 8,8], [9,6,8]]
console.log(nota); // nota é o segundo elemento do segundo array, visto que teve a virgula que ignorou o primeiro elemento do segundo array, por isso retorna o 6.