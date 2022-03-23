const valueEuro = document.getElementById("valueEuro");
const result = document.getElementById("result");
const buttonChange = document.getElementById("convert-btn");
const currency = document.getElementById("currency");

const rateInput = document.getElementById("new-change");

const rateDefault = document.getElementById("default-rate");

const change = 131.62;

rateDefault.innerText = change;

valueEuro.addEventListener("input", (e) => {
  e.preventDefault();
  const changeCalculate = (valueEuro.value * change).toFixed([2]);
  result.innerText = changeCalculate;
  currency.innerText = "YEN";
});
