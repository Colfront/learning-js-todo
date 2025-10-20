const taskBtn = document.getElementById("task-add");
const inputBlock = document.getElementById("task-input");
taskBtn.addEventListener("click", () => {
  inputBlock.classList.toggle("showBlock");
});

const input = document.querySelector("#task-input input");
const container = document.getElementById("task-container");
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = input.value.trim();
    if (value) {
      const newP = document.createElement("p");
      newP.textContent = value;
      container.appendChild(newP);
      input.value = "";
    }
  }
});
