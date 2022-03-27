// Dois tipos de funções podem ser feitas

//As que realizam uma tarefam e não devolvem nada:

function dizerNome(){
    console.log('Yudelas');
};

dizerNome(); 

//E as que recebem uma informação, fazem um calculo ou operação e retornam algo:

function multiplicarPorDois(valor){
    return valor* 2;
};

let resultado = multiplicarPorDois(5);

console.log(resultado);
