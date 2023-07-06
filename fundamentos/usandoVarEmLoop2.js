const funcs = [];

for (var i = 0 ; i < 10 ; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// o var por não ter escopo de função imprime duas vezes o último valor indepente de termos solicitados o item da posição 2 e 8