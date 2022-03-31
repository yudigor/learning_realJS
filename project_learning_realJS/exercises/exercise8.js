// Exercício média nota escolar
// Obter a nota baseado na média de notas de uma array

// 0-59: E
// 60-69: D 
// 70-79: C 
// 80-89: D 
// 90-100: A

//CODE WITH ERROR 

const array = [ 67, 75, 80];

console.log (mediaDoAluno(array));

function mediaDoAluno(notas){

    var media = 0;
    var media = ( notas[ 0 ] + notas[ 1 ] +notas[ 2 ] )  / 3
    
    switch (media) {
        case ( media => 0 && media <= 59 ):
            console.log('A sua média é: E')
            break;

        case ( media => 60 && media <= 69 ):
            console.log('A sua média é: D')
            break;

        case ( media => 70 && media <= 79 ):
            console.log('A sua média é: C')
            break;

        case ( media => 80 && media <= 89 ):
            console.log('A sua média é: B')
            break;

        case ( media => 90 && media <= 100 ):
            console.log('A sua média é: A')
            break;

        default:
            break;
    };


};
 