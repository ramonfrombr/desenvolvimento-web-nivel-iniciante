// Seleciona todas as divs com a classe "caixa" e armazena em uma NodeList (parecido com um array)
const caixas = document.querySelectorAll(".caixa");

// Adiciona um ouvinte de evento (listener) na janela do navegador
// Sempre que o usuário rolar a página (scroll), a função "verificarCaixas" será executada
window.addEventListener("scroll", verificarCaixas);

// Chama a função "verificarCaixas" assim que a página é carregada,
// garantindo que os elementos já visíveis apareçam corretamente
verificarCaixas();

// Função responsável por verificar a posição das caixas na tela
function verificarCaixas() {
    // Define um ponto de ativação para a animação:
    // 80% da altura da janela visível do navegador (innerHeight)
    // Quando o topo da caixa ultrapassar esse limite, ela será exibida
    const limiteInferior = (window.innerHeight / 5) * 4;

    // Percorre cada elemento da lista "caixas"
    caixas.forEach((caixa) => {
        // Pega a distância (em pixels) entre o topo da caixa e o topo da janela de visualização
        const topoCaixa = caixa.getBoundingClientRect().top;

        // Se o topo da caixa estiver acima do limite definido (ou seja, já entrou na área visível)
        if (topoCaixa < limiteInferior) {
            // Adiciona a classe "mostrar", que no CSS faz a caixa deslizar para dentro da tela
            caixa.classList.add("mostrar");
        } else {
            // Caso contrário, remove a classe "mostrar" para escondê-la novamente (desliza para fora)
            caixa.classList.remove("mostrar");
        }
    });
}
