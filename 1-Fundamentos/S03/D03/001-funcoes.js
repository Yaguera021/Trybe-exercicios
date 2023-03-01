let saldo = 21;

function soma(valor) {
    return valor + saldo;
}

function subtracao(valor) {
    return saldo - valor;
} 

function multiplicacao(valor) {
    return saldo * valor ;
}

function divisao(valor) {
    return saldo/valor;
}

console.log(soma(100));
console.log(subtracao(11));
console.log(multiplicacao(10));
console.log(divisao(21));