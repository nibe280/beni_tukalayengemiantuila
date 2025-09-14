const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      preview.innerHTML = `<img src="${reader.result}" alt="Photo de profil">`;
    };
    reader.readAsDataURL(file);
  }
});
