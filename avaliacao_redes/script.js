const mascara = document.getElementById('mascara');
const subrede = document.getElementById('quantSubrede');
const calcular= document.getElementById('calcular')
var tabela= document.getElementsByClassName('.tabela')
var respostas= document.getElementsByClassName('.respostas')
var voltar= document.getElementById("voltar")
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
    enderecoIP.value = '';
    mascara.value = '';
    subrede.value = '';
     
})


// calcular.addEventListener('click', calculos(), validarIP(), respostas() )
// voltar.addEventListener('click', function(){
//     tabela.style.display==="flex"
//     respostas.style.display==="none"
// })

function descobreMascara(){
    const subrede = document.getElementById('quantSubrede');
  
    const separa = enderecoIP.value.split(".")
    const ip1 = separa.slice(-1) // index 3
    const ip2 = separa.slice(2,3) //index 2
    const ip3 = separa.slice(1,2) //index 1
    const ip4 = separa.slice(0,1) //inedx 0
    
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
    const expoente = Math.pow(2,mascInicial)
    const qntEndereco = (expoente/subrede.value)
    const logaritmo = Math.log2(qntEndereco)
    const mascFinal = (32-logaritmo);
    const somaEnderecoBloco = (qntEndereco-1)
    console.log(`Mascara: ${mascFinal}`)
    
//     //intervalo
//     const intervaloIP = (parseFloat(paraString1) + parseFloat(somaEnderecoBloco))
//     const enderecoBloco = `${paraString4}.${paraString3}.${paraString2}.${intervaloIP}`
//     console.log(`Intervalo: ${enderecoIP.value} - ${enderecoBloco}`)
                  
//     //primeiro end
//     const calcPrimeiroEnd = (parseFloat(paraString1) + 1)
//     const primeiroEndValido = `${paraString4}.${paraString3}.${paraString2}.${calcPrimeiroEnd}`
//     console.log(`Primeiro end válido: ${primeiroEndValido}`)

//     //ultimo end
//     const calcUltimoEnd = (parseFloat(intervaloIP) - 1)
//     const ultimoEndValido = `${paraString4}.${paraString3}.${paraString2}.${calcUltimoEnd}`
//     console.log(`Ultimo end válido: ${ultimoEndValido}`)

//     for (var i = 0; i < subrede.value ; i++){
//         enderecoIP = enderecoBloco + 1
//         console.log(enderecoIP)
//         descobreMascara()  
//     }
// }
    
}function calculateSubnets() {
    const network = document.getElementById('network').value;
    const numSubnets = parseInt(document.getElementById('subnets').value);

    if (!network || isNaN(numSubnets) || numSubnets < 1) {
        alert('Por favor, insira um endereço de rede válido e o número de sub-redes.');
        return;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    try {
        const [ip, prefix] = network.split('/');
        const networkAddress = ipStringToInt(ip);
        const networkPrefix = parseInt(prefix);
        const numBitsSubnets = Math.ceil(Math.log2(numSubnets));
        const newPrefix = networkPrefix + numBitsSubnets;

        const subnets = [];
        for (let i = 0; i < numSubnets; i++) {
            const subnetAddress = networkAddress + (i * (1 << (32 - newPrefix)));
            const firstIp = subnetAddress + 1;
            const lastIp = subnetAddress + (1 << (32 - newPrefix)) - 2;
            subnets.push({
                subnet: intToIpString(subnetAddress) + '/' + newPrefix,
                firstIp: intToIpString(firstIp),
                lastIp: intToIpString(lastIp)
            });
        }

        subnets.forEach((subnet, index) => {
            resultDiv.innerHTML += `<p>Sub-rede ${index + 1}:<br>Primeiro IP: ${subnet.firstIp}<br>Último IP: ${subnet.lastIp}</p>`;
        });
    } catch (e) {
        alert('Erro ao calcular sub-redes: ' + e.message);
    }
}

function ipStringToInt(ip) {
    return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet), 0);
}

function intToIpString(int) {
    return [
        (int >>> 24) & 255,
        (int >>> 16) & 255,
        (int >>> 8) & 255,
        int & 255
    ].join('.');
        }
    function calculos(){
        descobreMascara()
    }
