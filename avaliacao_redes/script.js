const enderecoIP = document.getElementById('enderecoIP');
const mascara = document.getElementById('mascara');
const subrede = document.getElementById('quantSubrede');
const limpar = document.getElementById("limpar");
const mascaraResposta = document.getElementById("mascaraResposta")
const subRede = document.getElementById('subRede')
const primeiroEnd = document.getElementById('primeiroEnd')
const ultimoEnd = document.getElementById('ultimoEnd')

enderecoIP.addEventListener('input', () =>{
    var formatado = enderecoIP.value.replace(/[^0-9.]/g, '');
    enderecoIP.value = formatado
});

limpar.addEventListener('click',() => {
    enderecoIP.value='';
    mascara.value='';
    subrede.value='';  
})




function descobreMascara(){
    //mascara
    const mascInicial = (32 - mascara.value);
    const expoente = Math.pow(2,mascInicial)
    const qntEndereco = (expoente/subrede.value)
    const logaritmo = Math.log2(qntEndereco)
    var mascFinal = (32-logaritmo);
    console.log(`Mascara: ${mascFinal}`)

    //intervalo
    const intervaloIP = (parseFloat(enderecoIP.value) + parseFloat(qntEndereco))
    console.log(`Intervalo: ${enderecoIP.value} - ${intervaloIP}`)

    //primeiro end
    const calcPrimeiroEnd = (parseFloat(enderecoIP.value) + 1)
    console.log(`Primeiro end válido: ${calcPrimeiroEnd}`)

    //ultimo end
    const calcUltimoEnd = (parseFloat(intervaloIP) - 1)
    console.log(`Ultimo end válido: ${calcUltimoEnd}`)
}    

// function enderecoBloco(){
//     const intervaloIP = (enderecoIP.value + descobreMascara.qntEndereco)    
//     // console.log("Intervalo", enderecoIP "-", intervaloIP)
//     console.log(`Intervalo: ${enderecoIP} -> ${intervaloIP}`)
// }

// function primeiroEnd(){
//     const calcPrimeiroEnd = (enderecoIP.value + 1)    
//     console.log(`Primeiro end válido: ${calcPrimeiroEnd}`)
// }

// function ultimoEnd(){
//     const calcUltimoEnd = (intervaloIP - 1)    
//     console.log(`Ultimo end válido: ${calcUltimoEnd}`)
// }
function mostraRespostas(){
    mascaraResposta.innerHTML = mascFinal
}

function calculos(){
    descobreMascara()
    
    // enderecoBloco()
    // primeiroEnd()
    // ultimoEnd()
    mostraRespostas()
}    

