// Lista com os nomes dos sons
const sons = ["aplausos", "vaias", "suspiro", "tada", "vitoria", "erro"];

// Cria um botão para cada som da lista
sons.forEach((som) => {
    // Cria o elemento <button>
    const botao = document.createElement("button");
    botao.classList.add("botao"); // aplica o estilo CSS

    // Define o texto visível no botão
    botao.innerText = som;

    // Quando o botão é clicado, para todos os sons e toca o selecionado
    botao.addEventListener("click", () => {
        pararSons();
        document.getElementById(som).play();
    });

    // Adiciona o botão dentro da div de botões
    document.getElementById("botoes").appendChild(botao);
});

// Função que pausa todos os sons e reinicia o tempo de reprodução
function pararSons() {
    sons.forEach((som) => {
        const audio = document.getElementById(som);
        audio.pause(); // pausa o som
        audio.currentTime = 0; // volta o som para o início
    });
}
