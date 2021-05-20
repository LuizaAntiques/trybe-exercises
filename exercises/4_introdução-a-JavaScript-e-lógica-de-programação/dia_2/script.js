let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio 1

//for (let index = 0; index < numbers.length; index += 1) {
//  console.log(numbers[index]);
//};

//exercicio 2

//let resultado = 0;
//for (let i = 0; i < numbers.length; i += 1) {
//  resultado += numbers[i];
//};
//console.log(resultado);

//exercicio 3

//let soma = 0;
//for (let i = 0; i < numbers.length; i += 1) {
//  soma += numbers[i];
//};
//let resultadoMedia = soma / numbers.length;
//console.log("A média aritmética do array é:",resultadoMedia);

//exercicio 4

//let soma = 0;
//for (let i = 0; i < numbers.length; i += 1) {
//  soma += numbers[i];
//};
//let resultadoMedia = soma / numbers.length;
//if (resultadoMedia > 20) {
//  console.log("Valor maior que 20");
//} else {
//  console.log("Valor menor ou igual a 20");
//};

//exercicio 5

//let comparacao = 0;
//for (let i = 0; i < numbers.length; i += 1) {
//  if (numbers[i] > comparacao) {
//    comparacao = numbers[i];
//  };
//};
//console.log(comparacao);

//exercicio 6

//let numerosImpares = 0 
//for (let i = 0; i < numbers.length; i +=1) {
//  if (numbers[i] % 2 === 1) {
//    numerosImpares += 1;
//  };
//};
//if (numerosImpares > 0) {
//  console.log(numerosImpares);
//} else {
//  console.log("nenhum valor impar encontrado");
//};

//exercicio 7

//let comparacao = numbers[0];
//for (let i = 1; i < numbers.length; i += 1) {
//  if (numbers[i] < comparacao) {
//    comparacao = numbers[i];
//  };
//};
//console.log(comparacao);

//exercicio 8

//let array = [];
//for (let number = 1; number < 26; number += 1) {
//  array.push(number);
//};
//console.log(array);

//exercicio 9

//for (let i = 0; i < array.length; i += 1) {
//  let conta = array[i] / 2;
//  console.log(conta);
//};

//BONUS 1

//for (let index = 1; index < numbers.length; index += 1) {
//  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//    if (numbers[index] < numbers[secondIndex]) {
//      let position = numbers[index];
//      numbers[index] = numbers[secondIndex];
//      numbers[secondIndex] = position;
//    }
//  }
//}
//console.log(numbers);

//BONUS 2

//for (let index = 1; index < numbers.length; index += 1) {
//  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//    if (numbers[index] > numbers[secondIndex]) {
//      let position = numbers[index];
//      numbers[index] = numbers[secondIndex];
//      numbers[secondIndex] = position;
//    }
//  }
//}
//console.log(numbers);

//BONUS 3
let novoArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index +1 === numbers.length) {
    novoArray.push(numbers[index] * 2);
  } else {
    novoArray.push(numbers[index] * numbers[index + 1]);
  };
};

console.log(novoArray);