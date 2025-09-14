const btn = document.getElementById("btn");

btn.addEventListener("click", () => alert("✅ Bouton activé !"));
btn.addEventListener("keypress", e => {
  if (e.key === "Enter" || e.key === " ") {
    btn.click();
  }
});
