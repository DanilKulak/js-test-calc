const inputA = document.querySelector(".js-input-a");
const inputB = document.querySelector(".js-input-b");
const btnResult = document.querySelector(".js-btn-result");
const outputNode = document.querySelector(".js-output");
const numberButtons = document.querySelectorAll(".btn-number");
const operationButtons = document.querySelectorAll(".btn-operation");

let selectedOperation = null;
let selectedInput = null;

inputA.addEventListener("focus", () => (selectedInput = inputA));
inputB.addEventListener("focus", () => (selectedInput = inputB));

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (selectedInput) {
      if (button.value === "." && selectedInput.value.includes(".")) return;
      selectedInput.value += button.value;
    }
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedOperation = button.value;
  });
});

btnResult.addEventListener("click", function () {
  const a = Number(inputA.value);
  const b = Number(inputB.value);

  const result = calculate({
    a,
    b,
    operation: selectedOperation,
  });
  outputNode.innerHTML = result;
});
