window.onload = init;

function init() {
    const nav = document.querySelector(".nav-section");
    window.addEventListener('scroll',function(e) {
    nav.classList.add("lighten-nav");
    if(window.scrollY === 0) nav.classList.remove("lighten-nav");
    })
}

