<<<<<<< HEAD
const fs=require('fs')


let history = {};

function calculator(name, a, b, operator) {
  let result;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    case "%":
      result = a % b;
      break;
    case "^":
      result = a ** b;
      break;

    default:
      console.log("Invalid operator");
      break;
  }
  const operation = `${a}${operator}${b} =${result}`;

  if (!history[name]) {
    history[name] = [];
  }
  history[name].push(operation);
  return result;
}

const r=calculator('Manju', 1, 2, '*')
console.log(r);
console.log(history);

const jsonFormat=JSON.stringify(history)

console.log(jsonFormat);

fs.writeFileSync('cal.json',jsonFormat)
=======
const fs=require('fs')


let history = {};

function calculator(name, a, b, operator) {
  let result;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    case "%":
      result = a % b;
      break;
    case "^":
      result = a ** b;
      break;

    default:
      console.log("Invalid operator");
      break;
  }
  const operation = `${a}${operator}${b} =${result}`;

  if (!history[name]) {
    history[name] = [];
  }
  history[name].push(operation);
  return result;
}

const r=calculator('Manju', 1, 2, '*')
console.log(r);
console.log(history);

const jsonFormat=JSON.stringify(history)

console.log(jsonFormat);

fs.writeFileSync('cal.json',jsonFormat)
>>>>>>> 4ec36c39a4083795e3e20b54e0f7a8742bc393aa
