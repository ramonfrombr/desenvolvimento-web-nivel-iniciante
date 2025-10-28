let loja = document.getElementById("loja");
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

let gerarLoja = () => {
    loja.innerHTML = produtosLoja
        .map((produto) => {
            let { id, nome, descricao, img, preco } = produto;
            let itemCarrinho = carrinho.find((item) => item.id === id) || [];
            return `
    <div id=produto-${id} class="item">
      <img width="220" src=${img} alt="">
      <div class="detalhes">
        <h3>${nome}</h3>
        <p>${descricao}</p>
        <div class="preco-quantidade">
          <h2>$ ${preco}</h2>
          <div class="botoes">
            <i onclick="diminuir(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantidade">${
                itemCarrinho.item === undefined ? 0 : itemCarrinho.item
            }</div>
            <i onclick="aumentar(${id})" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
    </div>
    `;
        })
        .join("");
};

gerarLoja();

let aumentar = (id) => {
    let itemSelecionado = id;
    let itemNoCarrinho = carrinho.find(
        (item) => item.id === itemSelecionado.id
    );

    if (!itemNoCarrinho) carrinho.push({ id: itemSelecionado.id, item: 1 });
    else itemNoCarrinho.item += 1;

    atualizarQuantidade(itemSelecionado.id);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
};

let diminuir = (id) => {
    let itemSelecionado = id;
    let itemNoCarrinho = carrinho.find(
        (item) => item.id === itemSelecionado.id
    );

    if (!itemNoCarrinho || itemNoCarrinho.item === 0) return;
    itemNoCarrinho.item -= 1;

    atualizarQuantidade(itemSelecionado.id);
    carrinho = carrinho.filter((item) => item.item !== 0);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
};

let atualizarQuantidade = (id) => {
    let item = carrinho.find((x) => x.id === id);
    document.getElementById(id).innerHTML = item.item;
    atualizarIconeCarrinho();
};

let atualizarIconeCarrinho = () => {
    let icone = document.getElementById("quantidadeCarrinho");
    icone.innerHTML = carrinho.map((x) => x.item).reduce((x, y) => x + y, 0);
};

atualizarIconeCarrinho();
