const enderecoIP = document.getElementById('enderecoIP');
const mascara = document.getElementById('mascara');
const subrede = document.getElementById('quantSubrede');
const limpar = document.getElementById("limpar")


enderecoIP.addEventListener("input",(evento)=>{
    console.log("ola")
    evento.target.value= evento.target.value.replace(/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)
})

limpar.addEventListener("clcik",()=>{
    console.log('ola')
})
