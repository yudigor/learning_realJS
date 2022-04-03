// Exercício média nota escolar
// Obter a nota baseado na média de notas de uma array

// 0-59: E
// 60-69: D 
// 70-79: C 
// 80-89: D 
// 90-100: A

// CODE FIXED BUT NOT VERY OPTIMIZED

const notas = [ 67, 75, 80];

console.log (mediaDoAluno(notas));

function mediaDoAluno(notas){

    let media = 0;
    media = ( notas[ 0 ] + notas[ 1 ] + notas[ 2 ] )  / 3
    console.log(media);
    
    switch (media < 59) {
        case true:
            return 'A sua média é: E'
            break;

        case false:
            switch (media < 69){
            
            case true:
                return 'A sua média é: D'
                break;

            case false:
                switch(media < 79){
                    case true:    
                    return 'A sua média é: C'
                    break;

                    case false:
                        switch(media < 89){
                            case true:
                                return 'A sua média é: B'
                                break;

                            case false:
                                return 'A sua média é: A'
                                break;

                        }
            
            }
        
        }

    };


};
 