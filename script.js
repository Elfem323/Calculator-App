const display = document.getElementById('display');
    let currentInput = '';

    function appendDigit(digit) {
      if (currentInput === '0') currentInput = '';
      currentInput += digit;
      updateDisplay();
    }

    function appendOperator(operator) {
      if (currentInput === '') return;
      const lastChar = currentInput.slice(-1);
      if ('+-*/'.includes(lastChar)) {
        currentInput = currentInput.slice(0, -1);
      }
      currentInput += operator;
      updateDisplay();
    }

    function calculateResult() {
      try {
        const result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay();
      } catch {
        currentInput = 'Error';
        updateDisplay();
      }
    }

    function clearDisplay() {
      currentInput = '';
      updateDisplay();
    }

    function updateDisplay() {
      display.textContent = currentInput || '0';
    }