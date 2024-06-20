const enderecoIP = document.getElementById('enderecoIP');
const mascara = document.getElementById('mascara');
const subrede = document.getElementById('quantSubrede');
const limpar = document.getElementById("limpar")

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

// enderecoIP.addEventListener("input", (evento) => {
//     this.value = removerLetras(this.value)
//     removerLetras();
//     // let letras='abcdefghijklmnopqrstuvwxyz';
//     // let letrasM='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     // if (enderecoIP.value.indexOf(letras) || enderecoIP.value.indexOf(letrasM)) {
        
//     // }
    
    
    
//     // const ipPattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
//     // evento.target.value= evento.target.value.replace(/\D\s*/g, "");
//     // if (input.length > 3) input = input.substring(0, 3) + '.' + input.substring(3);
//     // if (input.length > 7) input = input.substring(0, 7) + '.' + input.substring(7);
//     // if (input.length > 11) input = input.substring(0, 11) + '.' + input.substring(11);

//     if (!ipPattern.test(evento.target.value)) {
//         console.log("Endereço IP inválido");
//     } else {
//         console.log("Endereço IP válido");
//     }
// });

// function removerLetras(valor) {
//     return valor.replace(/[a-zA-Z]/g, '');
// }
