1. What is the difference between an adaptive website and a fully responsive website?

    Adaptive website can grow and shrink with the width of the viewport, while fully responsive websites have breakpoints that allow the CSS
    to respond differently across different types of devices.

2. Describe what it means to be mobile first vs desktop first.

    Mobile first means you would design the site for mobile first, and then use media query breakpoints to build outwards towards tablet and desktop.
    Desktop first is the opposite, where you would design the desktop layout first and then use media queries to build your way down to tablet and mobile.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?
    This normalizes the intrinsic browser font size of 16px down to 10px (16*.625 = 10).  This makes the pixel value 10x larger than the REM as opposed to 16x, which makes math/conversions easy to understand and work with.

4. How would you describe preprocessing to someone new to CSS?
    Preprocessing is the use an external compiler to bring in code from a different syntax and convert it into CSS.  This allows us to break our code into multiple files for organization as well as to use other tools such as variables, functions, mixins, etc. to make our coding life easier and more organized.  Once compiled, everything is converted to CSS. 


5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
    My favorite concepts are nesting, importing files, variables, and mixins.  I havent ran into much trouble but I have had the least amount of practice with functions.