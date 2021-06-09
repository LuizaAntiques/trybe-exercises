//exercicio 1

let meuH1 = 'Exercício 5.2 - JavaScript DOM';
let meuBody = document.querySelector('body');

let titulo = document.createElement('h1');
titulo.innerText = meuH1;

meuBody.appendChild(titulo);

//exercicio 2

let mainContent = document.createElement('div');
mainContent.className = 'main-content';

meuBody.appendChild(mainContent);

//exercicio 3

let centerContent = document.createElement('div');
centerContent.className = 'center-content';

mainContent.appendChild(centerContent);

//exercicio 4

let paragrafo = document.createElement('p');
let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas';
paragrafo.innerText = text;

centerContent.appendChild(paragrafo);

//exercicio 5

let leftContent = document.createElement('div');
leftContent.className = 'left-content';

mainContent.appendChild(leftContent);

//exercicio 6

let rightContent = document.createElement('div');
rightContent.className = 'right-content';

mainContent.appendChild(rightContent);

//exercicio 7

let img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';

leftContent.appendChild(img);

//exercicio 8

let array = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
let list = document.createElement('ul');

for (let i of array) {
  let listItem = document.createElement('li');
  listItem.innerText = i;

  rightContent.appendChild(listItem);
}

//exercicio 9

for (let i = 1; i < 4; i += 1) {
  let h3 = document.createElement('h3');
  h3.innerText = 'H3 test';

  mainContent.appendChild(h3);
}
