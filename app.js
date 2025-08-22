let listaDeAmigos = [];
function adicionarAmigo() {
  let capturaNomes = document.querySelector("input").value;

  if ((capturaNomes != null) && (capturaNomes != "")) {
    listaDeAmigos.push(capturaNomes);
    console.log(listaDeAmigos);
    atualizarListaDeAmigos();
  } else {
    alert("Por favor, insira um nome.");
  } limparCampo();
}

function atualizarListaDeAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < listaDeAmigos.length; i++) {
    novoItem = document.createElement("li");
    novoItem.innerHTML = listaDeAmigos[i];
    lista.appendChild(novoItem);
  }
}

function sortearAmigo() {
  let amigoEscolhido = Math.floor(Math.random() * listaDeAmigos.length);
  let amigoSorteado = listaDeAmigos[amigoEscolhido];

  listaSorteado = document.getElementById("resultado");
  listaSorteado.innerHTML = "";

  if ((amigoSorteado != "") && (amigoSorteado != null)) {
    novoItemSorteado = document.createElement("li");
    novoItemSorteado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
    listaSorteado.appendChild(novoItemSorteado);
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
  } else {
    listaSorteado.innerHTML = "";
  }
}
sortearAmigo();
function limparCampo() {
  capturaNomes = document.querySelector("input");
  capturaNomes.value = "";

}

