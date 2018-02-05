Questions

1. If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?
 
  A preprocessor is a program that lets you generate CSS from the preprocessor's own synatx that will add features that do not exist in pure
	css, such as variables, mixins and nesting that make CSS easier to maintain and readable. 


2. What is the command in node package manager (npm) to install LESS globally on your computer?

  npm install -g less

3. Please provide an example of a mixin you have used in a project this week.

  #product {
     color: lighten(#ffb6c1, 5%);
     &:hover {
       .rotate(0.5turn);
    }
  }

4. What is the difference between fixed layout, adaptive layout, and fluid layout?  

  A fixed layout has a wrappers that is a fixed width and the components inside it have either percentages or fixed widths. The container does not move so all screen resolutions will appear the same. 
	An adaptive layout adapt to the width of the browser at a specific points. In other words, the website is only concerned about the browser being a specific width, at which point it adapts the layout.
	In a fluid layout the majority of the components inside have percentage widths, and thus adjust to the user’s screen resolution.

5. Why do we need to use the CSS property max-width in a responsive website?
 	
 Max-width is helpful if you want to plan for your responsive site to be viewed on overly-large screens. If you think your design will expand poorly to match those larger screen sizes, you can set max-width to make it so your design will remain true to exactly what you want, as your elements will NOT grow past the value you assign to their max-widths.
