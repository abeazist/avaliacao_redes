const mascara = document.getElementById('mascara');
const subrede = document.getElementById('quantSubrede');
const calcular= document.getElementById('calcular')
var tabela= document.getElementsByClassName('.tabela')
var respostas= document.getElementsByClassName('.respostas')
var voltar= document.getElementById("voltar")
// const limpar = document.getElementById("limpar")

// function limpar() {
//     //ta dando pra ver???
//     //siiim-bea
// }

calcular.addEventListener('click', calculos(), validarIP(), respostas() )
voltar.addEventListener('click', function(){
    tabela.style.display==="flex"
    respostas.style.display==="none"
})

function descobreMascara(){
    //mascara
    const mascInicial = (32 - mascara.value);
    const expoente = Math.pow(2,mascInicial)
    const qntEndereco = (expoente/subrede.value)
    const logaritmo = Math.log2(qntEndereco)
    const mascFinal = (32-logaritmo);
    console.log(`Mascara: ${mascFinal}`)

    const separa = enderecoIP.value.split('.')
    console.log(separa[-1])

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

// //Tentativa1 de validar os enderecos
// function validarIP(ip){
//     var masc=  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
//     if (!masc.test(ip)) {
//         return false
//     }
//     return true

// }

// function formatar(ip){
//     if (!validarIP(ip)){
//         return  "IP invalido"
//     }

//     return ip.split(".").map(add => {
//         return add.replace(/(\d{3})(?=\d)/g, '$1.')
//     }).join('.')
// }


//Tentativa2 de validar os enderecos 
function validarIP(ip){
    var valido= /^\d{1,3}\.\d{1,3}.d{1,3}\.d{1,3}$/

    if(!valido.test(ip)){
        return false
    }

    var octeto= ip.split('.')

    for ( lat1=0; i<4; i++){
        var oct=octeto[i]
        if (isNaN(oct) || oct<0 || oct >255){
            return false
        }
        //completa com zeros a esquerda se precisar
        octeto[i]=('000' +oct).slice(-3)
    }
    var formato= octeto.join('.')

    return formato
}

function validoFormato(){
    const enderecoIP = document.getElementById('enderecoIP').value;
    var resultado= validarIP(enderecoIP)
    if (resultado){
        alert("ip valido")
    } else {
        alert("ip invalido")
    }
}

function respostas(){
    if (tabela.style.display==="flex"){
        tabela.style.display==="none"
        respostas.style.display==="inline"
    }
}

//desisti
