var cartaAlagoas = {
  nome: "Alagoas",
  imagem:
    "https://journals.openedition.org/confins/docannexe/image/20555/img-2-small580.jpg",
  atributos: {
    area: 27768,
    populacao: 3332000,
    municípios: 102
  }
};

var cartaBahia = {
  nome: "Bahia",
  imagem:
    "https://www.viajali.com.br/wp-content/uploads/2018/09/o-que-fazer-em-salvador-01.jpg",
  atributos: {
    area: 567295,
    populacao: 15130000,
    municípios: 417
  }
};

var cartaCeara = {
  nome: "Ceará",
  imagem:
    "https://ifce.edu.br/ubajara/campus_ubajara/cursos/superiores/tecnologicos/Gastronomia/fotos/fotos/iracema-4.jpg/@@images/383a179a-d7c2-4aba-b92f-b4b74ba25bd2.jpeg",
  atributos: {
    area: 148886,
    populacao: 8843000,
    municípios: 184
  }
};

var cartaMaranhao = {
  nome: "Maranhão",
  imagem:
    "https://media-cdn.tripadvisor.com/media/photo-s/04/68/8f/0e/maranhao.jpg",
  atributos: {
    area: 331983,
    populacao: 6851000,
    municípios: 217
  }
};

var cartaPernambuco = {
  nome: "Pernambuco",
  imagem:
    "https://imagens1.ne10.uol.com.br/blogsne10/social1/uploads/2016/01/guarda-chuva-sombrinha-de-frevo-130311-MLB20502300025_112015-F-e1453895867772.jpg",
  atributos: {
    area: 98312,
    populacao: 9278000,
    municípios: 185
  }
};

var cartaPiaui = {
  nome: "Piauí",
  imagem:
    "https://i0.wp.com/portalpontox.com/wp-content/uploads/2020/07/Canions-do-Viana-em-Bom-Jesus-Piaui.jpg?fit=640%2C408&ssl=1",
  atributos: {
    area: 25529,
    populacao: 3195000,
    municípios: 224
  }
};

var cartaMaquina;
var cartaJogador;
var cartas = [
  cartaAlagoas,
  cartaCeara,
  cartaBahia,
  cartaMaranhao,
  cartaPernambuco,
  cartaPiaui
];
// 0          1           2

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  console.log("chamou");
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  console.log(atributoSelecionado);

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.jing.fm/clipimg/full/247-2479444_15-photos-of-template-magic-card-game-magic.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.jing.fm/clipimg/full/247-2479444_15-photos-of-template-magic-card-game-magic.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
