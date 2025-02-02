// Seleciona o campo de entrada onde o usuário digita o nome do artista
const searchInput = document.getElementById('search-input'); 

// Seleciona o elemento onde serão exibidos os resultados dos artistas
const resultArtist = document.getElementById("result-artist"); 

// Seleciona o elemento onde as playlists são exibidas
const resultPlaylist = document.getElementById('result-playlists'); 

// Função para fazer a requisição à API com base no termo de busca
function requestApi(searchTerm) {
    // Define a URL da API com um filtro para buscar pelo nome do artista
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;

    // Faz a requisição para a API e converte a resposta para JSON
    fetch(url)
        .then((response) => response.json()) // Converte a resposta para um objeto JavaScript
        .then((result) => displayResults(result)) // Chama a função para exibir os resultados
}

// Função para exibir os resultados na interface
function displayResults(result) {
    // Oculta a seção de playlists, pois estamos exibindo artistas
    resultPlaylist.classList.add("hidden"); 

    // Seleciona os elementos onde serão exibidos o nome e a imagem do artista
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    // Itera sobre os resultados retornados pela API
    result.forEach(element => {
        artistName.innerText = element.name; // Define o nome do artista no elemento HTML
        artistImage.src = element.urlImg; // Define a imagem do artista
    });

    // Exibe a seção de artistas, removendo a classe que a oculta
    resultArtist.classList.remove('hidden'); 
}

// Adiciona um evento que escuta a digitação no campo de busca
document.addEventListener('input', function () {
    // Obtém o valor digitado pelo usuário e converte para minúsculas
    const searchTerm = searchInput.value.toLowerCase();

    // Se o campo de busca estiver vazio, oculta a playlist e exibe os artistas
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return; // Sai da função
    }

    // Chama a função para fazer a requisição à API com o termo de busca
    requestApi(searchTerm);
});
