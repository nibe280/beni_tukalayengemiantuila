const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = "✅ Message envoyé avec succès !";
});
