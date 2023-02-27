
// Insira um valor para peça de xadrez que esteja no formato string, por exemplo: pecaDeXadrez = 'rei'. //

let pecaDeXadrez;
switch (pecaDeXadrez.toLowerCase()) {
    case 'peao':
        console.log('Na primeira rodada pode avançar duas casas, nas demais, apenas uma. (VERTICAL - 1 CASA )');
        break;
    
    case 'torre':
        console.log('VERTICAL - x casas');
        break;
    
    case 'bispo':
        console.log('DIAGONAL - x casas');
        break;
    
    case 'cavalo':
        console.log('SALTA EM FORMA DE L');
        break;

    case 'rainha':
        console.log('TODAS AS DIREÇÕES - x casas');
        break;

    case 'rei':
        console.log('TODAS DIREÇÕES - 1 Casa ')
        break;
    default: 
    console.log('Erro, peça inválida');            
}   