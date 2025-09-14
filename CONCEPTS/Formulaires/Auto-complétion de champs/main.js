const fruits = ["Pomme", "Poire", "Orange", "Banane", "Fraise", "Kiwi"];
const input = document.getElementById("search");
const list = document.getElementById("suggestions");

input.addEventListener("input", () => {
  const value = input.value.toLowerCase();
  list.innerHTML = "";
  if (value) {
    const filtered = fruits.filter(f => f.toLowerCase().includes(value));
    filtered.forEach(fruit => {
      const li = document.createElement("li");
      li.textContent = fruit;
      li.addEventListener("click", () => {
        input.value = fruit;
        list.innerHTML = "";
      });
      list.appendChild(li);
    });
  }
});
