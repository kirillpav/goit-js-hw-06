const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elIngredient = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const elLi = document.createElement("li");
  elLi.innerText = ingredient;
  elLi.className = "item";
  elIngredient.appendChild(elLi);
});
