// Challenge 2
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', function() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;

  let output;

  if (isNaN(num1) || isNaN(num2)) {
    output = 'Please enter both numbers!';
  } else {
    switch (operator) {
      case 'plus':
        output = num1 + num2;
        break;
      case 'minus':
        output = num1 - num2;
        break;
      case 'multiply':
        output = num1 * num2;
        break;
      case 'divide':
        output = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        output = 'Invalid operator';
    }
  }

  result.textContent = output;
});
