let counterValue = document.querySelector("#value");

const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

buttonDecrement.addEventListener("click", (e) => {
  counterValue.innerHTML--;
});

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);

buttonIncrement.addEventListener("click", (e) => {
  counterValue.innerHTML++;
});

console.log(value);
