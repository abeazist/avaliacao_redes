const enderecoIP = document.getElementById('enderecoIP').value
const mascara = document.getElementById("mascara")
const subrede = document.getElementById('quantSubrede')

function limpar() {
    //ta dando pra ver???
    //siiim-bea
}

function descobreMascara(){
    //mascara
    const mascInicial = (32 - mascara.value);
    const expoente = Math.pow(2,mascInicial)
    const qntEndereco = (expoente/subrede.value)
    const logaritmo = Math.log2(qntEndereco)
    const mascFinal = (32-logaritmo);
    console.log(`Macara: ${mascFinal}`)

    //intervalo
    const intervaloIP = (enderecoIP + qntEndereco)
    console.log(`Intervalo: ${enderecoIP} -> ${intervaloIP}`)

    //primeiro end
    const calcPrimeiroEnd = (enderecoIP + 1)
    console.log(`Primeiro end válido: ${calcPrimeiroEnd}`)

    //ultimo end
    const calcUltimoEnd = (intervaloIP - 1)
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

function calculos(){
    descobreMascara()
    // enderecoBloco()
    // primeiroEnd()
    // ultimoEnd()
}