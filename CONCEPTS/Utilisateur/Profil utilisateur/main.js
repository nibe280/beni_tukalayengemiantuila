const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveBtn");
const editForm = document.getElementById("editForm");

editBtn.addEventListener("click", () => {
  editForm.style.display = "block";
});

saveBtn.addEventListener("click", () => {
  const name = document.getElementById("newName").value;
  const bio = document.getElementById("newBio").value;

  if (name) document.getElementById("username").textContent = name;
  if (bio) document.getElementById("bio").textContent = bio;

  editForm.style.display = "none";
});
