const categories = document.querySelectorAll("#categories li.item");
console.log("Number of categories:", categories.length);

for (let category of categories) {
  console.log("Category:", category.querySelector("h2").innerText);
  console.log("Elements:", category.querySelectorAll("ul > li").length);
}
