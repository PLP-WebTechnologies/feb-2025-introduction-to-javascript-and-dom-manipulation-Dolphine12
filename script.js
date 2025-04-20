// Change text content
const textBtn = document.getElementById("changeTextBtn");
const description = document.getElementById("description");

textBtn.addEventListener("click", () => {
  description.textContent = "The text has been updated dynamically with JavaScript!";
  description.style.color = "blue";
  description.style.fontWeight = "bold";
});

// Toggle extra info section
const toggleBtn = document.getElementById("toggleElementBtn");
const extraInfo = document.getElementById("extra-info");

toggleBtn.addEventListener("click", () => {
  if (extraInfo.style.display === "none") {
    extraInfo.style.display = "block";
  } else {
    extraInfo.style.display = "none";
  }
});
