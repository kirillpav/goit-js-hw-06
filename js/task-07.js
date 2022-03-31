const fzControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const size = text.style.fontSize;

fzControl.oninput = function () {
  size = fzControl.value;
};
