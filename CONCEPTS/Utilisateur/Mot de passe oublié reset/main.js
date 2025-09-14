const form = document.getElementById("resetForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
  e.preventDefault();
  msg.textContent = "📧 Email de réinitialisation envoyé !";
});
