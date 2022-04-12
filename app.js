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

//Function to render tip buttons
const input_TipBtns_values = [0, 5, 10, 15, 25, 50];

const buttons_HTMLelements = [];

function Tip__button(tip__value) {
  this.tip__value = tip__value;
  this.HTMLelement = document.createElement("button");
  this.HTMLelement.innerText = tip__value + "%";
  this.HTMLelement.id = "button" + tip__value;
  this.HTMLelement.classList.add("tip--button");
  this.was__clicked = false;

  // this.HTMLelement.addEventListener("click", () => {
  //   this.was__clicked = !this.was__clicked;
  //   if (this.was__clicked === true) {
  //     console.log("clicked tru");
  //     this.HTMLelement.classList.add(".tip__button_clicked");
  //   } else {
  //     this.HTMLelement.classList.remove(".tip__button_clicked");
  //     console.log("clicked false");
  //     calculateResult();
  //   }
  // });
}

const button10 = new Tip__button(10);
const button20 = new Tip__button(20);

button__container.appendChild(button10.HTMLelement);
button__container.appendChild(button20.HTMLelement);

button10.HTMLelement.addEventListener("click", () => {
  button10.was__clicked = !button10.was__clicked;
  if (button10.was__clicked === true) {
    console.log("clicked tru");
    button10.HTMLelement.classList.add(".tip__button_clicked");
  } else {
    button10.HTMLelement.classList.remove(".tip__button_clicked");
    console.log("clicked false");
    calculateResult();
  }
});
