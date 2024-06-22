const enderecoIP = document.getElementById('enderecoIP');
const mascara = document.getElementById('mascara');
const subrede = document.getElementById('quantSubrede');
// const limpar = document.getElementById("limpar")

// function limpar() {
//     //ta dando pra ver???
//     //siiim-bea
// }

function descobreMascara(){
    //mascara
    const mascInicial = (32 - mascara.value);
    const expoente = Math.pow(2,mascInicial)
    const qntEndereco = (expoente/subrede.value)
    const logaritmo = Math.log2(qntEndereco)
    const mascFinal = (32-logaritmo);
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

function calculos(){
    descobreMascara()
    // enderecoBloco()
    // primeiroEnd()
    // ultimoEnd()
}

enderecoIP.addEventListener("click", () => {
    this.value = removerLetras(this.value)
    removerLetras();})
    // let letras='abcdefghijklmnopqrstuvwxyz';
    // let letrasM='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // if (enderecoIP.value.indexOf(letras) || enderecoIP.value.indexOf(letrasM)) {
        
    // }

function removerLetras(valor) {
    return valor.replace(/[a-zA-Z]/g, '');
}
