'use strict'
const limparFormulario = (endereco) => {
  document.getElementById('endereco').value = '';
  document.getElementById('bairro').value = '';
  document.getElementById('cidade').value = '';
  document.getElementById('estado').value = '';
}
