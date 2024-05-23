const inputA = document.querySelector(".js-input-a");
const inputB = document.querySelector(".js-input-b");
const btnResult = document.querySelector(".js-btn-result");
const outputNode = document.querySelector(".js-output");
const selectOperation = document.querySelector(".js-select-operation");

btnResult.addEventListener("click", function () {
  const a = Number(inputA.value);
  const b = Number(inputB.value);
  const operation = selectOperation.value;

  const result = calculate({
    a,
    b,
    operation,
  });
  outputNode.innerHTML = result;
});
