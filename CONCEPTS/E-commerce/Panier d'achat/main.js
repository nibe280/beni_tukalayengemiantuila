const cart = [];
const list = document.getElementById("cart");
const totalEl = document.getElementById("total");

function renderCart() {
  list.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price}€`;
    list.appendChild(li);
    total += item.price;
  });
  totalEl.textContent = total;
}

document.getElementById("checkout").addEventListener("click", () => {
  alert("✅ Commande validée !");
});

cart.push({ name: "Chaussures", price: 50 });
cart.push({ name: "T-shirt", price: 20 });
renderCart();
