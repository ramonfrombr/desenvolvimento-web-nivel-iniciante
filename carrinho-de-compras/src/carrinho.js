let carrinhoCompras = document.getElementById("carrinho-compras");
let etiqueta = document.getElementById("etiqueta");
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

let atualizarIconeCarrinho = () => {
    let icone = document.getElementById("quantidadeCarrinho");
    icone.innerHTML = carrinho.map((x) => x.item).reduce((x, y) => x + y, 0);
};
atualizarIconeCarrinho();

let gerarItensCarrinho = () => {
    if (carrinho.length !== 0) {
        carrinhoCompras.innerHTML = carrinho
            .map((x) => {
                let { id, item } = x;
                let produto = produtosLoja.find((p) => p.id === id) || [];
                let { img, preco, nome } = produto;

                return `
      <div class="item-carrinho">
        <img width="100" src=${img} alt="" />
        <div class="detalhes">
          <div class="titulo-preco-x">
            <h4 class="titulo-preco">
              <p>${nome}</p>
              <p class="preco-item-carrinho">$ ${preco}</p>
            </h4>
            <i onclick="removerItem('${id}')" class="bi bi-x-lg"></i>
          </div>
          <div class="botoes-carrinho">
            <div class="botoes">
              <i onclick="diminuir(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantidade">${item}</div>
              <i onclick="aumentar(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
          <h3>$ ${item * preco}</h3>
        </div>
      </div>
      `;
            })
            .join("");
    } else {
        carrinhoCompras.innerHTML = "";
        etiqueta.innerHTML = `
    <h2>Carrinho Vazio</h2>
    <a href="index.html">
      <button class="botao-loja">Voltar para Loja</button>
    </a>
    `;
    }
};

gerarItensCarrinho();

let aumentar = (id) => {
    let itemSelecionado = id;
    let itemNoCarrinho = carrinho.find((x) => x.id === itemSelecionado.id);
    if (!itemNoCarrinho) carrinho.push({ id: itemSelecionado.id, item: 1 });
    else itemNoCarrinho.item += 1;
    gerarItensCarrinho();
    atualizarItemCarrinho(itemSelecionado.id);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
};

let diminuir = (id) => {
    let itemSelecionado = id;
    let itemNoCarrinho = carrinho.find((x) => x.id === itemSelecionado.id);
    if (!itemNoCarrinho || itemNoCarrinho.item === 0) return;
    itemNoCarrinho.item -= 1;
    carrinho = carrinho.filter((x) => x.item !== 0);
    gerarItensCarrinho();
    atualizarItemCarrinho(itemSelecionado.id);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
};

let atualizarItemCarrinho = (id) => {
    let item = carrinho.find((x) => x.id === id);

    if (!item) return; // Se não existir, sai da função

    document.getElementById(id).innerHTML = item.item;
    atualizarIconeCarrinho();
    calcularTotal();
};

let removerItem = (id) => {
    carrinho = carrinho.filter((x) => x.id !== id);
    atualizarIconeCarrinho();
    gerarItensCarrinho();
    calcularTotal();
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
};

let calcularTotal = () => {
    if (carrinho.length !== 0) {
        let total = carrinho
            .map((x) => {
                let { id, item } = x;
                let produto = produtosLoja.find((p) => p.id === id);
                return produto.preco * item;
            })
            .reduce((x, y) => x + y, 0);

        etiqueta.innerHTML = `
    <h2>Total: $ ${total}</h2>
    <button class="checkout">Finalizar Compra</button>
    <button onclick="limparCarrinho()" class="removerTudo">Limpar Carrinho</button>
    `;
    }
};

calcularTotal();

let limparCarrinho = () => {
    carrinho = [];
    gerarItensCarrinho();
    atualizarIconeCarrinho();
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
};
