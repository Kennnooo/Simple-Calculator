let display = document.getElementById('display');

// Append input to the display
function appendToDisplay(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

// Calculate square root
function calculateSquareRoot() {
  try {
    let value = parseFloat(display.value);
    if (value >= 0) {
      display.value = Math.sqrt(value);
    } else {
      display.value = 'Error';
    }
  } catch (error) {
    display.value = 'Error';
  }
}

// Handle percentage calculation
function appendToDisplay(value) {
  if (value === '%') {
    try {
      let result = eval(display.value) / 100;
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  } else {
    display.value += value;
  }
}
