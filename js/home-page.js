const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("navLinks");

window.onscroll = () => 
{
	if(window.innerWidth <= 500)
	{
		if(document.body.scrollTop > 90 || document.documentElement.scrollTop > 90)
		{
			navLinks.style.display = "none";
		}
		else
		{
			navLinks.style.display = "flex";
		}
		
	}
}

navbar.addEventListener("mouseenter", (event) => 
{

	if(window.innerWidth <= 500)
	{
		navLinks.style.display = "flex";

		setTimeout( ()=>{
			navLinks.style.display = "none";
		}, 5000);	
	}
}, false)