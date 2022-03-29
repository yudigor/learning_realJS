// Elabore uma função que receba uma quantidade de valores para avaliar
// e exiba se cada valor é impar ou par

exibirTipo( 100 );

function exibirTipo( limite) {
 
    for ( let i = 1; i <= limite; i++ ) {
        
        if( i %2 == 0 ){
            console.log( i, 'é par' )
        }
        else{
            console.log( i, 'é impar')
        } 
    }   
}