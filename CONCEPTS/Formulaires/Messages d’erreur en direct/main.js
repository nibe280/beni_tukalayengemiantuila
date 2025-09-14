const username = document.getElementById("username");
const error = document.getElementById("error");

username.addEventListener("input", () => {
  if (username.value.length < 3) {
    error.textContent = "❌ Nom trop court";
  } else {
    error.textContent = "";
  }
});
