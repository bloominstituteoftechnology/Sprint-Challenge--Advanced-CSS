1) If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?
    A CSS preprocessor makes CSS more functional and organized, and it translates the code all into regular CSS in the end.

2) What is the command in node package manager (npm) to install LESS globally on your computer?
    npm install -g less

3) Please provide an example of a mixin you have used in a project this week.
    .opacity (@opacity: 0.5) {
      -webkit-opacity: 	@opacity;
      -moz-opacity: 		@opacity;
      opacity: 		@opacity;
    }
      You call opacity with .opacity(value) in whatever selector you want to change, and it will modify that item's transparency

4) What is the difference between fixed layout, adaptive layout, and fluid layout?
    A fixed layout stays the same no matter the width; an adaptive layout will adjust at certain points (usually media queries at particular widths in pixels); and a fluid layout will smoothly transitiion between the media queries of an adaptive layout.

5) Why do we need to use the CSS property max-width in a responsive website?
    There are alternatives, so we don't NEED to use max-width. However, it is the simplest approach when designing from desktop width to phone width because we can set the website to behave (change layout) in a certain way at a particular window width and below that particular window width.