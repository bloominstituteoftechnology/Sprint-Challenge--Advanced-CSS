# Responsive design

## Questions

1. If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?
* A preprocessor is a program that is built on top of CSS that bring additional functionalities to the language.
2. What is the command in node package manager (npm) to install LESS globally on your computer?
* `npm install -g less`
3. Please provide an example of a mixin you have used in a project this week.
```javascript
.round-borders (@radius) {
  border-radius: @radius;
  -moz-border-radius: @radius;
  -webkit-border-radius: @radius;
}
```
4. What is the difference between fixed layout, adaptive layout, and fluid layout?
* Fixed layout has a wrapper that has a fixed width and the elements within either have a percent or fixed width. The main thing is the wrapper element is set to not change or move.
* Adaptive layout adjust to the size of specified viewports.
* Fluid layout the majority of the components inside have percentage widths, and thus adjust to the user’s screen resolution.
5. Why do we need to use the CSS property max-width in a responsive website?
* Using max-width will cause an element to not go below a certain width.
