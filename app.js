const previousArea = document.getElementById('previousArea');
const currentArea = document.getElementById('currentArea');
let calcValue;

document.getElementById('table').onclick = (e) => {
  if (e.target.className === 'number') {
    writingCurrentArea(e.target.innerText);
  } else if (e.target.className === 'operationButtons') {
    selectOperation(e.target.innerText);
  } else if (e.target.className === 'selector') {
    deleteCurrentArea(e.target.innerText);
  } else if (e.target.id === 'result') {
    result();
  }
};

const writingCurrentArea = (e) => {
  if (e === '.' && currentArea.innerText.includes('.')) return;
  if (e === '-' && currentArea.innerText.includes('-')) return;
  currentArea.innerText += e;
};

const deleteCurrentArea = (e) => {
  if (e === 'AC') {
    currentArea.innerText = '';
    previousArea.innerText = '';
  } else if (e === 'DEL') {
    currentArea.innerText = currentArea.innerText.slice(0, -1);
  }
};
const selectOperation = (e) => {
  if (currentArea.innerText === '') return;
  if (previousArea.innerText !== '') {
    calculate(e);
  }
  previousArea.innerText = currentArea.innerText + e;

  currentArea.innerText = '';
};

const calculate = (operation) => {
  const currentValue = parseFloat(currentArea.innerText);
  const previousValue = parseFloat(previousArea.innerText.slice(0, -1));


  if (operation === '+') {
    calcValue = currentValue + previousValue;
  } else if (operation === '-') {
    calcValue = previousValue - currentValue;
  } else if (operation === 'x') {
    calcValue = currentValue * previousValue;
  } else if (operation === '/') {
    calcValue = previousValue / currentValue;
  }
  currentArea.innerText = calcValue;
  previousArea.innerText = '';
};

const result = () => {
  console.log(previousArea.innerText);
  if (previousArea.innerText.includes("+")) {
    currentArea.innerText = parseFloat(previousArea.innerText.slice(0, -1)) + parseFloat(currentArea.innerText)
    previousArea.innerText = '';
  } else if (previousArea.innerText.includes("-")) {
    currentArea.innerText = parseFloat(previousArea.innerText.slice(0, -1)) - parseFloat(currentArea.innerText)
    previousArea.innerText = '';
  } else if (previousArea.innerText.includes("x")) {
    currentArea.innerText = parseFloat(previousArea.innerText.slice(0, -1)) * parseFloat(currentArea.innerText)
    previousArea.innerText = '';
  } else if (previousArea.innerText.includes("/")) {
    currentArea.innerText = parseFloat(previousArea.innerText.slice(0, -1)) / parseFloat(currentArea.innerText)
    previousArea.innerText = '';
  } else {
    calculate();
  }
};