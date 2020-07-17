var inputVermelho = document.querySelector('#inputVermelho');
var inputVerde = document.querySelector('#inputVerde');
var inputAzul = document.querySelector('#inputAzul');
var caixaVermelha = document.querySelector('#caixaVermelha');
var caixaVerde = document.querySelector('#caixaVerde');
var caixaAzul = document.querySelector('#caixaAzul');
var cor = document.querySelector('#cor');

function trocarCor() {
  var r = caixaVermelha.value;
  var g = caixaVerde.value;
  var b = caixaAzul.value;
  cor.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

function prepararInput() {
  inputVermelho.addEventListener('input', function (event) {
    caixaVermelha.value = event.target.value;
    trocarCor();
  });
  inputVerde.addEventListener('input', function (event) {
    caixaVerde.value = event.target.value;
    trocarCor();
  });
  inputAzul.addEventListener('input', function (event) {
    caixaAzul.value = event.target.value;
    trocarCor();
  });
}

function iniciar() {
  trocarCor();
  prepararInput();
}

iniciar();
