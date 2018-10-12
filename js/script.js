const signupBtn = document.getElementById('signupBtn');
signupBtn.addEventListener('click', function() {
  document.getElementById('signupForm').style.display= 'block';
  this.style.display = 'none';
});

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function(){
  alert('Thank you for signing up!');
  document.getElementById('signupBtn').style.display = 'block';
  document.getElementById('signupForm').style.display = 'none';
})