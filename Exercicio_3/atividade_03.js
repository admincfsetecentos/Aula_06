let phrase = "JavaScript is fun!";
let counter = 0;

// 2. Loop for para imprimir cada caractere.
for (let i = 0; i < phrase.length; i++) {
  console.log(phrase[i]);
  if (phrase[i] === 'a' || phrase[i] === 'A') counter++;
}

// 3. Imprime a contagem de "a".
console.log("A letra 'a' aparece", counter, "vezes.");

// 4. Loop "while" para imprimir números de 1 a 10.

let num = 1;
while (num <= 10) console.log(num++);
