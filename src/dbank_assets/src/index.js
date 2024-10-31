import { dbank } from "../../declarations/dbank";

// Function to reload account balance
windows.addEventListener("load", async function() {
  update();  
});

document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const button = e.target.querySelector("#submit-btn");

  // Function to input and withdrawal balance account
  const inputAmount = parseFloat(documet.getElementById("input-amount").value)
  const outputAmount = parseFloat(documet.getElementById("withdrawal-amount").value)

  button.setAttribute("disabled", true);

  if(document.getElementById("input-amount").value.length != 0) {
    await dbank.topUp(inputAmount);
  };

  const name = document.getElementById("name").value.toString();


  // Interact with foo actor, calling the greet method
  const greeting = await dbank.greet(name);

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;

  return false;
});

// Function to round showed value
async function update() {
  const currentAmount = await dbank.checkBalance();
  document.getElementById("value").innerText =  Math.round(currentAmount * 100) / 100;
}
