// Comparações não booleanas existem dois tipos:

// Falsy que são:

// undefined
// null0
// false
// ''
// NaN

// Truthy são todos os outros resultados

let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);