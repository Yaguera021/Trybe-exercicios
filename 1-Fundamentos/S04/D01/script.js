document.getElementById('page-title').innerText = 'Mar em fúria';
document.getElementById('second-paragraph').innerText = 'Alterando'
document.getElementById('subtitle').innerText = 'Dominando O Mal'
const paragraph = document.getElementById('paragraph');
paragraph.style.color = 'blue';

document.getElementsByClassName('piloto-f1-atual')[0].innerText = 'Stroll' // alterando apenas um elemento da lista, para alterar os demais valores seria utilizado um for, como no exemplo abaixo! //

let pilotosF1Atual = document.getElementsByClassName('piloto-f1-atual');
for(let index = 0; index < pilotosF1Atual.length; index += 1) {
    pilotosF1Atual[index].innerText = 'XABLAUZADA'
} // com loop nesse caso, vamos acessar todos os <p> que estão dentro da classe piloto-f1-atual e substituir por XABLAU//


document.getElementsByClassName('igual')[0].style.color = 'green'
document.getElementsByClassName('igual')[1].style.color = 'blue'


const subtitle = document.getElementsByTagName('h4')[0];
subtitle.style.color = 'purple'; // getElementsByTagName ON YOUR FACE BITCHES//
// dica do Lucas, o que é importante ter em mente: "-O getElementsByTagName vai servir pra gente quando quisermos alterar propriedades ou buscar o conteúdo de tudo que tiver uma mesma tag => <p> <div> <h1> <h3> " 

