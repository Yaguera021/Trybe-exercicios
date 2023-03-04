// 1 //

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('Bem vinda, ' + info.personagem + '!');

// ------------------------ //
// 2 //

info['recorrente'] = 'Sim'

// ----------------------- //
// 3 //

for(let key in info) {
    console.log(key); 
}

// ----------------------- //
// 4 //

for(let value in info) {
    console.log(info[value]);
}

// ----------------------- //
// 5 //

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}
console.log(info2);