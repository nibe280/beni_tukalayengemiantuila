const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

form.addEventListener("submit", e => {
  e.preventDefault();
  if (input.value.trim() === "") return;
  const li = document.createElement("li");
  li.textContent = input.value;
  const del = document.createElement("button");
  del.textContent = "❌";
  del.addEventListener("click", () => li.remove());
  li.appendChild(del);
  list.appendChild(li);
  input.value = "";
});
