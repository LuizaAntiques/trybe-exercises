//exercicio 1

let a = 20;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//exercicio 2
let firstNumber = 47;
let secondNumber = 32;

if (firstNumber > secondNumber) {
  console.log(firstNumber);
}
else {
  console.log(secondNumber);
}

//exercicio 3
let number1 = 15;
let number2 = 61;
let number3 = 68;

if (number1 > number2 && number1 > number3) {
  console.log(number1);
}
else if (number2 > number1 && number2 > number3) {
  console.log(number2);
}
else {
  console.log(number3);
}

//exercicio 4
let number = -2;

if (number > 0) {
  console.log("positive");
}
else if (number < 0) {
  console.log("negative");
}
else {
  console.log("zero");
}

//exercicio 5
let firstAngle = 90;
let secondAngle = 40;
let thirdAngle = 50;

let sumAngles = firstAngle + secondAngle + thirdAngle;

let positeAngles = firstAngle > 0 && secondAngle > 0 && thirdAngle > 0;

if (positeAngles) {
  if (sumAngles === 180) {
    console.log('true');
  }
  else {
    console.log('false');
  }
}
else {
  console.log('Error')
}

//exercicio 6
let chessPiece = 'RAINHA';

switch (chessPiece.toLowerCase()) {
  case 'peão':
    console.log('Peão: anda apenas 1 casa para frente por vez');
    break;

  case 'torre':
    console.log('Torre: anda quantas casas quiser na vertical ou horizontal');
    break;

  case 'cavalo':
    console.log('Cavalo: anda sempre em L, sempre na configuração 3 por 2 (se andar 2 casas no eixo vertical, tem que andar mais 3 no eixo horizontal, e vice-versa)');
    break;

  case 'bispo':
    console.log('Bispo: anda quantas casas quiser na vertical');
    break;

  case 'rainha':
    console.log('Rainha: anda quantas casas quiser na horizontal, vertical ou diagonal');
    break;

  case 'rei':
    console.log('Rei: anda apenas uma casa por vez na horizontal, vertical ou diagonal');
    break;

  default:
    console.log('Erro')
}

//exercicio 7
let nota = 34;
let porcentagem = nota >= 0 && nota <= 100;

if (porcentagem) {
  if (nota >= 90) {
    console.log('Sua nota é A');
  }
  else if (nota >= 80) {
    console.log('Sua nota é B');
  }
  else if (nota >= 70) {
    console.log('Sua nota é C');
  }
  else if (nota >= 60) {
    console.log('Sua nota é D');
  }
  else if (nota >= 50) {
    console.log('Sua nota é E');
  }
  else {
    console.log('Sua nota é F');
  }
}
else {
  console.log('Erro');
}

//exercicio 8
let var1 = 11;
let var2 = 25;
let var3 = 53;

let result = false;

if (var1 % 2 === 0 || var2 % 2 === 0 || var3 % 2 === 0) {
  result = true;
}

console.log(result);

//exercicio 9
let var4 = 8;
let var5 = 42;
let var6 = 5327;

let result2 = false;

if (var4 % 2 === 1 || var5 % 2 === 1 || var6 % 2 === 1) {
  result2 = true;
}

console.log(result2);

//exercicio 10
let cost = 100;
let sale = 200;
let tax = cost * 0.2;
let totalCost = cost + tax;

if (cost > 0 || sale > 0){
  console.log('Seu lucro é de: ' + (sale - totalCost));
}
else {
  console.log('Erro')
}

//exercicio 11
let salary = 3000;
let inss;
let ir;

if (salary <= 1556.94) {
  inss = salary * 0.08;
} else if (salary <= 2594.92) {
  inss = salary * 0.09;
} else if (salary <= 5189.82) {
  inss = salary * 0.11;
} else {
  inss = 570.88;
} 

let base = salary - inss;

if (base <= 1903.98) {
  ir = 0;
} else if (base <= 2826.65) {
  ir = (base * 0.075) - 142.8;
} else if (base <= 3751.05) {
  ir = (base * 0.15) - 354.8;
} else if (base <= 4664.68) {
  ir = (base * 0.225) - 636.13;
} else {
  ir = (base * 0.275) - 869.36;
}

console.log('Seu salario liquido é de: ' + (base - ir));
