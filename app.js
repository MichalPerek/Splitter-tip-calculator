// LEFT SIDE OF THE CONTAINER

//Set default value for input
bill.defaultValue = 0;

//Clear default tip value on click
bill.addEventListener("click", () => {
  bill.value = " ";
});

//Tip buttons
const button5 = document.getElementById("button5");
const button10 = document.getElementById("button10");
const button15 = document.getElementById("button15");
const button25 = document.getElementById("button25");
const button50 = document.getElementById("button50");

//Custom tip amount
let tip = document.getElementById("tip");
tip.defaultValue = "Custom";

//Clear default tip % on click
tip.addEventListener("click", () => {
  tip.value = " ";
});

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

console.log(tip__person.value);

//Reset button

const reset = document.getElementById("reset");

//Variables

let tip__total_calculated;
let tip__person_calculated;
let amount__person_calculated;

//1St calculation

button5.addEventListener("click", () => {
  console.log("BILL amount:");
  let bill = document.getElementById("bill").value;
  console.log("People amount:");
  let people = document.getElementById("people").value;
  console.log("Total tip:");
  tip__total_calculated = bill * 0.05;
  console.log(tip__total_calculated);

  console.log("Tip per person:");
  tip__person_calculated = tip__total_calculated / people;
  tip__person.textContent = tip__person_calculated.toPrecision(2);
  console.log(tip__person_calculated);
  console.log("Total amount per person:");
  amount__person_calculated = bill / people + tip__person_calculated;
  amount__person.textContent = amount__person_calculated.toPrecision(2);
  console.log(amount__person_calculated);
});
