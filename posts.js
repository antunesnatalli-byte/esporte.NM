const posts = [
    {
        titulo: "Futebol: Grande Final no Fim de Semana",
        conteudo: "Os dois maiores times do campeonato se enfrentam este domingo em busca do título nacional."
    },
    {
        titulo: "Basquete: Nova Temporada Promete Grandes Jogos",
        conteudo: "Com reforços de peso, as equipes estão prontas para dar o pontapé inicial na liga."
    },
    {
        titulo: "Tênis: Brasileiro Avança para a Semifinal",
        conteudo: "Com uma vitória emocionante por 3 sets a 2, o atleta garante vaga na próxima fase."
    }
];

function carregarPosts() {
    const container = document.getElementById("posts-container");

    posts.forEach(post => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${post.titulo}</h3>
            <p>${post.conteudo}</p>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", carregarPosts);
