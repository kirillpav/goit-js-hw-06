const input = document.querySelector("#validation-input");

const targetLength = document.querySelector("[data-length='6']");

input.addEventListener("focus", (e) => {
  if ("data-length" === true) {
    e.target.classList.add("valid");
  } else {
    e.target.classList.add("invalid");
  }
});
