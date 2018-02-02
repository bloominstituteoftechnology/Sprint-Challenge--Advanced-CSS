## Answers

1. **If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?**  
- A preprocessor is sort of like a translator. You put in code, and the preprocessor translates it into CSS. This allows you to use variables, so you can easily make changes across the entire project by changing only one line, nesting to keep your code organized, and mixins to increase reuseability of code.

2. **What is the command in node package manager (npm) to install LESS globally on your computer?**  
- sudo npm install -g less

3. **Please provide an example of a mixin you have used in a project this week.**  
A button creator. It takes the height, width and color to create a new button with those properties.
```
.button-creator (@height, @width, @color) {
	height: @height;
	width: @width;
	background-color: @color;
}
```

4. **What is the difference between fixed layout, adaptive layout, and fluid layout?**  
- Fixed layouts do not change according to the size of the viewport. It has a fixed width in pixels and will have a horizontal scrollbar.
- Adaptive layouts change the layout at breakpoints. So you can set them to change when the width of the viewport passes that value.
- Fluid layout changes based on percentage of the maximum width of the content. So when the viewport gets narrower, so does the content. 

5. **Why do we need to use the CSS property max-width in a responsive website?**  
- You want to set the maximum width for the content so that even on really big screens the content will look good. If you don't set a max width, the content would take up the entire width of the screen on larger screens and it's harder to read.