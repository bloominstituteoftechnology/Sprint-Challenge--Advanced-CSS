window.onload = init;

function init() {
    const nav = document.querySelector(".nav-section");
    window.addEventListener('scroll',function(e) {
    nav.classList.add("lighten-nav");
    if(window.scrollY === 0) nav.classList.remove("lighten-nav");
});

    const modal = document.querySelector(".modal");
    setTimeout(function(){
        modal.style.display = 'block';
        modal.style.transition = '5s ease-in';
        // modal.classList.add("modal-ease-in");
    },2000)

    const close = document.querySelector(".close");
    close.addEventListener('click',function(){
        modal.style.display = 'none';
        modal.style.transition = '1s ease-out';
    })
}

