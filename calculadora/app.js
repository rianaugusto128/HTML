document.getElementById('form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operacao = document.getElementById('operacao').value;

  const Erro = document.getElementById('erro');
  const Resultado = document.getElementById('resultado');

  let resultado = 0;
  let erro = null;

  switch (operacao.toLowerCase()) {
    case "somar":
      resultado = num1 + num2;
      break;
    case "subtrair":
      resultado = num1 - num2;
      break;
    case "multiplicar":
      resultado = num1 * num2;
      break;
    case "dividir":
      if (num2 == 0) {
        erro = "Divisão por zero não é permitida.";
      } else {
        resultado = num1 / num2;
      }
      break;
    default:
      erro = "Operação inválida.";
  }

  if (erro) {
    Erro.textContent = erro;
    Resultado.textContent = "";
  } else {
    Resultado.textContent = "Resultado: " + resultado;
    Erro.textContent = ""; 
  }
});
