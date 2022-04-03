// Exercício média nota escolar
// Obter a nota baseado na média de notas de uma array

// 0-59: E
// 60-69: D 
// 70-79: C 
// 80-89: D 
// 90-100: A

//CODE FIXED AND OPTIMIZED

const array = [ 67, 75, 80];

mediaDoAluno(array);

function mediaDoAluno(notas){
    const media = calcularMedia(notas);

    if (media < 59) console.log('A sua média é: E');
    else if (media < 69) console.log('A sua média é: D');
    else if(media < 79) console.log('A sua média é: C');
    else if(media < 89) console.log('A sua média é: B');
    else console.log('A sua média é: A');
};

function calcularMedia(array){

    return (array[0] +array[1] +array[2])/array.length;
}
 