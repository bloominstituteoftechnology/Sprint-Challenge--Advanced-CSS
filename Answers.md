1. If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?
	-I was actually just describing this to my dad. I explained a preprocessor as an extra file (or set of files) that allows more specific selecting of HTML elements for the purpose of styling, and has extra functionality that CSS does not. I then went on to explain nesting, and how it allowed for only 1 HTTP request.

2. What is the command in node package manager (npm) to install LESS globally on your computer?
	- "npm install -g less"

3. Please provide an example of a mixin you have used in a project this week.
	- In one of our assignments, I used an opacity mixin that was predeclared in a seperate file. The mixin took an @opacity parameter and set its value to ".5". I placed this inside of an image's CSS styling, which made it partially transparent by adding ".opacity" in the style block.

4. What is the difference between fixed layout, adaptive layout, and fluid layout?
	- A fixed layout is one that does not adjust based on the viewport size--the size values are fixed and stay at their assigned values no matter what screen size it is they're being viewed on; an adaptive layout is juxtaposed to a fixed layout in that it changes based on the size of the display/viewport it's being viewed on, usually by width; finally, a fluid layout is one that behaves much like an adaptive one--in that is also adapts to the size of the screen; however, it is based around relative units of measurements, such as ems and rems, rather than pixels.

5. Why do we need to use the CSS property max-width in a responsive website?
	- In order to resize devices the website for devices that have different screen widths. You need to make sure all the content stays vertically in line on the device (i.e. you don't want a scroll bar to appear).