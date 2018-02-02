1. If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?

  A preprocessor allows the use of frameworks that can be used to write much neater, more legible code that is then translated back into regular CSS by the preprocessor.

2. What is the command in node package manager (npm) to install LESS globally on your computer?

  npm install -g --save less

3. Please provide an example of a mixin you have used in a project this week.

  @mariner = #2C6CD8;

  .bordered {
    border: solid @mariner 1px;
  }

4. What is the difference between fixed layout, adaptive layout, and fluid layout?

  Fixed layout stays the same Y x Z size for all items on the layout regardless of resizing of browser. Adaptive layout changes sizes of things based on breakpoints for different device possibilities. Fluid layouts change with every resizing of the browser to best fit the items on the page. 

5. Why do we need to use the CSS property max-width in a responsive website?

  To create breakpoints at which the viewport is big enough to accommodate more items.