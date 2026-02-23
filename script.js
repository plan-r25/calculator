const container = document.querySelector("#container");
const div = document.createElement('div');
const calc = document.querySelector("#calc");
const result = document.querySelector("#result");
const operator = document.querySelector("#operator");
const number = document.createElement('div');

number.append(operator, div)

div.classList.add('buttons');

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
    console.log(e.target.textContent);
    calc.textContent = add(e.target.textContent, e.target.textContent);
  })
})

function add(a, b) {
  return a + b;
}