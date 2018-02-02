## Self-Study-Questions: Responsive-Less

1. __If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?__
    Pre-processors add advanced features to CSS, they make our CSS more reusable, and maintainable.

2. __What is the command in node package manager (npm) to install LESS globally on your computer?__
    ```
    Yarn global add less
    ```

3. __Please provide an example of a mixin you have used in a project this week.__
    ```
    .opacity (@opacity: 0.8) {
      -webkit-opacity:  @opacity;
      -moz-opacity:     @opacity;
      opacity:    @opacity;
    }
    ```
4. __What is the difference between fixed layout, adaptive layout, and fluid layout?__
  A fixed page layout will not change based on the browsers width.
  An adaptive page layout relies on CSS media queries to trigger changes in the layout when specific widths are reached. Adaptive layouts act as several different fixed layouts that get defined at specific media queries.
  Fluid page layouts use relative unit measurements to fill the width of the page to a certain percentage regardless of the width of the browser.

5. __Why do we need to use the CSS property max-width in a responsive website?__
  The max-width property ensures that elements will not expand outside the ‘max-width’ as the browser width changes. This is important because a responsive website is expected to ‘respond’ to things like user behavior as well as changing screen size.