let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//exercicio 1

//console.log('Bem-vinda,', info.personagem);

//exercicio 2

info['recorrente'] = 'Sim';

//console.log(info);

//exercicio 3

//for (let key in info) {
//  console.log(key);
//};

//exercicio 4

//for (let key in info) {
//  console.log(info[key]);
//};

//exercicio 5

//let info2 = {
//  personagem: 'Tio Patinhas',
//  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//  nota: 'O último MacPatinhas',
//  recorrente: "Sim"
//};

//for (let key in info){
//  if (info[key] === info2[key] && info[key] === "Sim") {
//    console.log('Ambos recorrentes');
//  } else {
//    console.log(info[key], 'e', info2[key]);
//  };
//};

//exercicio 1 - parte II

//function palindromo(palavra) {
//  let resultado = true;
//  let index2 = palavra.length - 1;

//  for (let index = 0; index < palavra.length; index += 1) {
//    if (palavra[index] !== palavra[index2]) {
//      resultado = false;
//    };
//    index2 -= 1;
//  };
//  return resultado;
//}

//console.log(palindromo('arara'));

//exercicio 2 - parte II

//let array = [2, 3, 6, 7, 10, 1];

//function indiceDoMaior(meuArray) {
//  let resultado = 0;

//  for (let index = 0; index < meuArray.length; index += 1){
//    if (meuArray[index] > meuArray[resultado]) {
//      resultado = index;
//    };
//  };

//  return resultado;
//};

//console.log(indiceDoMaior(array));

//exercicio 3 - parte II

//let array = [2, 4, 6, 7, 10, 0, -3];

//function indiceDoMaior(meuArray) {
//  let resultado = 0;

//  for (let index = 0; index < meuArray.length; index += 1){
//    if (meuArray[index] < meuArray[resultado]) {
//      resultado = index;
//    };
//  };

//  return resultado;
//};

//console.log(indiceDoMaior(array));

//exercicio 4 - parte II

//let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

//function maisCaracteres(meuArray) {
//  let resultado;
//  let i = 0;

//  for (let index = 0; index < meuArray.length; index += 1){
//    if (meuArray[index].length >= meuArray[i].length) {
//       i = index;
//    };
//  };
 // resultado = meuArray[i];

//  return resultado;
//};

//console.log(maisCaracteres(array));

//exercicio 5 - parte II

//let array = [2, 3, 2, 5, 8, 2, 3];

//function maisRepetido(meuArray) {
//  let contagem = 0;
//  let repetido = 0;
//  let indNumRep = 0;

//  for (let index in meuArray) {

//    for (let index2 in meuArray) {
//      if (meuArray[index] === meuArray[index2]) {
//        contagem += 1;
//      };
//    };
//    if (contagem > repetido) {
//      repetido = contagem;
//      indNumRep = index;
//    };
//    contagem = 0;
//  };
//  return meuArray[indNumRep];
//};

//console.log(maisRepetido(array));

//exercicio 6 - parte II

//function soma(n) {
//  let contagem = 0;

//  for (let index = 0; index <= n; index += 1) {
//    contagem += index;
//  };
//  return contagem;
//};
//console.log(soma(10));

//exercicio 7 - parte II

