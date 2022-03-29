// Criar um método para ler propriedades de um objeto
// e exibir somente as strings que estão dentro do objeto

const filme = {

    tiltulo : 'Vingadores',
    ano : 2018,
    diretor: 'um cara muito bom',
    personagemFavorito: 'homem aranha'
}

exibirPropriedades( filme );

function exibirPropriedades( obj ){

    for ( prop in obj ){
        if( typeof obj[ prop ] === 'string' )
            console.log( prop, ':', obj[ prop ] )
    }
}