const note = document.getElementById("note");
const save = document.getElementById("save");
const clear = document.getElementById("clear");

// Charger la note sauvegardée
note.value = localStorage.getItem("myNote") || "";

save.addEventListener("click", () => {
  localStorage.setItem("myNote", note.value);
  alert("✅ Note sauvegardée !");
});

clear.addEventListener("click", () => {
  localStorage.removeItem("myNote");
  note.value = "";
});
