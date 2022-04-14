//Define HTML elements
const button__container = document.querySelector(".button__container");
const bill__input = document.getElementById("bill");
const people__input = document.getElementById("people");
const button__reset = document.getElementById("button__reset");
const button__calculate = document.getElementById("button__calculate");
const tip__amount = document.getElementById("tip__amount");
const total__amount = document.getElementById("total__amount");

//Clear inputs on click
bill__input.addEventListener("click", () => {
  console.log("bill field clicked");
  bill__input.value = " ";
});

people__input.addEventListener("click", () => {
  people__input.value = " ";
});

//Variables
let tipPercentage = 100;
let billAmount = 0;
let peopleNo = 0;
let tipAmount = 0;
let totalAmount = 0;

//Function to calculate tip values & values per person
const calculateResult = () => {
  billAmount = Number(bill__input.value);
  peopleNo = Number(people__input.value);

  tipAmount = billAmount * (tipPercentage / 100);
  totalAmount = (billAmount + tipAmount) / peopleNo;

  tipAmount = tipAmount.toFixed(2);
  totalAmount = totalAmount.toFixed(2);

  tip__amount.value = "$" + tipAmount;
  total__amount.value = "$" + totalAmount;
};

//Array of tip values
const input_TipBtns_values = [0, 5, 10, 15, 20, 25, 30, 50];

//Function to create button HTML element
const createBtnHTMLElement = (value) => {
  const btnHTMLelement = document.createElement("button");
  btnHTMLelement.innerText = value + "%";
  btnHTMLelement.id = "button" + value;
  btnHTMLelement.classList.add("tip--button");

  return btnHTMLelement;
};

//Function to remove highlight from clicked buttons
const clearClickedButtons = () => {
  let clickedBtns = document.querySelectorAll(".tip__button_clicked");

  clickedBtns.forEach((element) => {
    element.classList.remove("tip__button_clicked");
  });
};

//Function to handle button click
const handleBtnClick = (tipBtnElement, tipBtnValue) => {
  tipBtnElement.addEventListener("click", () => {
    clearClickedButtons();
    tipBtnElement.classList.add("tip__button_clicked");
    tipPercentage = tipBtnValue;
    calculateResult();
  });
};

//Function to append button elements to button container
const renderButtons = (buttonValues) => {
  buttonValues.forEach((buttonValue) => {
    const currentBtn = createBtnHTMLElement(buttonValue);
    button__container.appendChild(currentBtn);
    handleBtnClick(currentBtn, buttonValue);
  });
};

renderButtons(input_TipBtns_values);
