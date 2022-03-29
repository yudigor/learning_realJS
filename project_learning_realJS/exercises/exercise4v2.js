// Criar um medidor de velocidade em que a velocidade máxima é 70
// Sendo que a cada 5km acima do limite voce ganha 1 ponto na carteira
// Use o Math.Floor para arrendondar pra baixo 
// Caso pontos seja maior que 12 => Carteira Suspendida

//SEGUNDA E MELHOR SOLUÇÃO ACHADA PARA O PROBLEMA:

verificarVelocidade( 135 );

function verificarVelocidade( velocidade ){

    const velocidadeMaxima = 70;
    const kmPorPonto = 5;

    if( velocidade <= velocidadeMaxima ){
        console.log('Você está dentro dos limites de velocidade') 
    }
    else{
         let pontos = Math.floor(( velocidade - velocidadeMaxima)  / kmPorPonto );
         if ( pontos > 12 )
            console.log( 'Carteira Suspensa!') 
        else  
            console.log( 'Voce tem ', pontos, ' pontos na carteira!' )
    }
};