const modal = document.getElementById("modal");
const btn = document.getElementById("modalBtn");
console.log(btn);
const closeBtn = document.getElementById("closeModalBtn");
console.log(closeBtn);

btn.onclick = function() {
  modal.style.display = "block";
};

closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
