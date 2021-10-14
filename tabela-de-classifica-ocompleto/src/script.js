//          chave.  valor.
var rafa = {
  nome: "Rafa",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var paulo = {
  nome: "Paulo",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var gui = {
  nome: "Gui",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);

var jogadores = [rafa, paulo, gui];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento +=
      "<tr class='tabela'><td id='nome'>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button classe='btn-pontos' onClick='adicionarVitoria(" +
      i +
      ")'>Vitória</button></td>";

    elemento +=
      "<td><button classe='btn-pontos' onClick='adicionarEmpate(" +
      i +
      ")'>Empate</button></td>";
    elemento +=
      "<td><button classe='btn-pontos' onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  var jogadorPerdeu = parseInt(Math.random() * jogadores.length);

  while (jogadorPerdeu == i) {
    jogadorPerdeu = parseInt(Math.random() * jogadores.length);
  }

  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  jogadores[jogadorPerdeu].derrotas++;

  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  var jogadorEmpate = parseInt(Math.random() * jogadores.length);
  while (jogadorEmpate == i) {
    jogadorEmpate = parseInt(Math.random() * jogadores.length);
  }
  jogador.empates++;
  jogadores[jogadorEmpate].empates++;
  jogador.pontos = calculaPontos(jogador);
  jogadores[jogadorEmpate].pontos = calculaPontos(jogadores[jogadorEmpate]);

  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  var jogadorGanhou = parseInt(Math.random() * jogadores.length);

  while (jogadorGanhou == i) {
    jogadorGanhou = parseInt(Math.random() * jogadores.length);
  }

  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  jogadores[jogadorGanhou].vitorias++;
  jogadores[jogadorGanhou].pontos = calculaPontos(jogadores[jogadorGanhou]);

  exibeJogadoresNaTela(jogadores);
}

function zerarPontuação() {
  for (i = 0; i < jogadores.length; i++) {
    var jogador = jogadores[i];
    jogador.vitorias = 0;
    jogador.empates = 0;
    jogador.derrotas = 0;
    jogador.pontos = 0;
  }

  exibeJogadoresNaTela(jogadores);
}

function inserir() {
  var elementoInput = document.getElementById("valor");
  var find = 0;

  for (i = 0; i < jogadores.length; i++) {
    if (jogadores[i].nome == elementoInput.value) {
      find += 1;
    }
  }

  if (find == 0) {
    var novoJogador = {
      nome: elementoInput.value,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    };
    jogadores.push(novoJogador);
  }

  elementoInput.value = "";
  exibeJogadoresNaTela(jogadores);
}
