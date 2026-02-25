const calc = document.querySelector("#calc");
const result = document.querySelector("#result");
const digit = document.querySelector(".digit")
const operator = document.querySelector(".operator");
const clear = document.querySelector("#clear")
const equal = document.querySelector("#equal");

for (let i = 0; i <= 9; i++) {
  const buttons = document.createElement('button');
  buttons.textContent = i;
  digit.appendChild(buttons);
};

const buttons = document.querySelectorAll(".operator button")
  
function calculate(str) {
let parts = str.split(/([+\-*/])/);

const result = parts.reduce((acc, curr, idx, arr) => {

  // 1. If it's the very first number, set it as our starting accumulator
  if (idx === 0) return Number(curr);

  // 2. If the current item is an operator, find the number that follows it
  const nextNum = parseFloat(arr[idx + 1]);

  // 3. Perform the math based on the operator
  if (curr === '*') return acc * nextNum;
  if (curr === '+') return acc + nextNum;
  if (curr === '-') return acc - nextNum;
  if (curr === '/') return acc / nextNum;

  // 4. If 'curr' was a number (already processed), just return the total
  return acc;
}, 0);
return result;
};

let input = [];
buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.textContent);
    input += `${button.textContent}`;
    calc.textContent = input;
  });
});
equal.addEventListener('click', (e) => {
  console.log(e.target.textContent)
  result.textContent = calculate(input);
  console.log("result", result.textContent)
});
clear.addEventListener("click", () => {
  input = input.slice(0, -1);
  calc.textContent = input;
});