const imghead = document.getElementById('bgtxth1');
const imgparagraph = document.getElementById('bgtxtp');
document.getElementById('submitbtn').addEventListener('click', function(e){
    e.preventDefault();
    imghead.innerHTML = (document.getElementById('box1').value.length < 20 ? `Thanks, ${document.getElementById('box1').value}` : `Thanks for signing up!`);
    imghead.style.display = "flex";
    imghead.style.justifyContent = "center";
    imgparagraph.innerHTML = `You will receive updates at your email: ${document.getElementById('box2').value}.`;
    imgparagraph.style.display = "block";
    document.getElementById('username').innerHTML = `Hi, ${document.getElementById('box1').value}`;
    console.log;
    // return false;
});
