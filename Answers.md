1. What is the difference between an adaptive website and a fully responsive website?

Adaptive design is when we adjust the layout of our site based on pre-specified screen widths using media queries. However, it also leaves us with a fairly rigid structure that does not evolve inside of those parameters. In contrast, fully responsive design incorporates adaptive features like media queries and marries them to fluid design that expands and contracts horizontally (through percentage, REM, EM, VW, and VH-based units) as the viewport size changes. This allows our site to "snap" to the screen size of a variety of different devices and look great.

2. Describe what it means to be mobile first vs desktop first.

Mobile first means that the design team and the developers are not only prioritizing mobile development (and the larger mobile market) over desktop but also developing for it first. In full stack development, this takes the form of things like putting mobile css styles at the top of the cascade of styles. It would then lead into tablet and then finally desktop styles through the use of min-width media queries. In contract, desktop first is when the desktop styles are at the top of the cascade in the stylesheet and gradually go to tablet and finally mobile layout through the use of max-width media queries.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?

When we set html to be font-size 62.5%, we are doing so because 62.5% of the font in the user agent stylesheet (usually a default of 16px) is 10px. This sets the default font size of 1rem to equal 10px, affording us the ability to multiply rems by 10 for easy font sizing. This makes calculations very easy for font-sizing when using rem while also making the site font accessible in case the user changes their default font-sizing.

4. How would you describe preprocessing to someone new to CSS?

Preprocessing opens up a new world of styles for us when creating websites; in addition to variables, functions, reusable classes (mixins), and nested styles, using a preprocessor allows us to optimize and minimize our code. It allows css to become much more powerful and yet also much more simple at the same time.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

My favorite concept in preprocessing is probably modularizing code components. I love the “let’s just grab that off the shelf” mentality of compartmentalizing navigation, footers, variables, etc. In contrast, I had a really hard time yesterday with animations using parametric mixins; I would say that I need to practice parametric mixins more since I have to spend lots of time thinking them through whenever I write one.
