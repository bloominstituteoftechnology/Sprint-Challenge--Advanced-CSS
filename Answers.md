1. A CSS preprocessor is essentially a language that extends the functionality and usability of CSS. Standard CSS stand be written whilst taking advantage of various other features the preprocessor has like variables, functions, 'mixins' and a more flexible syntax. The code that is written with the preprocessor can then be easily compiled into a standard CSS file.

2. `$ npm install -g less`

3. An example of a mixin I used this week would be `.scale`. I used this to easily make an entire section (in this case the `Call To Action`) to become smaller when hitting a certain media query breakpoint. The section contained an element, button and image so by simply using a `.scale` mixin on the parent container I was able to shrink the entire section proportionally. 

4. **Fixed layout:** Will remain the same regardless of what device/window size it is viewed on. It will require horizontal scrolling if viewed somewhere that doesn't match the platform it was designed for.

**Adaptive layout:** Has predefined screen sizes that the layout of the website will adapt to when viewed on a device matching the criteria given.

**Fluid layout:** Uses percentages as widths for so that the layout will adapt to the resolution of the users screen size.

5. Max-width is used on an element with a percentage as a width in order to stop that element from extending beyond a certain defined pixel measurement. This is needed to keep the layout looking as intended even when viewed on very large window sizes.