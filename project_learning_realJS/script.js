// // Operador Lógico e (&&)
// //Retorna TRUE somente se os dois operandos forem TRUE

// console.log(false && true);

// let maiorDeIdade = true;
// let possuiCarteiraDeMotorista = false;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeMotorista;

// console.log(podeAplicar);


// // Operador Lógico ou (||)
//Retorna TRUE se um dos operandos já forem TRUE

// let maiorDeIdade = true;
// let possuiCarteiraDeMotorista = false;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeMotorista;

// console.log(podeAplicar);

// // Operador NOT (!)

let maiorDeIdade = true;
let possuiCarteiraDeMotorista = false;
let podeAplicar = maiorDeIdade && possuiCarteiraDeMotorista;

console.log("Candidato Aprovado: ", podeAplicar);

let candidatoRecusado = !podeAplicar;

console.log("Candidato Recusado: ", candidatoRecusado);

