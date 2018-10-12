**What is the difference between an adaptive website and a fully responsive website?**

An adaptive website is still developed with hard-coded layouts, but the layout will adapt based on screen width. A fully responsive website will do the same thing, but the layouts will make use of percents. An easy way to determine if a website is adaptive is if you see horizontal scroll bars. Fully responsive websites do not have horizontal scroll bars.

**Describe what it means to be mobile first vs desktop first.**

Mobile first is a design methodology that involves optimizing your site for mobile first. Your mobile styles will be at the top of the CSS file, and your media queries will use min-width to define your desktop styles. Desktop first is exactly the opposite - The desktop styles are at the top of your CSS, and the media queries utilize max-width to define the mobile styles.

**What does font-size: 62.5% in the html tag do for us when using rem units?**

1 rem is equal to the browser's font size, which for most users is set at 16px. Setting the font size to 62.5% means that, for most users, 1 rem will be equivalent to 10px. 10 is an easier number to work with than 16, so we set the font size to 62.5% to make conversion from rems to pixels easier.

**How would you describe preprocessing to someone new to CSS?**

Preprocessors extend CSS by making it just a tad more like programming. They add useful features, like variables and nesting, that make writing CSS quicker and easier. There can also be simple conditional operations and various built in functions to make CSS development easier. Preprocessors have to be compiled into normal CSS.

**What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?**

I like the addition of variables to CSS. I can see how they would be useful if you have a large site and would like to redesign an aspect of it, like fonts and colors. There isn't a concept that is giving me much trouble with preprocessing, but if I had to choose, I'd say nesting. I could achieve the same effect by chaining the selectors as normal in CSS.
