// Escreva uma função que usa 2 números ou mais e retorne o maior entre eles

//SOLUÇÃO PROPOSTA 1:

// var valorMaior = max(5, 48);
// console.log( valorMaior);

// function max(valor1, valor2){
//     if(valor1 > valor2)
//         return valor1;
//     return valor2;
// };

//SOLUÇÃO PROPOSTA 2:

// var valorMaior = max(5, 48);
// console.log( valorMaior);

// function max(valor1, valor2){
//     return valor1 > valor2 ? valor1 : valor2;
// };


// MINHA SOLUÇÃO:
// Pesquisando na documentação descobri o novo operador spread (en-US) que é um modo curto
// de se escrever a solução com apply para tornar o maior valor de uma array e resolvi aplicar
// afim de otimizar o código e treinar

var valores = [15, 23, 239, 48];
var max = Math.max(...valores);

console.log(max);