// // O exercício é para pegar este código e fazer com que azul apareça primeiro que vermelho:

// let a = 'vermelho';
// let b = 'blue';

// console.log(a);
// console.log(b);

//SOLUÇÃO PROPOSTA:

// let a = 'vermelho';
// let b = 'blue';

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);



// MINHA RESOLUÇÃO:
// Fui além e para conseguir fazer isso de forma mais eficaz, tranformei as minhas antes duas variáveis de cor
// em uma array com 4 cores e chamei o método sort() para ordenar de forma alfabética antes de exibir

let cores = ['vermelho', 'azul', 'laranja', 'roxo'];

cores.sort();

console.log(cores);
