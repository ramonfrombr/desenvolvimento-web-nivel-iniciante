const contianerImagens = document.getElementById("imagens");
const botaoEsquerda = document.getElementById("esquerda");
const botaoDireita = document.getElementById("direita");

const imagens = document.querySelectorAll("#imagens img");

let indice = 0;

function mudarImagem() {
    if (indice > imagens.length - 1) {
        indice = 0;
    } else if (indice < 0) {
        indice = imagens.length - 1;
    }

    contianerImagens.style.transform = `translateX(${-indice * 500}px)`;
}

function executar() {
    indice++;
    mudarImagem();
}

let intervalo = setInterval(executar, 2000);

function reiniciarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(executar, 2000);
}

botaoDireita.addEventListener("click", () => {
    indice++;
    mudarImagem();
    reiniciarIntervalo();
});

botaoEsquerda.addEventListener("click", () => {
    indice--;
    mudarImagem();
    reiniciarIntervalo();
});
