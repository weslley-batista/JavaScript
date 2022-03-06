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
setInterval(carrosel,2000);

/*Carrosel com botoes*/
const images1 = document.getElementById("img-carrosel-botao");
const image1 = document.querySelectorAll("#img-carrosel-botao img");

const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");

function nextImg(){
    idx++;
    if(idx > image1.length-1){
        idx = 0;
    }
    images1.style.transform = `translatex(${-idx * 500}px)`; //muda o eixo X em 500px

}
function previousImg(){
    idx--;
    if(idx < 0){
        idx = image1.length-1;
    }
    images1.style.transform = `translatex(${-idx * 500}px)`; //muda o eixo X em 500px
}
proximo.addEventListener('click', nextImg);
anterior.addEventListener('click',previousImg);