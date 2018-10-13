# What is the difference between an adaptive website and a fully responsive website?
And adaptive website only uses percentages and scaling to make a website look good on multiple devices. A responsive website includes these features but als includes the use of breakpoints to specifically tailer the design to specific widths to accomodate a range of devices.

# Describe what it means to be mobile first vs desktop first.
The mobile first paradigm dictates that you style your website for mobile first and then work your way up widths with min-width queries to accomodate wider screens. Desktop first would be opposite where you style your site at the widest resolution and work your way down with max-width media queries.

# What does font-size: 62.5% in the html tag do for us when using rem units?
Setting the font size to 62.5 allows us to have a 10px = 1 rem ratio.

# How would you describe preprocessing to someone new to CSS?
I would say preprocessing is a way of extending base css to add features that make organization easier,stlying faster, and allowing you to repeat yourself less.

# What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
I really enjoy the nesting as it allows my mental model for a page to be more consitent. I also really enjoy @imports Instead of worrying about finding a "good spot" in the css file for a group of styles you can seprate them into pages and import them into a master file. Right now the concept that I'm struggling with is using guards. Even though they're a tool for conditionals I find they're a bit obtuse.