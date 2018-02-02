## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1. If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?

A CSS preprocessor is the Grammerly (online proofreader) for your coding. 

2. What is the command in node package manager (npm) to install LESS globally on your computer?

```npm install -g less ``` or ```sudo npm i -g less```

3. Please provide an example of a mixin you have used in a project this week.

```
.rotate (@deg) {
	-webkit-transform: rotate(@deg);
	-moz-transform: 	 rotate(@deg);
	-ms-transform: 		 rotate(@deg);
	-o-transform: 		 rotate(@deg);
}
```
4. What is the difference between fixed layout, adaptive layout, and fluid layout?

**Fixed layout** - *has pixels and a set length.*

**Adaptive layout** - *has a maximum set length (max-width) but takes over a 100% of that space.*

**Fluid layout** - *is marked with percentages, which makes the layout adjust its size as the screen changes.*

5. Why do we need to use the CSS property max-width in a responsive website?

Even though it's good to have a fluid measurement (percentages, etc), the width of 100% can span the div throughout the page. With a max-width, the div can be set to a space and can adjust to the screen size. 