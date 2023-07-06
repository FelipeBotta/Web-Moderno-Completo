  // V e V -> V    // V ou ? -> V // V xor V -> F   // !v -> F
 // V e F -> F   // F ou V -> V  // V xor F -> V    // !f - > V
// F e F -> F  // F ou F -> F   // F xor V -> V
                               // F xor F -> F


function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))