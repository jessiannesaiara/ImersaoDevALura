var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 0;

console.log(numeroSecreto);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (tentativas < 2) {
    if (chute == numeroSecreto) {
      omitir();
      elementoResultado.innerHTML = "Você Acertou";
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "Você deve digitar um número entre 0 e 10";
    } else if (chute < numeroSecreto) {
      elementoResultado.innerHTML =
        "Você errou, o número secreto é maior que seu chute. Tente outra vez.";
    } else if (chute > numeroSecreto) {
      elementoResultado.innerHTML =
        "Você errou, o número secreto é menor que seu chute. Tente outra vez.";
    }
  } else if (tentativas == 2 && chute == numeroSecreto) {
    omitir();
    elementoResultado.innerHTML = "Parabéns, Você Acertou";
  } else {
    omitir();
    elementoResultado.innerHTML =
      "Você atingiu o número máximo de tentativas, o número secreto era " +
      numeroSecreto;
  }

  tentativas++;
}

function omitir() {
  var elementoSubtitle = document.getElementsByClassName("page-subtitle");
  var elementoInput = document.getElementById("valor");
  var elementoButton = document.getElementById("btn");
  elementoSubtitle[0].hidden = true;
  elementoInput.hidden = true;
  elementoButton.hidden = true;
}
