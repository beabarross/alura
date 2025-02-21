// 1- Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

let titulo = document.querySelector('h1');
titulo.innerHTML = ('Hora do Desafio');

// 2 - Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

function clicarConsole(){
    console.log('O botão foi clicado');
}

// 3 -Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function alertar() {
    alert('Eu amo JS');
}

/* 4 - Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.*/

function perguntarCidade() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert('Estive em ' +cidade+ ' e lembrei de você.')
}

// 5 - Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

function somarNumeros() {
    let numero1 = prompt('Digite o primeiro número');
    let numero2 = prompt('Digite o segundo número');
    let resultado = parseFloat(numero1) + parseFloat(numero2);
    
    alert('A soma é '+resultado)
}

// 6 - Criar uma função que exibe "Olá, mundo!" no console.

function dizerOla() {
    console.log('Olá, mundo!');
}

// 7 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function dizerParametro(nome) {
    console.log('Olá,'+ nome);
}

// 8 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobrarNumero(numero) {
    return numero * 2;
}

// 9 - Criar uma função que recebe três números como parâmetros e retorna a média deles.

function calcularMedia(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}

// 10 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function retornarMaior(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}
//ou
//condição ? valor_se_verdadeiro : valor_se_falso;
function maiorNumero(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// 11 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

function multiplicar(number) {
    return number * number;
}

// 12 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

// 13 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterDolarParaReal(dolar) {
    const cotacao = 4.80;
    let reais = dolar * cotacao;
    return reais;
}

// 14 - Crie uma lista vazia, com o nome listaGenerica.

let listaGenerica = [];

// 15 - Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// 16 - Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

linguagensDeProgramacao.push('Java', 'Ruby', 'Golang');

// 17 - Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

let nomes = ['Beatriz', 'Maria', 'Joyce'];
console.log(nomes[0]);

// 18 - Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

console.log(nomes[1]);

// 19 - Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

console.log(nomes[2]);