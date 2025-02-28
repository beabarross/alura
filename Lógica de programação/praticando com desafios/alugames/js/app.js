function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
        botao.innerHTML = 'Alugar';
        
    } else {
        imagem.classList.add('dashboard__item__img--rented')
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
    }

    contarJogosAlugados();

}

function contarJogosAlugados() {
    let jogosAlugados = document.querySelectorAll('.dashboard__item__button--return').length;
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}
