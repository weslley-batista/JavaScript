const calcular = document.getElementById('calcular'); // pegar os elementos do input HTML

function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){

        const resultImc = (peso / (altura*altura)).toFixed(2); //toFixed limita as casas decimais
        //resultado.textContent = resultImc;

        let classificacao = '';
        if(resultImc < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (resultImc < 25){
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (resultImc <30){
            classificacao = 'levemente acima do peso.';
        }else if(resultImc < 35){
            classificacao = 'com obesidade grau I.';
        }else if (resultImc < 40){
            classificacao = 'com obesidade grau II';
        }else{
            classificacao = 'com obesidade grau III. Cuidado!!';
        }
        resultado.textContent = `${nome} seu IMC é ${resultImc} e você está ${classificacao}`;
    }
    else{
        resultado.textContent = 'É necessario preencher todos os campos'; // escrever dentro do elemento HTML
    }
}
calcular.addEventListener('click', imc);