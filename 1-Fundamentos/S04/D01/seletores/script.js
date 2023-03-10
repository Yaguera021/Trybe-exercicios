document.getElementById('header-container').style.backgroundColor = 'green'

const header3 = document.getElementsByTagName('h3');
for(let index = 0; index < header3.length; index += 1) {
    header3[index].style.backgroundColor = 'purple';
}
const header2 = document.getElementsByTagName('h2');
for(let index = 0; index < header2.length; index += 1) {
    header2[index].style.backgroundColor = 'black';
    header2[index].style.fontSize = '19px'
}
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'orange'
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'yellow'

document.getElementById('footer-container').style.backgroundColor = 'darkgreen'
document.getElementById('footer-container').style.marginTop = '320px'
