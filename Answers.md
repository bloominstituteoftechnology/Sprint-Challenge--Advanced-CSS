1.If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?

A css preprocessor is a program that takes in the code with a minor difference in syntax, to make it more readable and easier to reuse,  and turns it into css code.

2.What is the command in node package manager (npm) to install LESS globally on your computer?

sudo npm install -g less

3.Please provide an example of a mixin you have used in a project this week.

.rotate (@deg) {
	-webkit-transform: rotate(@deg);
	-moz-transform: 	 rotate(@deg);
	-ms-transform: 		 rotate(@deg);
	-o-transform: 		 rotate(@deg);
}

4.What is the difference between fixed layout, adaptive layout, and fluid layout?

Fixed layout is when you hardcode px values to properties like width and margin.
Adaptive layout is using media queries
Fluid layout is using percentages.

5.Why do we need to use the CSS property max-width in a responsive website?

So that the content doesn’t go across the whole screen, in a bigger size display.
