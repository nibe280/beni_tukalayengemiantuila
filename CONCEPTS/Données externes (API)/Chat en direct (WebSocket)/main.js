const chatBox = document.getElementById("chatBox");
const input = document.getElementById("msg");
const sendBtn = document.getElementById("send");

function addMessage(text, cls) {
  const div = document.createElement("div");
  div.className = "msg " + cls;
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener("click", () => {
  if (!input.value.trim()) return;
  addMessage(input.value, "user");
  setTimeout(() => addMessage("🤖 Réponse auto : " + input.value, "bot"), 1000);
  input.value = "";
});
