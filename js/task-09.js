function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector(".color");

const btn = document.querySelector("button");

btn.addEventListener("click", function onClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();

  color.textContent = getRandomHexColor();
});
