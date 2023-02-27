// defina valores positivos e reais paras as váriaveis custo e valor //

let custo = 10;
let valorDeVenda = 20;

if (custo >= 0 && valorDeVenda >= 0) {
    let totalcusto = custo * 1.2;
    let lucro = (valorDeVenda - totalcusto) * 1000;
    console.log(lucro + 'R$ de lucro!');
} else {
    console.log('Erro, os valores inseridos não podem ser negativos!');
}
