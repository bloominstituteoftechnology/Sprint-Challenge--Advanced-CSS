1. What is the difference between an adaptive website and a fully responsive website?

  Adaptive design uses seperate layouts for each device type that it supports (typically mobile, tablet and desktop). It will can use static values like pixels because the layout is specfically for the device it's rendering on. Media queries play a big role in this type of design.

  Responsive design strictly uses relative units and one stylesheet for it's purposes. It can work well on any screen because relative units will scale appropriately. Relative units are based off the viewport rather than the window size. Types of relative units include rem, em and percentages.

2. Describe what it means to be mobile first vs desktop first.

  Mobile first starts with the screen at a mobile width (typically under 500px). In mobile first design media queries will target "min-width" and you apply styles ascendingly in correlation to the size of the screen, so 0-500px then 501-800px and finally 801px and larger. Desktop design first is the exact opposite, you will apply styles and media queries in a descinding manner in correlation to the window width of the page, so infinity-800px, 799-500px, 500-0px. Mobile first design *can result in fewer styling, but many projects in the real world will be desktop first as designers are often pressed for time and end up creating a desktop mockup before a tablet or mobile first mockup.

3. What does font-size: 62.5% in the html tag do for us when using rem units?

  This sets the initial font-size of 16px to 10px, and also make it easier to use rems for font-size because now everything has a base of 10 instead of 16, so 1.6rem would equal to 16px, and 1rem would now be 10px. This makes working with rems much easier on developers due to them having to do less math.

4. How would you describe preprocessing to someone new to CSS?

  Preprocessing is a way of taking in data in one format, compiling (or analyzing and chaning) said data, and outputting it in another format. We use preprocessing for CSS with various preprocessers such as .less and .sass. These preprocessers allows us to produce more powerful CSS and also saves us a great deal of time on larger projects. We can do nesting, variables, mixins, parametric mixins to create element styling "factories" by modulating the way an elements styles are applied, and even introduce conditions (specfically something called guards in .less), we can do things like string escapes which allow us to use strings assigned to variables, an example would be ~"(max-width: 500px)", this can now be use with the media query keyword. There are other things preprocessors can do as well.

  5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

    My favorite concept is parametric mixins because now I can easily create styles and apply them to an element without having to write the same code out with just slightly different values. I haven't had a chance to dive into guards yet, so I would say that guards in LESS are a trouble area for me right now.
