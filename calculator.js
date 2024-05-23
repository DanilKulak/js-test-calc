const OPERATIONS = {
  sum: "+",
  subtraction: "-",
  multiplication: "*",
  division: "/",
};

function calculate({ a, b, operation }) {
  let result = null;

  switch (operation) {
    case OPERATIONS.sum:
      result = sum(a, b);
      break;

    case OPERATIONS.subtraction:
      result = subtraction(a, b);
      break;

    case OPERATIONS.multiplication:
      result = multiplication(a, b);
      break;

    case OPERATIONS.division:
      result = division(a, b);
      break;

    default:
      break;
  }

  return result;
}
