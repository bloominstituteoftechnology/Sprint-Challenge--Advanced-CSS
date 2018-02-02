1. If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?
> A preprocessor is a compiler that compiles css from a simpler more meaningful and easily readable language like SASS or LESS into a CSS file that is readable by the browser.
2. What is the command in node package manager (npm) to install LESS globally on your computer?
> `npm install -g lessc`
3. Please provide an example of a mixin you have used in a project this week.
```less
.pixToPer (@pixels) {
    width: (@pixels / @container-width) * 100%;
}
```
> this is one I wrote for myself to help convert pixel width properteries from the original design to percentages for a fluid design.
4. What is the difference between fixed layout, adaptive layout, and fluid layout?
* **Fixed** - a layout that is based on exact pixel widths and is designed to stay the same regardless of the width of the viewport.
* **Adaptive** - a layout that uses media queries to create break points where the design can be refactored to look like it was designed for different viewport sizes. Typically these breakpoints would be around maximum laptop screen size, maximum tablet size, and maximum phone size using the max-width property, but more break points can be used. You could also you minimum widths to design a site for mobile first.
* **Fluid** - a layout that is based on percentage widths so that the design looks good regardless of the viewport size.  It takes an adaptive design and tries to make sure the design flows from one breakpoint to the next. 
5. Why do we need to use the CSS property max-width in a responsive website?
> the max-width property defines the maximum width for a block or container or image within the design. For example, a maximum width of 1000px would allow a block to get as wide as 1000px even if the screen was well over 1000px wide, but the block could get smaller than 1000px as the environment changes, just not larger. For example this same block with the width set at 80% would be around 800px wide if the screen 999px wide since the image could no longer display as 1000px.
