const btnSend = document.querySelector("#send");
const btnGenerate = document.querySelector("#generate");
const question = document.querySelector("#question");
const result = document.querySelector("#result");
var operators = ["+", "-", "*", "/", "^"];
var resultValue;

function gerar() {
  var operator = operators[Math.floor(Math.random() * operators.length)];
  var number1 = Math.floor(Math.random() * 100) + 1;
  var number2 = Math.floor(Math.random() * 100) + 1;

  switch (operator) {
    case "+":
      resultValue = number1 + number2;
      break;
    case "-":
      resultValue = number1 - number2;
      break;

    case "*":
      resultValue = number1 * number2;
      break;

    case "/":
      while (number1 % number2 != 0) {
        number2 = Math.floor(Math.random() * 100) + 1;
      }

      resultValue = number1 / number2;
      break;

    case "^":
      number1 = Math.floor(Math.random() * 20) + 1;
      number2 = Math.floor(Math.random() * 10) + 1;
      resultValue = number1 ** number2;
      break;
    default:
      break;
  }
  question.innerText = number1 + " " + operator + " " + number2 + " ";
}

gerar();

btnGenerate.addEventListener("click", gerar);

btnSend.addEventListener("click", (e) => {
  e.preventDefault();
  const response = document.querySelector("#response");
  var value = response.value;
  if (value == resultValue) result.innerText = "Você acertou, parabéns";
  else result.innerText = "Você errou, a resposta correta é " + resultValue;
});
