const button = document.getElementById("btn");
const text = document.getElementById("text");

let isOpen = false;

button.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    text.textContent = "Otevřeno";
  } else {
    text.textContent = "Zavřeno";
  }

  if (isOpen) {
    text.textContent = "Otevřeno";
    text.style.color = "green";
  } else {
    text.textContent = "Zavřeno";
    text.style.color = "red";
  }
});
