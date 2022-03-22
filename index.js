const valueEuro = document.getElementById("valueEuro");
const result = document.getElementById("result");
const buttonChange = document.getElementById("convert-btn");
const currency = document.getElementById("currency");
const newResult = document.getElementById("new-result");
const rateInput = document.getElementById("new-change");
const newCurrency = document.getElementById("new-currency");
const rateDefault = document.getElementById("default-rate");

const change = 131.62;

rateDefault.innerText = change;

valueEuro.addEventListener("input", (e) => {
  e.preventDefault();
  const changeCalculate = (valueEuro.value * change).toFixed([2]);
  result.innerText = changeCalculate;
  currency.innerText = "YEN";
});

buttonChange.addEventListener("click", (e) => {
  e.preventDefault();
  const newChangeCalculate = (valueEuro.value * rateInput.value).toFixed([2]);
  newResult.innerText = newChangeCalculate;
  console.log(newChangeCalculate);
  newCurrency.innerText = "YEN";
});
