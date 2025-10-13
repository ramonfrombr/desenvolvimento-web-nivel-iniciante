const botaoAbrir = document.querySelector(".botao-abrir");
const botaoFechar = document.querySelector(".botao-fechar");
const navegacoes = document.querySelectorAll(".navegacao");

botaoAbrir.addEventListener("click", () => {
    navegacoes.forEach((navegacao) => {
        navegacao.classList.add("visivel");
    });
});

botaoFechar.addEventListener("click", () => {
    navegacoes.forEach((navegacao) => {
        navegacao.classList.remove("visivel");
    });
});
