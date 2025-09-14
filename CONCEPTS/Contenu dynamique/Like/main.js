let likes = 0, dislikes = 0;
const likeBtn = document.getElementById("like");
const dislikeBtn = document.getElementById("dislike");

likeBtn.addEventListener("click", () => {
  likes++;
  document.getElementById("likeCount").textContent = likes;
});
dislikeBtn.addEventListener("click", () => {
  dislikes++;
  document.getElementById("dislikeCount").textContent = dislikes;
});
