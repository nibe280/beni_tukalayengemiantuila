const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1035/600/400"
];
let index = 0;
const img = document.getElementById("slide");

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % images.length;
  img.src = images[index];
});
document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  img.src = images[index];
});
