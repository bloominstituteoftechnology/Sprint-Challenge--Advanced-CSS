1. What is the difference between an adaptive website and a fully responsive website?
An adaptive website will adjust the contents and layout of the screen based on the viewport size. However, the sizing of the contents on the screen my not be fluid. For example, you may get a horizontal scroll bar if a user is on a desktop and shrinks the web browser window to, say, 700px.

A fully responsive website is both fluid and adaptive. It will adapt to the viewport size (maybe you'll have breakpoints set up so that the website layout loads differently for the standard desktop viewport vs standard tablet viewport vs standard phone viewport). It will also be fluid, so that if the window shrinks, but maybe not enough to hit a breakpoint, the content will compact to whatever size the window is.

2. Describe what it means to be mobile first vs desktop first.
Mobile first vs desktop first is describing if you are developing your website with the mobile site or desktop site in mind first. If you're doing desktop first, you will have media queries with max-widths set up as breakpoints. If you're doing mobile first, you will have the same media queries for breakpoints, except they'll be min-widths.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?
It allows for easy conversion of font sizes through the website by making the default font size 10px. The conversions can be done in your head rather than looking at conversion tables. For example, if you wanted the internet-standard font size, you just need to set 1.6rem (1.6 rem * 10 = 16px).

4. How would you describe preprocessing to someone new to CSS?
Preprosessing is a way to take code that is easier and quicker to write than CSS, and convert it into CSS that is readable by modern internet browsers. For example, you write your LESS code, which is quicker and easier to write than pure CSS. Then you compile it in the preprocessor, which converts it into CSS. This CSS is then loaded by the browser.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
I just like how it's easier to see what changes you're making because how the LESS code is layed out. It also tells you if you've made an error someone.
I had trouble initially because we just learned how to write in CSS. Then all of a sudden we were writing code that does essentially the exact same thing, but in a little different format. Eventually it clicked, though.