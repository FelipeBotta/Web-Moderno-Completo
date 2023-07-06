const funcs = [];

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
};

funcs[2]();

funcs[8]();

// pelo fato de let ter escopo de bloco ele cria a memoria dos valores que estão dentro do array, assim imprimindo os valores apontados diferentemente do var