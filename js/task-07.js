const fzControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const size = text.style.fontSize;

// fzControl.oninput = function () {
//   fzControl.fontSize = fzControl.value;
// };

fzControl.addEventListener("input", (e) => {
  // text.fontSize = fzControl.value;
  text.style.fontSize = fzControl.value + "px";
  console.log(fzControl.value);
});
