const images = document.getElementById("img");
const image = document.querySelectorAll("#img img");

let idx  = 0;

function carrosel( ){
    idx++;

    if(idx > image.length-1){
        idx = 0;
    }
    
    images.style.transform = `translatex(${-idx * 500}px)`; //muda o eixo X em 500px
};

setInterval(carrosel,1800); 