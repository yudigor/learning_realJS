// Nós temos 5 tipos de laços de repetição:

// 1 - For 
// 2 - While
// 3 - Do..While
// 4 - For..In
// 5 - For..Of

// 4 - For..In

const pessoa = {
    nome: 'Yudelas',
    idade: 20
};

for(let chave in pessoa){
    console.log(chave, pessoa.nome, pessoa.idade);
};

const cores = ['Vermelho', 'Azul', 'Verde'];

for (let indice in cores ){
    console.log(indice, cores[indice])
};