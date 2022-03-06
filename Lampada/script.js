const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lampada = document.getElementById('lampada');


function ligarLampada (){
    lampada.src = './img/ligada.jpg'; // muda a fonte da imagem
}
function desligarLampada (){
    lampada.src = './img/desligada.jpg';
}
function lampadaQuebra(){
    lampada.src = './img/quebrada.jpg';
}
ligar.addEventListener('click', ligarLampada);
desligar.addEventListener('click', desligarLampada);

lampada.addEventListener ('mouseover', ligarLampada);
lampada.addEventListener ('mouseleave', desligarLampada);

lampada.addEventListener ('dblclick', lampadaQuebra); // double click

