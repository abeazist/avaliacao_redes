const enderecoIP = document.getElementById('enderecoIP');
const mascara = document.getElementById('mascara');
const subrede = document.getElementById('quantSubrede');
const limpar = document.getElementById("limpar")

enderecoIP.addEventListener("input", (evento) => {
    this.value = removerLetras(this.value)
    removerLetras();
    // let letras='abcdefghijklmnopqrstuvwxyz';
    // let letrasM='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // if (enderecoIP.value.indexOf(letras) || enderecoIP.value.indexOf(letrasM)) {
        
    // }
    
    
    
    // const ipPattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    // evento.target.value= evento.target.value.replace(/\D\s*/g, "");
    // if (input.length > 3) input = input.substring(0, 3) + '.' + input.substring(3);
    // if (input.length > 7) input = input.substring(0, 7) + '.' + input.substring(7);
    // if (input.length > 11) input = input.substring(0, 11) + '.' + input.substring(11);

    if (!ipPattern.test(evento.target.value)) {
        console.log("Endereço IP inválido");
    } else {
        console.log("Endereço IP válido");
    }
});

function removerLetras(valor) {
    return valor.replace(/[a-zA-Z]/g, '');
}