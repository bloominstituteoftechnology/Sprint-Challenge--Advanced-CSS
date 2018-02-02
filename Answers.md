1. If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?
    - It's a language that allows you to code in a way similar to CSS, but with more powerful built-in features, and then convert that file into classical CSS.
2. What is the command in node package manager (npm) to install LESS globally on your computer?
    - npm install -g less
3. Please provide an example of a mixin you have used in a project this week.
    - This is a parametric mixin:
        ```less
        .opacity (@opacity: 0.5) {
	        -webkit-opacity: 	@opacity;
	        -moz-opacity: 	@opacity;
	        opacity: 		@opacity;
        }
4. What is the difference between fixed layout, adaptive layout, and fluid layout?
    - A fixed layout does not change in any way when the window size or zoom levels are adjusted. Adaptive layouts change according to screen size, and so a site could, for example, look different on a mobile device than on a laptop. A fluid layout is one which changes based on percentages and breakpoints rather than on breakpoints alone, like adaptive layouts but even more versatile.
5. Why do we need to use the CSS property max-width in a responsive website?
    - If you set a max-with, you are then free to use width percentages within that field of play, allowing you to operate in an entirely fluid, percent-based manner.