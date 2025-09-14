const products = [
  { id: 1, name: "Chaussures", price: 50, img: "https://picsum.photos/150?1" },
  { id: 2, name: "T-shirt", price: 20, img: "https://picsum.photos/150?2" },
  { id: 3, name: "Casquette", price: 15, img: "https://picsum.photos/150?3" }
];

const catalogue = document.getElementById("catalogue");
products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `<img src="${p.img}" alt="${p.name}">
                   <h3>${p.name}</h3>
                   <p>${p.price}€</p>
                   <button>Ajouter au panier</button>`;
  catalogue.appendChild(div);
});
