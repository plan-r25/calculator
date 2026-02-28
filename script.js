const calc = document.querySelector("#calc");
const result = document.querySelector("#result");
const buttons = document.querySelectorAll("button")
const dlt = document.querySelector("#delete"); 
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");


//OR
let input ='';
buttons.forEach(button => {
  if (
    button.id === 'delete' ||
    button.id === 'equal' ||
    button.id === 'clear'
  ) return; 
  const isOperator = /[+\-*/%]/;
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (
     isOperator.test(value) &&
     isOperator.test(input.slice(-1))     
    ) {
      return;
    }
    input += value;
    console.log('clicked', button.textContent);
    calc.textContent = input;

    calc.classList.remove("small");
    result.classList.remove("large");
    updateResult(); 
  })
});
dlt.addEventListener("click", () => {
  input = '';
  calc.textContent = input;
  result.textContent = input
});
clear.addEventListener("click", () => {
  input = input.slice(0, -1);
  calc.textContent = input;

  updateResult();
});
equal.addEventListener("click", () => {
  result.textContent = calculate(input);
  calc.classList.add("small");
  result.classList.add("large");
});

function calculate(str) {
  let parts = str.split(/([*\-+%/])/);
  const res = parts.reduce((acc, curr, ind, arr) => { 
    let nextNum = Number(arr[ind + 1]);
    if (ind === 0) acc = Number(curr);
    if (curr === '*') return acc * nextNum;
    if (curr === '+') return acc + nextNum;
    if (curr === '-') return acc - nextNum;
    if (curr === '%') return acc % nextNum;
    if (curr === '/') return nextNum === 0 ? 'Cannot divide by 0' : acc / nextNum;
    return acc; 
  }, 0)
  return res;
};

function updateResult() {
  // empty input
  if (!input) {
    result.textContent = "";
    return;
  }
  if (input.length < 3) {
    result.textContent = "";
    return;
  }
  // calculate
  if (/[+\-*/%0-9]$/.test(input)) {
    result.textContent = calculate(input);
    return;
  }
  result.textContent = calculate(input);
}