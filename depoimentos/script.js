// Seleciona os elementos do DOM
const containerDepoimentos = document.querySelector(".caixa-depoimentos");
const textoDepoimento = document.querySelector(".depoimento");
const imagemUsuario = document.querySelector(".foto-usuario");
const nomeUsuario = document.querySelector(".nome-usuario");
const cargoUsuario = document.querySelector(".cargo");

// Lista de depoimentos
const depoimentos = [
    {
        nome: "Maria Souza",
        cargo: "Marketing",
        foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
        texto: "Já trabalhei com literalmente centenas de desenvolvedores HTML/CSS e preciso dizer que o primeiro lugar vai para este cara. Ele é um desenvolvedor incrível. Dá atenção a um código limpo e se preocupa com os detalhes. Adoro profissionais que respeitam cada aspecto de um design bem pensado e fazem o possível para traduzi-lo em código. Ele vai além e transforma ARTE em PIXELS — sem falhas, todas as vezes.",
    },
    {
        nome: "Julia Rodrigues",
        cargo: "Engenheira de Software",
        foto: "https://randomuser.me/api/portraits/women/44.jpg",
        texto: "Este cara é um desenvolvedor front-end incrível que entregou exatamente o que precisávamos. Faça um favor a si mesmo e contrate-o, você não vai se decepcionar. Ele sempre faz o possível para garantir que o cliente fique satisfeito. Com certeza trabalharei com ele novamente!",
    },
    {
        nome: "Marcela Gomes",
        cargo: "Assistente de Dados",
        foto: "https://randomuser.me/api/portraits/women/68.jpg",
        texto: "Ele é um profissional esforçado. A comunicação foi excelente e ele foi muito responsivo o tempo todo — algo difícil de encontrar em muitos freelancers. Com certeza trabalharemos juntos novamente!",
    },
    {
        nome: "Clara Simões",
        cargo: "Recepcionista",
        foto: "https://randomuser.me/api/portraits/women/65.jpg",
        texto: "Ele faz de tudo para concluir o trabalho da melhor forma possível. Esta é a segunda vez que o contrato, e com certeza voltarei a contratá-lo no futuro.",
    },
    {
        nome: "João Silva",
        cargo: "Designer Gráfico",
        foto: "https://randomuser.me/api/portraits/men/43.jpg",
        texto: "Eu tinha dúvidas se, por causa do prazo curto, este projeto poderia ser feito. Mas ele me provou o contrário — entregou um trabalho excelente e ainda 1 dia antes do prazo! Quando pedi revisões, ele as fez em MINUTOS. Mal posso esperar para trabalhar com ele novamente. Recomendo totalmente!",
    },
    {
        nome: "Sara Carvalho",
        cargo: "Contadora",
        foto: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
        texto: "Ele é um designer e desenvolvedor front-end de altíssimo nível. Comunica-se bem, trabalha rápido e entrega com qualidade. Tivemos muita sorte em trabalhar com ele!",
    },
    {
        nome: "Vitor Pereira",
        cargo: "Diretor",
        foto: "https://randomuser.me/api/portraits/men/97.jpg",
        texto: "Um profissional jovem e talentoso, proativo e responsável, com uma ética de trabalho exemplar. Muito forte em conversão PSD para HTML e tecnologias de front-end. Aprende rápido e busca constantemente se aprimorar. Focado e comprometido com prazos e resultados excepcionais.",
    },
];

let indice = 1;

// Função que atualiza o depoimento
function atualizarDepoimento() {
    const { nome, cargo, foto, texto } = depoimentos[indice];

    textoDepoimento.innerHTML = texto;
    imagemUsuario.src = foto;
    nomeUsuario.innerHTML = nome;
    cargoUsuario.innerHTML = cargo;

    indice++;

    if (indice > depoimentos.length - 1) {
        indice = 0;
    }
}

// Troca o depoimento a cada 10 segundos
setInterval(atualizarDepoimento, 10000);
