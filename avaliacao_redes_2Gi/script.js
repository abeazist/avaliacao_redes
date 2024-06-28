// const mascara = document.getElementById('mascara');
// const subrede = document.getElementById('quantSubrede');
// const calcular= document.getElementById('calcular')
// var tabela= document.getElementsByClassName('.tabela')
// var respostas= document.getElementsByClassName('.respostas')
// var voltar= document.getElementById("voltar")
// const limpar = document.getElementById("limpar");
// const mascaraResposta = document.getElementById("mascaraResposta")
// const subRede = document.getElementById('subRede')
// const primeiroEnd = document.getElementById('primeiroEnd')
// const ultimoEnd = document.getElementById('ultimoEnd')

document.getElementById("calcular").addEventListener("click", function() {

    document.getElementById("caixa").style.display = "none";
    document.getElementById("resposta").style.display = "block";
});

document.getElementById("fechar-resposta").addEventListener("click", function() {
    document.getElementById("caixa").style.display = "block";
    document.getElementById("resposta").style.display = "none";
});