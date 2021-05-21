//exercicio 1

//let n = 8;
//let linha = "*";
//let novaLinha = "";
//for (let i = 0; i < n; i += 1) {
//  novaLinha += linha;
//};
//for (let i = 0; i < n; i += 1) {
//  console.log(novaLinha);
//};

//exercicio 2

//let n = 5;
//let linha = "*";
//let novaLinha = "";
//for (let i = 0; i < n; i += 1) {
//  novaLinha += linha;
//  console.log(novaLinha);
//};

//exercicio 3

//let n = 5;
//let asterisco = "*";
///let novaLinha = "";
//let posicaoN = n;

//for (let iLinha = 0; iLinha < n; iLinha += 1) {
//  for (let iColuna = 0; iColuna <= n; iColuna += 1){
//    if (iColuna < posicaoN) {
//      novaLinha += " ";
//    } else {
//      novaLinha += asterisco;
//    }
//  }
//  console.log(novaLinha)
//  novaLinha = "";
//  posicaoN -= 1;
//}

//exercicio 4

//let n = 9;
//let asterisco = "*";
//let novaLinha = "";
//let meio = (n + 1) / 2;
//let posicao1 = meio;
//let posicao2 = meio;

//for (let iLinha = 1; iLinha <= meio; iLinha += 1) {
//  for (let iColuna = 1; iColuna <= n; iColuna += 1){
//    if (iColuna < posicao1) {
//      novaLinha += " ";
//    } else if (iColuna > posicao2) {
//      novaLinha += " ";
//    } else {
//      novaLinha += asterisco;
//    }
//  }
//  console.log(novaLinha)
//  novaLinha = "";
//  posicao1 -= 1;
//  posicao2 += 1;
//};

//exercicio BONUS 5

let n = 7;
let meio = (n + 1) / 2;
let posicao1 = meio;
let posicao2 = meio;
let asterisco = "*";
let novaLinha = "";

for (let iLinha = 1; iLinha <= meio; iLinha += 1) {
  for (let iColuna = 1; iColuna <= n; iColuna += 1){
    if ((iColuna === posicao1) || (iColuna === posicao2) || (iLinha === meio)) {
      novaLinha += asterisco;
    } else {
      novaLinha += " ";
    } 
  }
  console.log(novaLinha)
  novaLinha = "";
  posicao1 -= 1;
  posicao2 += 1;
};

//exercicio BONUS 6

let numero = 16;
let resultado = 0;

for (let i = 2; i < numero; i += 1) {
  if (numero % i === 0){
    resultado += 1;
  };
};

if (resultado === 0) {
  console.log('Esse numero é primo');
} else {
  console.log('Esse numero NÃO é primo');
}