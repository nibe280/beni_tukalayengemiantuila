const form = document.getElementById("validateForm");
const error = document.getElementById("error");

form.addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email.includes("@")) {
    error.textContent = "❌ Email invalide";
    return;
  }
  if (password.length < 6) {
    error.textContent = "❌ Mot de passe trop court (min 6 caractères)";
    return;
  }
  error.textContent = "✅ Formulaire valide !";
});
