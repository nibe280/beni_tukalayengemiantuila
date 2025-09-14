const form = document.getElementById("commentForm");
const input = document.getElementById("commentInput");
const container = document.getElementById("comments");

form.addEventListener("submit", e => {
  e.preventDefault();
  if (!input.value.trim()) return;
  const div = document.createElement("div");
  div.className = "comment";
  div.textContent = input.value;
  container.appendChild(div);
  input.value = "";
});
