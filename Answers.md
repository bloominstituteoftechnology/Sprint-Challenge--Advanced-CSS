1. If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?
- A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don't exist in pure CSS, such as variable, mixin, nesting selector, and so on. These features make the CSS structure more readable and easier to maintain. SASS, LESS, Stylus, and PostCSS are the well known ones.

2. What is the command in node package manager (npm) to install LESS globally on your computer?
- npm install -g less

3. Please provide an example of a mixin you have used in a project this week.
- @media / .bordered ...

4. What is the difference between fixed layout, adaptive layout, and fluid layout?
- Fixed(static) layout has a fixed width in pixels. The ‘container’ of the website is programmed to not move (that’s where the name ‘static’ comes from). This width stays the same independently of which screen size or resolution the viewer has. 
- Adaptive layout means that there are several versions of the layout which are displayed based on the screen size of the viewer. Think of it as several fixed layout designs, layout A is displayed when the screen size is within size range N — NN.
- With fluid layout you specify sizes not in pixels, but in percentages. Meaning, if the screen size changes, the proportion of elements will stay the same.

5. Why do we need to use the CSS property max-width in a responsive website?
- Max-width make the layout fixed within size range N ~ NN, and it changed only when the next screen range is reached.
