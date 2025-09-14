const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const status = document.getElementById("status");

loginBtn.addEventListener("click", () => {
  status.textContent = "✅ Connecté";
  loginBtn.style.display = "none";
  logoutBtn.style.display = "inline";
});

logoutBtn.addEventListener("click", () => {
  status.textContent = "❌ Déconnecté";
  loginBtn.style.display = "inline";
  logoutBtn.style.display = "none";
});
