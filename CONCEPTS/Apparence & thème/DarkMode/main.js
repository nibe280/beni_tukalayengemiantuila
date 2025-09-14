const btn = document.getElementById("toggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btn.textContent = document.body.classList.contains("dark")
    ? "☀️ Mode clair"
    : "🌙 Mode sombre";
});
