1. What is the difference between an adaptive website and a fully responsive website?

An adaptive website is rigid and changes how it looks at specific viewport sizes, whereas a fully responsive website is both adaptive and fluid and looks good at any viewport size from desktop to phone.

2. Describe what it means to be mobile first vs desktop first.

Mobile first means designing a website that looks good for mobile users first using min-width on your media queries and then focusing on how it looks at higher viewport sizes, whereas desktop first design is made to look good for desktops first and uses max-width on media queries to control how it looks at smaller viewport sizes. It's basically the design flow chosen by the developer.

3. What does font-size: 62.5% in the html tag do for us when using rem units?

font-size: 62.5% makes it so conversion of rem units is 10px = 1 rem. It just makes it easier to calculate rem units. 16px = 1.6rem

4. How would you describe preprocessing to someone new to CSS?

Preprocessing is writing code for CSS in a slightly different way that is intended to improve efficiency. Esentially, it saves you time by having things such as variables that can be reused, or by allowing you to make minor changes that can affect so many different parts of your website without having to individually change everything. If you wanted to change the color scheme of your website, you wouldn't have to go through all of your CSS to do it. You could just change the colors in your variables instead of finding every instance of those colors in traditional CSS. The preprocessor then compiles all of your code into regular CSS that your browsers can understand.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

My favorite concept of preprocessing is the ability to reuse a lot of code in mixins and variables. I haven't encountered any problems with preprocessing yet.
