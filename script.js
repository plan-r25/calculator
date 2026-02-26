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
  button.addEventListener("click", () => {
    input += button.textContent;
    console.log('clicked', button.textContent);
    calc.textContent = input;
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
  result.textContent = input;
});
equal.addEventListener("click", () => {
  result.textContent = calculate(input);
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
    if (curr === '/') return acc / nextNum;
    return acc; 
  }, 0)
  return res;
};