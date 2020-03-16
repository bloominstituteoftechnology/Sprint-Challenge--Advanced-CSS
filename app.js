// Sign Up pop up.
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// toggle button
function openForm() {
  var x = document.getElementById("myForm");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
