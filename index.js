var btn = document.querySelector(".btn");
var form = document.querySelector(".form");

btn.addEventListener("click", function(e){
    form.classList.remove("hide");
    btn.classList.add("hide");
});