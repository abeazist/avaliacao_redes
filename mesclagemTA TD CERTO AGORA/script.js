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
/*
declarando as variaveis, enderecoIP,mascara e subrede capturando pelo o id do HTML, e com as variaveis mascara eu subrede, está
convertendo para um inteito
*/
function calculaSubredes() {
    const enderecoIP = document.getElementById("ip").value;
    const mascara = parseInt(document.getElementById("masc").value);
    const subrede = parseInt(document.getElementById("qtdSub").value);

    /*
    a condição if, verifica se o valor das variaveis que o usuário digitou são válidos
    */

    if (!enderecoIP || isNaN(mascara) || isNaN(subrede) || subrede < 1) {
        alert("Por favor, insira um endereço de rede, máscara de rede válida e o número de sub-redes.");
        return;
    }
    const respostasDiv = document.getElementById("mostraCalculos")
    respostasDiv.innerHTML = '';
/*
Inicia o bloco try..catch(e) onde ele calcula a mascara, o 1°endereço e o último, e o endereço das sub redes, com base nos
dados que o usuário digitou
*/
    try {
        const mascInicial = (32 - mascara);
        const expoente = Math.pow(2, mascInicial)
        const qntEndereco = (expoente / subrede)
        const logaritmo = Math.log2(qntEndereco)
        const mascFinal = (32 - logaritmo);

        const enderecoBloco = ipStringToInt(enderecoIP);
/*
Aqui ele declara uma variavel subredes que recebe um array vazio, e conforme o numero de subrede inserido
pelo o usuário, o metodo array push() adiciona na lista, os resultados dos calculos fornecidos
*/
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
/*
Com o método forEach() ele executa a função de mostrar o resultado em cada elemento do array, colocando esse resultado no HTML
*/
        subredes.forEach((subRedes, index) => {
            const mostraResultado = document.createElement("div")
            mostraResultado.innerHTML = `<p id="redes"><b>Sub-rede: </b>${index + 1}</p>
            <p id="primeiro-endereco"><b>Primeiro Endereço: </b>${subRedes.primeiroEnde}</p>
            <p id="ultimo-endereco"><b>Ultimo Endereço: </b>${subRedes.ultimoEnde}</p>
            <p id="mascara"><b>Máscara: </b>/${mascFinal}</p>
            <br/>
            <hr>
            <br/>`
            respostasDiv.appendChild(mostraResultado)
        });
    } catch (e) {

        alert('Erro ao calcular as sub-redes: ' + e.message);
    }
}

/*
A função abaixo converte um endereço IP em formato string para um número inteiro,
- Parâmetro ip: Recebe um endereço IP no formato string, por exemplo, "192.168.0.1" 
- ip.split('.'):O metodo split(),divide a string do endereço IP em partes usando o ponto (.) como delimitador.
- reduce((acc, octet) => (acc << 8) + parseInt(octet), 0),O reduce,reduz o array de partes do endereço IP a um único valor inteiro usando como parametro o acumulador 'acc', que guarda o valor intermediário do cálculo à medida que o array é percorrido, e o valor atual dado como octet.
- O metodo desloca cada componente 8 bits à esquerda e adiciona os componentes para formar um número inteiro único que representa o endereço IP.

*/

function ipStringToInt(ip) {
    return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet), 0);
}

/*
Converte um endereço IP representado que recebe como parametro um número inteiro, que volta para uma string no formato decimal e delimitado po ponto.
- Parâmetro int: Recebe um endereço IP no formato de número inteiro. Por exemplo, 3232235521 para o endereço IP "192.168.0.1".
*/
function intToIpString(int) {
    return [
        (int >>> 24) & 255,
        (int >>> 16) & 255,
        (int >>> 8) & 255,
        int & 255
    ].join('.');
}