## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1. If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?

* A preprocesser is a way to integrate global mixins and variables, as well as implement nesting similar to how code is structured.  Mixins are essentially styling functions that allow for a default styling of similar elements, while also allowing arguments that can produce a one-off of that default style.  Variables allow for ambiguity to taken away and keep a uniform color for example.

2. What is the command in node package manager (npm) to install LESS globally on your computer?

* npm install -g less 

3. Please provide an example of a mixin you have used in a project this week.

* I used a mixin to scale the images appropriately with the viewport.

4. What is the difference between fixed layout, adaptive layout, and fluid layout?

* Fixed layout: Doesn't respond to different screen sizes.
* Adaptive layout: Responds to devices via media queries.  Layout is arranged at different sizes.
* Fluid layout: Responds to devices via media queries.  Width of elements are resized.

5. Why do we need to use the CSS property max-width in a responsive website?

* Max-width makes sure that elements don't get wider than desired.  Used in media queries, it provides breakpoints for different devices.