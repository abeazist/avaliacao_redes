const mascara = document.getElementById('masc');
const enderecoIP = document.getElementById("ip")
const subrede = document.getElementById('qtdSub');
//essas de cima sao as q eu sei q tao td certo

const calcular = document.getElementById('calcular')
const limpar = document.getElementById("limpar");
const mascaraResposta = document.getElementById("mascaraResposta")
const subRede = document.getElementById('subRede')
const primeiroEnd = document.getElementById('primeiroEnd')
const ultimoEnd = document.getElementById('ultimoEnd')
var tabela = document.getElementsByClassName('.tabela')
var respostas = document.getElementsByClassName('.respostas')
var voltar = document.getElementById("voltar")

///CAIXA RESPOSTA
document.getElementById("calcular").addEventListener("click", function() {
    document.getElementById("caixa").style.display = "none";
    document.getElementById("resposta").style.display = "block";
    descobreMascara()

});

document.getElementById("fechar-resposta").addEventListener("click", function() {
    document.getElementById("caixa").style.display = "block";
    document.getElementById("resposta").style.display = "none";
});

//////////////VALIDAÇOES

enderecoIP.addEventListener('input', () => {
    var formatado = enderecoIP.value.replace(/[^0-9.]/g, '');
    enderecoIP.value = formatado
});

limpar.addEventListener('click', () => {
    enderecoIP.value = '';
    mascara.value = '';
    subrede.value = '';
})

//FUNÇOES
function descobreMascara() {

    const separa = enderecoIP.value.split(".")
    const ip1 = separa.slice(-1) // index 3
    const ip2 = separa.slice(2, 3) //index 2
    const ip3 = separa.slice(1, 2) //index 1
    const ip4 = separa.slice(0, 1) //inedx 0

    const paraString1 = ip1.toString()
    const paraString2 = ip2.toString()
    const paraString3 = ip3.toString()
    const paraString4 = ip4.toString()

    // console.log(paraString1)
    // console.log(paraString2)
    // console.log(paraString3)
    // console.log(paraString4)    

    //mascara
    const mascInicial = (32 - mascara.value);
    const expoente = Math.pow(2, mascInicial)
    const qntEndereco = (expoente / subrede.value)
    const logaritmo = Math.log2(qntEndereco)
    const mascFinal = (32 - logaritmo);
    console.log(`Mascara: ${mascFinal}`)
    const somaEnderecoBloco = (qntEndereco - 1)

    //intervalo
    const intervaloIP = (parseFloat(paraString1) + parseFloat(somaEnderecoBloco))
    const enderecoBloco = `${paraString4}.${paraString3}.${paraString2}.${intervaloIP}`
    console.log(`Intervalo: ${enderecoIP.value} - ${enderecoBloco}`)

    //primeiro end
    const calcPrimeiroEnd = (parseFloat(paraString1) + 1)
    const primeiroEndValido = `${paraString4}.${paraString3}.${paraString2}.${calcPrimeiroEnd}`
    console.log(`Primeiro end válido: ${primeiroEndValido}`)

    //ultimo end
    const calcUltimoEnd = (parseFloat(intervaloIP) - 1)
    const ultimoEndValido = `${paraString4}.${paraString3}.${paraString2}.${calcUltimoEnd}`
    console.log(`Ultimo end válido: ${ultimoEndValido}`)

    for (var i = 0; i < subrede.value; i++) {
        enderecoIP = enderecoBloco + 1
        console.log(enderecoIP)
        descobreMascara()
    }
}

function calculos() {
    descobreMascara()
}

