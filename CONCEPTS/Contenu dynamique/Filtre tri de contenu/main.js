const products = [
  { name: "Produit A", price: 30 },
  { name: "Produit B", price: 70 },
  { name: "Produit C", price: 45 }
];
const list = document.getElementById("products");
const filter = document.getElementById("filter");

function render(items) {
  list.innerHTML = "";
  items.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.name} - ${p.price}€`;
    list.appendChild(li);
  });
}

filter.addEventListener("change", () => {
  if (filter.value === "cheap") render(products.filter(p => p.price < 50));
  else if (filter.value === "expensive") render(products.filter(p => p.price >= 50));
  else render(products);
});

render(products);
