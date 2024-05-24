const inputA = document.querySelector(".js-input-a");
const inputB = document.querySelector(".js-input-b");
const btnResult = document.querySelector(".js-btn-result");
const outputNode = document.querySelector(".js-output");
const btnPlus = document.querySelector(".btn-plus");
const btnMinus = document.querySelector(".btn-minus");
const btnMultiply = document.querySelector(".btn-multiply");
const btnDivision = document.querySelector(".btn-division");
const btnOne = document.querySelector(".btn-number-one");
const btnTwo = document.querySelector(".btn-number-two");
const btnThree = document.querySelector(".btn-number-three");
const btnFour = document.querySelector(".btn-number-four");
const btnFive = document.querySelector(".btn-number-five");
const btnSix = document.querySelector(".btn-number-six");
const btnSeven = document.querySelector(".btn-number-seven");
const btnEight = document.querySelector(".btn-number-eight");
const btnNine = document.querySelector(".btn-number-nine");
const btnZero = document.querySelector(".btn-number-zero");

let selectedOperation = null;
let selectedInput = null;

inputA.addEventListener("focus", () => (selectedInput = inputA));
inputB.addEventListener("focus", () => (selectedInput = inputB));

const numberButttons = [
  btnOne,
  btnTwo,
  btnThree,
  btnFour,
  btnFive,
  btnSix,
  btnSeven,
  btnEight,
  btnNine,
  btnZero,
];

numberButttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (selectedInput) {
      selectedInput.value += button.value;
    }
  });
});

btnPlus.addEventListener("click", () => {
  selectedOperation = OPERATIONS.sum;
});

btnMinus.addEventListener("click", () => {
  selectedOperation = OPERATIONS.subtraction;
});
btnMultiply.addEventListener("click", () => {
  selectedOperation = OPERATIONS.multiplication;
});
btnDivision.addEventListener("click", () => {
  selectedOperation = OPERATIONS.division;
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
