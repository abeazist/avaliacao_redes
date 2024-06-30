document.getElementById("calcular").addEventListener("click", function () {
    document.getElementById("caixa").style.display = "none";
    document.getElementById("resposta").style.display = "block";
    calculaSubredes();
});

document.getElementById("fechar-resposta").addEventListener("click", function () {
    document.getElementById("caixa").style.display = "block";
    document.getElementById("resposta").style.display = "none";
});

document.getElementById("limpar").addEventListener("click", () => {
    document.getElementById("ip").value = '';
    document.getElementById("masc").value = '';
    document.getElementById("qtdSub").value = '';
    document.getElementById("respostas").innerHTML = '';
    document.getElementById("resposta").style.display = "none";
    document.getElementById("caixa").style.display = "block";
});

function calculaSubredes() {
    const enderecoIP = document.getElementById("ip").value;
    const mascara = parseInt(document.getElementById("masc").value);
    const subrede = parseInt(document.getElementById("qtdSub").value);

    if (!enderecoIP || isNaN(mascara) || isNaN(subrede) || subrede < 1) {
        alert("Por favor, insira um endereço de rede, máscara de rede válida e o número de sub-redes.");
        return;
    }

    const respostasDiv = document.getElementById("mostraCalculos")
    respostasDiv.innerHTML = '';

    try {
        const mascInicial = (32 - mascara);
        const expoente = Math.pow(2, mascInicial)
        const qntEndereco = (expoente / subrede)
        const logaritmo = Math.log2(qntEndereco)
        const mascFinal = (32 - logaritmo);

        const enderecoBloco = ipStringToInt(enderecoIP);

        const subredes = [];
        for (let i = 0; i < subrede; i++) {
            const enderecoSubrede = enderecoBloco + (i * (1 << (32 - mascFinal)));
            const primeiroEnde = enderecoSubrede + 1;
            const ultimoEnde = enderecoSubrede + (1 << (32 - mascFinal)) - 2;
            subredes.push({
                mascaraNova: intToIpString(mascFinal),
                primeiroEnde: intToIpString(primeiroEnde),
                ultimoEnde: intToIpString(ultimoEnde)
            });
        }

        subredes.forEach((subRedes, index) => {
            const mostraResultado = document.createElement("div")
            mostraResultado.innerHTML = `<p id="redes"><b>Sub-rede: </b>${index + 1}</p>
            <p id="primeiro-endereco"><b>Primeiro Endereço: </b>${subRedes.primeiroEnde}</p>
            <p id="ultimo-endereco"><b>Ultimo Endereço: </b>${subRedes.ultimoEnde}</p>
            <p id="mascara"><b>Mascara: </b>/${mascFinal}</p>
            <br/>
            <hr>
            <br/>`
            respostasDiv.appendChild(mostraResultado)
        });
    } catch (e) {

        alert('Erro ao calcular as sub-redes: ' + e.message);
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