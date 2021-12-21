'use strict'
const limparFormulario = (endereco) => {
  document.getElementById('endereco').value = '';
  document.getElementById('bairro').value = '';
  document.getElementById('cidade').value = '';
  document.getElementById('estado').value = '';
}
const preencherFormulario = (endereco) =>{
  document.getElementById('endereco').value = endereco.logradouro;
  document.getElementById('bairro').value = endereco.bairro;
  document.getElementById('cidade').value = endereco.localidade;
  document.getElementById('estado').value = endereco.uf;
}
