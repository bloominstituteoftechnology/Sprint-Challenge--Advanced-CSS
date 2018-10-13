1. What is the difference between an adaptive website and a fully responsive website?

An adaptive website uses different layouts (e.g., desktop, mobile, tablet) and displays a predesigned layout based on the type of device used to access it. Fully responsive website uses one single layout that changes depending on certain criteria, typically size of view port. So one layout is used and displays differently based on criteria.

2. Describe what it means to be mobile first vs desktop first.

A mobile first desktop is designed to appear a certain way, assuming the viewport will be small (as it would on a mobile device). Media queries are designed so that if the screen expands to desktop size, it will change accordingly. Conversely, a desktop first version is designed with a larger view as the default. As the viewport shrinks to mobile size, it will change accordingly.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?

Default font size for most browsers is 16px. Setting font-size to 62.5% decreases this 16px default to 10px default. From there, rem units set a multiplier to that base 10px size. For example, 2rem would create a font-size that is 20px (10px x 2).

4. How would you describe preprocessing to someone new to CSS?

Preprocessing allows you to set styles in a more efficient format that mirrors HTML (i.e., parent-child nesting). Code then runs in the background to process this code into a CSS format that dictates how the site is displayed.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

Variables are my favorite concept, allowing you to apply global changes to numerous styles by changing one variable value. The concept that gives me most trouble may just be specificity. I feel I generally understand which code takes precedent through nesting, etc. but sometimes things don’t initially appear as I would expect.