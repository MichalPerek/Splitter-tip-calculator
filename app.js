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

//Function to calculate results
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

//tipButton class

class tipButton {
  constructor(tipValue) {
    this.tipValue = tipValue;
    this.htmlElement = function () {
      const btn = document.createElement("button");
      btn.innerHTML = this.tipValue + "%";
      buttonElement.classList.add("tip--button");
      return btn;
    };
  }

  // createButton() {
  //   const btn = document.createElement("button");
  //   btn.innerHTML = this.tipValue + "%";
  //   buttonElement.classList.add("tip--button");
  //   return btn;
  // }
}

//Function to render tip buttons
const input_TipBtns_values = [0, 5, 10, 15, 25, 50];

const buttons_HTMLelements = [];

const createTipButton = (button__value) => {
  const btnHTMLelement = document.createElement("button");
  btnHTMLelement.innerText = button__value + "%";
  btnHTMLelement.id = "button" + button__value;
  btnHTMLelement.classList.add("tip--button");

  return btnHTMLelement;
};

const test = createTipButton(10);
console.log(test);

button__container.appendChild(test);

const test2 = document.getElementById(button10);
console.log(test2);
test2.addEventListener("click", () => {
  test2.classList.add(".tip__button_clicked");
});
// const createTipButton = (tipvalue) => {
//   const buttonElement = document.createElement("button");
//   buttonElement.innerHTML = tipvalue + "%";
//   buttonElement.id = tipvalue;
//   buttonElement.classList.add("tip--button");
//   buttonElement.addEventListener("click", () => {
//     tipPercentage = tipvalue;
//     console.log(tipPercentage + "was clicked");
//     calculateResult();
//   });

//   return buttonElement;
// };

// const renderTipButtons = (buttonArray) => {
//   buttonArray.forEach((button) => {
//     let currentBtn = createTipButton(button);
//     tipButtonsArray.push(currentBtn);
//     button__container.appendChild(currentBtn);
//   });
// };

// createTipButtons(input_TipBtns_values);

// Handle calculate button;

button__calculate.addEventListener("click", () => {
  calculateResult();
});

//Render buttons
// renderTipButtons(predefinedTipButtons);
