const imghead = document.getElementById('bgtxth1');
const imgparagraph = document.getElementById('bgtxtp');
document.getElementById('submitbtn').addEventListener('click', function(e){
    e.preventDefault();
    imghead.innerHTML = `Thanks, ${document.getElementById('box1').value}`;
    imghead.style.display = "flex";
    imghead.style.justifyContent = "center";
    imgparagraph.innerHTML = `You will receive updates at your email: ${document.getElementById('box2').value}.`;
    imgparagraph.style.display = "block";
    document.getElementById('username').innerHTML = `Hi, ${document.getElementById('box1').value}`;
    // return false;
});
