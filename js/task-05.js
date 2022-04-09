const inputValue = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

inputValue.addEventListener("input", (e) => {
  if (e.currentTarget.value.length == 0) {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = e.currentTarget.value;
  }
});
