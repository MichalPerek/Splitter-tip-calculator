// LEFT SIDE OF THE CONTAINER

//Tip buttons
const button5 = document.getElementById("button5");
const button10 = document.getElementById("button10");
const button15 = document.getElementById("button15");
const button25 = document.getElementById("button25");
const button50 = document.getElementById("button50");

//Bill input

const bill__input = document.getElementById("bill");

//Set default value for input
bill__input.defaultValue = 0;

//Clear default tip value on click
bill__input.addEventListener("click", () => {
  bill__input.value = " ";
  logStatus();
});

//Right side buttons

const buttonCalculate = document.getElementById("calculate");
const buttonReset = document.getElementById("reset");

//Custom tip amount
let customTip1 = document.getElementById("customTip");
customTip1.defaultValue = "Custom";

//Container element

const container = document.getElementById("container");

//Set default amount of people
people.defaultValue = 1;

//Clear default people value on click
people.addEventListener("click", () => {
  people.value = " ";
});

//RIGHT SIDE OF THE CONTAINER

//Displayed values:

let tip__person = document.getElementById("tip__person");
tip__person.textContent = "0.00";
let amount__person = document.getElementById("amount__person");
amount__person.textContent = "0.00";

//Reset button

const reset = document.getElementById("reset");

//Variables

let tip__total_calculated;
let tip__person_calculated;
let amount__person_calculated;
let currentTipPercentage;

//Assign above function to buttons &

buttonTipPredefined(button5, 0.05);
buttonTipPredefined(button10, 0.1);
buttonTipPredefined(button15, 0.15);
buttonTipPredefined(button25, 0.25);
buttonTipPredefined(button50, 0.5);

//Function to refresh tip value

function refreshTip() {
  if (customTip1.value != customTip1.defaultValue) {
    currentTipPercentage = customTip.value;
  }

  logStatus();
}

//Function for custom tip button

function buttonCustomTip(customTip) {
  customTip.addEventListener("click", () => {
    logStatus();

    customTip.value = " ";
  });

  customTip.addEventListener("mouseleave", refreshTip);

  container.addEventListener("click", refreshTip);
}

//Invoke buttonCustomTip function for custom button

buttonCustomTip(customTip1);

//Function for calculate button

function calculateResult(button) {
  button.addEventListener("click", () => {
    bill = Number(bill__input.value);
    bill = tip__total_calculated = bill * currentTipPercentage;
    tip__person_calculated = tip__total_calculated / people;
    tip__person.textContent = tip__person_calculated.toFixed(2);

    amount__person_calculated = bill / people + tip__person_calculated;
    amount__person.textContent = amount__person_calculated.toFixed(2);

    logStatus();
  });
}

calculateResult(buttonCalculate);

//Function for tip buttons with fixed value

function buttonTipPredefined(button, tipValue) {
  button.addEventListener("click", () => {
    button.classList.add("button__clicked");

    let bill = document.getElementById("bill").value;

    let people = document.getElementById("people").value;

    currentTipPercentage = tipValue;
    tip__total_calculated = bill * currentTipPercentage;
    tip__total_calculated = tip__total_calculated.toFixed(2);

    logStatus();
  });
}

function logStatus() {
  console.log("Bill value: " + bill);
  console.log("People: " + people);
  console.log("Tip " + currentTipPercentage);
  console.log("Total tip value: " + tip__total_calculated);
  console.log("Total tip value per person: " + tip__person_calculated);
  console.log("Total amount per person: " + amount__person_calculated);
}
