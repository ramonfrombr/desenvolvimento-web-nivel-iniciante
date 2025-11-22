const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const botao = document.getElementById("botao");
const cor = document.querySelector(".cor");

botao.addEventListener("click", function () {
  let corHexadecimal = "#";
  for (let i = 0; i < 6; i++) {
    corHexadecimal += hex[selecionarNumeroAleatorio()];
  }
  // console.log(corHexadecimal);

  cor.textContent = corHexadecimal;
  document.body.style.backgroundColor = corHexadecimal;
});

function selecionarNumeroAleatorio() {
  return Math.floor(Math.random() * hex.length);
}
