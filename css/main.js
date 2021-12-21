'use strict'
const pesquisarCep = ()=>{
     const cep = document.getElementById('cep').value;
     console.log(cep);
}
document.getElementById('cep').addEventListener('focusot',pesquisarCep);