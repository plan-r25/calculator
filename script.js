const container = document.querySelector("#container");
const div = document.createElement('div');
const calc = document.querySelector("#calc");
const result = document.querySelector("#result");
const operator = document.querySelector("#operator");
const number = document.createElement('div');

number.append(div)

div.classList.add('buttons');
div.appendChild(operator);

for (let i = 0; i <= 9; i++) {
  const num = document.createElement('button');
  num.textContent = i;
  num.classList.add('nums');
  console.log(num);
  div.appendChild(num);
};
container.appendChild(number);

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    calc.textContent += e.target.textContent;
    let parts = calc.textContent.split(/[+\-*/]/);
    console.log('parts', parts);
    let a = +parts[0];
    let op = parts[1]
    let b = +parts[2]
    console.log('part A',a)
    
    console.log(e.target.textContent);
    if (op === '*') return a * b;
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '/') return a / b;
    let input = `${a} ${op} ${b}`
    result.textContent = input ;
    console.log('part B', b)
  })
});
