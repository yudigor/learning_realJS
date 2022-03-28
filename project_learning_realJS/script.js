// Switch Case
// Digamos que queiramos definir permissões para cargos diferentes 

let permissao = 'diretor';

switch (permissao){
    case ('comum'):
    console.log("Usuário Comum");
    break;

    case ('gerente'):
    console.log("Gerente");
    break;

    case ('diretor'):
    console.log("Diretor");
    break;

default:
    console.log('Usuário não reconhecido!')

};

