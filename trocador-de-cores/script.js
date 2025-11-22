const cores = ["green", "red", "rgba(133,122,200)", "#b15b2e"];
const botao = document.getElementById("botao");
const cor = document.querySelector(".cor");

botao.addEventListener("click", function () {
  const numeroAleatorio = selecionarNumeroAleatorio();
  // console.log(numeroAleatorio);

  document.body.style.backgroundColor = cores[numeroAleatorio];
  cor.textContent = cores[numeroAleatorio];
});

function selecionarNumeroAleatorio() {
  return Math.floor(Math.random() * cores.length);
}
