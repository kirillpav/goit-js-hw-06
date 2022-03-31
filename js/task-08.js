const form = document.querySelector(".login-form");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (email == "") {
    alert("All fields must be filled in ");
  }

  if (password.length == "") {
    alert("All fields must be filled in ");
  }

  // this is form submit
  const formElements = event.currentTarget.elements;
  const user = {
    email: formElements.email.value,
    password: formElements.password.value,
  };

  console.log(user);
}
