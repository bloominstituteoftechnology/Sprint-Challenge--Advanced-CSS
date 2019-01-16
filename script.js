let imghead = document.getElementById('bgtxth1');
let imgparagraph = document.getElementById('bgtxtp');
let name = document.getElementById('box1');
let email = document.getElementById('box2');

function flexcenter(component) {
    component.style.justifyContent = "center";
    component.style.display = "flex";
    component.innerHTML = (name.value.length < 20 ? `Thanks, ${name.value}` : `Thanks for signing up!`);
}

function block(component) {
    component.style.display = "block";
    component.innerHTML = `Hi, ${name.value}`;
}

document.getElementById('submitbtn').addEventListener('click', function(e){
    flexcenter(imghead);
    block(imgparagraph);
    imgparagraph.innerHTML = `You will receive updates at your email: ${email.value}.`;
    document.getElementById('username').innerHTML = `Hi, ${name.value}`;
});
