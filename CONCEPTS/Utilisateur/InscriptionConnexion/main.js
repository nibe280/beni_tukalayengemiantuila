document.getElementById("signup").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("status").textContent = "✅ Inscription réussie !";
});

document.getElementById("login").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("status").textContent = "✅ Connexion réussie !";
});
