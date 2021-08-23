const screen = document.querySelector(".calculator-screen");
let expression, result;
let start = true;

function Calc(n) {
  if((n>=0 && n<=9) || n=='.') {
    if(start) {
      screen.value += n;
    } else {
      screen.value += n;
      start = true;
    }
    expression = screen.value;
  } else if (n == '+' || n == '-' || n == '×' || n == '÷' || n == "%") {
    if (n == '×') {n = '*'}
    if (n == '÷') {n = '/'}
    expression = screen.value + " " + n + " ";
    screen.value = expression;
    start = false;
  } else if (n == '=') {
    result = eval(expression);
    screen.value = result;
    expression = "";
    result = "";
  } else if (n == 'C') {
    screen.value = "";
    expression = "";
  } else if (n == 'backspace') {
    let str = screen.value;
    screen.value = str.substr(0, str.length - 1)
  }
}
