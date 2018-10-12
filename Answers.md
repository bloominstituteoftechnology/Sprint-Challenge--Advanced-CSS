1. What is the difference between an adaptive website and a fully responsive website?

An adaptive website utilizes media query breakpoints only. It does not use a percentage based (fluid)
layout at all. A responsive website uses both fluid (percentage based design) and responsive (media query breakpoints) 
techniques. 

2. Describe what it means to be mobile first vs desktop first.

The terms indicate which style is considered "default" in the css file. If you want a desktop first style, all your 
default styles should be for your desktop view. Then you would put media queries in place to style mobile/tablet. Mobile first
is the opposite. The default style would be for mobile. Then you would put media queries for tablet/desktop. 

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?

It makes 1rem equal to 10px. This is for easy conversion purposes. 

4. How would you describe preprocessing to someone new to CSS?

It's just a way to make writing CSS faster and easier. 

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

Probably my favorite concept in preprocessing is nesting. I find it much more intuitive than the default CSS way to do 
specificity. I like preprocessing in general.  If I had to pick one concept that gives me trouble, I'd pick how this all
gets processed and hosted online. I think it works by the preprocessor processing your Less into CSS on your local computer,
then that CSS and HTML gets hosted on the cloud? I'm not sure. 