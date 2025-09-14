const range = document.getElementById("size");
const text = document.getElementById("text");

range.addEventListener("input", () => {
  text.style.fontSize = range.value + "px";
});
