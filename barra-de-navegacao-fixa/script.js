// Seleciona o elemento da barra de navegação
const navegacao = document.querySelector(".navegacao");

// Adiciona um ouvinte de evento para o scroll da página
window.addEventListener("scroll", fixarNavegacao);

// Função que fixa ou solta a navegação dependendo da rolagem
function fixarNavegacao() {
    // Se o scroll for maior que a altura da barra + 150px
    if (window.scrollY > navegacao.offsetHeight + 150) {
        // Adiciona a classe que muda o estilo (fundo branco, sombra, texto preto)
        navegacao.classList.add("ativa");
    } else {
        // Remove a classe quando o usuário volta para o topo
        navegacao.classList.remove("ativa");
    }
}
