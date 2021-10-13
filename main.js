const dob = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const check = document.querySelector("#calculate-number");
const output = document.querySelector("#output-container");

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
    return showMessage(`congrats ! ${numberToCheck} is a lucky number! `);
  }
  showMessage(`OOPS! ${numberToCheck} is not a lucky number!`);
};

const showMessage = (message) => {
  output.innerText = message;
};

check.addEventListener("click", () => {
  const date = dob.value;
  const numberToCheck = luckyNumber.value;
  if (date && numberToCheck) {
    const sumOfDate = calculateSum(date);
    checkIsNumberLucky(sumOfDate, numberToCheck);
  } else {
    showMessage("Please enter both the fields");
  }
});
