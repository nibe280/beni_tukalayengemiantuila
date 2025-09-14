const orders = [
  { id: 1, product: "Chaussures", price: 50 },
  { id: 2, product: "T-shirt", price: 20 }
];

const list = document.getElementById("orders");
orders.forEach(o => {
  const li = document.createElement("li");
  li.textContent = `Commande #${o.id} - ${o.product} (${o.price}€)`;
  list.appendChild(li);
});
