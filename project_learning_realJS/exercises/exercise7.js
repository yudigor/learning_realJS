// Criar funçao para somar todos os multiplios de 3 e 5 de um número definido

// Ex: 10
// Multiplos de 3: 3, 6, 9
// Multiplos de 5: 5, 10


somar(10);

function somar(limite){

    let tres = 0;
    let cinco = 0;

    for (let i = 1; i <= limite; i++) {
        
        if( i % 3 === 0)
            tres += i;

        if( i % 5 === 0)
            cinco += i;
    }
    console.log(tres+cinco)
}

