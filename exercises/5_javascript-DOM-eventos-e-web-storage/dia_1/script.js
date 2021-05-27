        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

function daquiDoisAnos() {
  let paragrafo = document.getElementsByTagName('p')[0];
  paragrafo.innerText = 'Trabalhando como DEV e ganhando mais de 3000 reais.';
} 
daquiDoisAnos();

function verdeTrybe() {
  let fundoVerde = document.getElementsByClassName('main-content')[0];
  fundoVerde.style.background = 'rgb(76,164,109)';
}
verdeTrybe();

function redToWhite() {
  let whiteSquare = document.getElementsByClassName('center-content')[0];
  whiteSquare.style.background = 'white';
}
redToWhite();

function correcao() {
  let titulo = document.getElementsByTagName('h1')[0];
  titulo.innerText = 'Exercício 5.1 - JavaScripit';
}
correcao();

function upperCase() {
  let phrase = document.getElementsByTagName('p')[2];
  phrase.innerText = phrase.innerText.toUpperCase();
}
upperCase();

function allTagsP() {
  let allP = document.getElementsByTagName('p');

  for (let index in allP){
    console.log(allP[index].innerText);
  }
}
allTagsP();