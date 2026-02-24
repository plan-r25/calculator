const calc = document.querySelector("#calc");
const result = document.querySelector("#result");
const digit = document.querySelector(".digit")
const operator = document.querySelector(".operator");
const clear = document.querySelector("#clear")
const equal = document.querySelector("#equal");

for (let i = 0; i <= 9; i++) {
  const buttons = document.createElement('button');
  buttons.textContent = i;
  digit.appendChild(buttons)
};

const buttons = document.querySelectorAll(".operator button")

function calculate(str) {
  let parts = str.split(' ');
  let a = +parts[0];
  let op = parts[1];
  let b = +parts[2];
  if(op === '*') return a * b;
  if(op === '*') return a * b;
  if(op === '*') return a * b;
  if(op === '*') return a * b;
}

let input = '';
buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.textContent);
    input += button.textContent;
    calc.textContent = input;
  });
  console.log("input", input)
});
equal.addEventListener('click', (e) => {
  console.log(e.target.textContent)
  result.textContent = calculate(input);
});
clear.addEventListener("click", () => {
  input = input.slice(0, -1);
  calc.textContent = input;
});