const btn = document.getElementById("notifyBtn");
const container = document.getElementById("notifications");

btn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.className = "notif";
  div.textContent = "🔔 Nouvelle notification !";
  container.appendChild(div);
  setTimeout(() => div.remove(), 3000);
});
