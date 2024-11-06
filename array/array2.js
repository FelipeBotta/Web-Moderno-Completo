const pilotos = ['Vettel', 'Alonso', 'Bottas', 'Massa']
pilotos.pop()  // Remove o último elemento do Array
console.log(pilotos)

pilotos.push('Verstappen') // Inclui na última posição do Array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do Array
console.log(pilotos)

pilotos.unshift('Senna') // Inclui na primeira posição do Array
console.log(pilotos)

pilotos.splice(2,0,'Massa', 'Barrichelo') // Incluindo elementos no Array
console.log(pilotos)

pilotos.splice(3,1) // Removendo elemento do Array
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo Array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // Novo Array (ignora o último indice indicado, trazendo até o anterior a ele)
console.log(algunsPilotos2)