// 1. Variável "x" no escopo global.
let x = 100;

function testScope() {
  // 2. Variável "x" no escopo da função.
  let x = 50;
  console.log("Dentro da função, x é:", x);

  // 3. Bloco "if" com uma nova variável "x".
  if (true) {
    let x = 30;
    console.log("Dentro do if, x é:", x);
  }
}

// 4. Chama a função "testScope" e imprime o valor de "x" fora da função.
testScope();
console.log("Fora da função, x é:", x);
