const wishlist = document.getElementById("wishlist");
const favs = ["Chaussures", "Montre", "Casquette"];

favs.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item + " 💖";
  wishlist.appendChild(li);
});
