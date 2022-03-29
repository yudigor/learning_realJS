// Criar um medidor de velocidade em que a velocidade máxima é 70
// Sendo que a cada 5km acima do limite voce ganha 1 ponto na carteira
// Use o Math.Floor para arrendondar pra baixo
// Caso pontos seja maior que 12 => Carteira Suspendida

// PRIMEIRA SOLUÇÃO E MENOS OTIMIZADA:

var resultado = verificarVelocidade( 75 );
var pontos = 0 ;

function verificarVelocidade( velocidade ){

    switch ( velocidade ) {
        case (  velocidade <= 70 ):
            return 'Você está dentro dos limites de velocidade'
            break;

        case ( velocidade = 75):
            pontos++
            return 'Voce levou 1 ponto na carteira'
            break;

        case ( velocidade = 80):
            pontos = 2
            return 'Voce levou 2 pontos na carteira'
            break;
        
        case ( velocidade = 85):
            pontos = 3
            return 'Voce levou 3 pontos na carteira'
            break;
        
        case ( velocidade = 90):
            pontos = 4
            return 'Voce levou 4 pontos na carteira'
            break;
                        
        case ( velocidade = 95):
            pontos = 5
            return 'Voce levou 5 pontos na carteira'
            break;
        
        case ( velocidade = 100):
            pontos = 6
            return 'Voce levou 6 pontos na carteira'
            break;

        case ( velocidade = 105):
            pontos = 7
            return 'Voce levou 7 pontos na carteira'
            break;

        case ( velocidade = 110):
            pontos = 8
            return 'Voce levou 8 pontos na carteira'
            break;
        case ( velocidade = 115):
            pontos = 9
            return 'Voce levou 9 pontos na carteira'
            break;

        case ( velocidade = 120):
            pontos = 10
            return 'Voce levou 10 pontos na carteira'
            break;

        case ( velocidade = 125):
            pontos = 11
            return 'Voce levou 11 pontos na carteira'
            break;
        
        case ( velocidade = 130):
            pontos = 12
            return 'Voce levou 12 pontos na carteira'
            break;
        case ( velocidade = 135):
            pontos = 13
            return 'Sua carteira foi suspensa'
            break;
        default:
            break;
    }
};
console.log(resultado)