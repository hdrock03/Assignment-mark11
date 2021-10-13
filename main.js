const dateOfBirth = document.querySelector("#date-of-birth");
const luckyDate = document.querySelector("#lucky-Date");
const check = document.querySelector("#calculate-number");
const displayMessage = document.querySelector("#output-container");

const calculateSum = (date) => {
  let sum = 0;
  date = date.replaceAll("-", "");
  for (let digit of date) {
    sum = sum + Number(digit);
  }
  return sum;
};

const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
  console.log(sumOfDate, numberToCheck);
  if (sumOfDate % numberToCheck === 0) {
    return showMessage(`${numberToCheck} is a lucky number `);
  }
  showMessage(`${numberToCheck} is not lucky number`);
};

const showMessage = (message) => {
  displayMessage.innerText = message;
};

check.addEventListener("click", () => {
  const date = dateOfBirth.value;
  const numberToCheck = luckyDate.value;
  if (date && numberToCheck) {
    const sumOfDate = calculateSum(date);
    checkIsNumberLucky(sumOfDate, numberToCheck);
  } else {
    showMessage("Please enter both the fields");
  }
});