var listaFilmes = [
  "https://cdn.shopify.com/s/files/1/0155/7645/products/LogicadeProgramacao_ebook_large.jpg",
  "https://cdn.shopify.com/s/files/1/0155/7645/products/OrientacaoaObjetos_ebook_large.jpg"
];

function inserir() {
  var elementoInput = document.getElementById("valor");
  var find = listaFilmes.indexOf(elementoInput.value);

  if (
    elementoInput.value.endsWith(".jpg") ||
    elementoInput.value.endsWith(".png")
  ) {
    if (find < 0) {
      listaFilmes.push(elementoInput.value);
      listar();
    } else {
      var mensagemAlerta = document.getElementById("alerta");
      mensagemAlerta.innerHTML =
        "Esse livro já existe em nossa biblioteca. Insira um novo livro";
      setTimeout(function () {
        mensagemAlerta.innerHTML = "";
        // mensagemAlerta.parentNode.removeChild(mensagemAlerta);
      }, 2000);
    }
  } else {
    var linkInvalido = document.getElementById("alerta");
    linkInvalido.innerHTML = "Link da imagem inválido.";
    setTimeout(function () {
      linkInvalido.innerHTML = "";
      // mensagemAlerta.parentNode.removeChild(mensagemAlerta);
    }, 2000);
  }

  elementoInput.value = "";
}

function listar() {
  var imgs = document.getElementById("imgs");
  let img = "";
  if (listaFilmes.length >= 1) {
    for (var i = 0; i < listaFilmes.length; i++) {
      img += `<span id="listaImg"><img class="img-margin" src="${listaFilmes[i]}"></span> <span><button id="trash" onclick="removerLivro(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
  </svg></button></span>`;
    }
  }
  imgs.innerHTML = img;
}

listar();

function removerLivro(pos) {
  listaFilmes.splice(pos, 1);
  listar();
}
