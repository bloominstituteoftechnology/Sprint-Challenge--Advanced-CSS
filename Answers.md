1.) What is the difference between an adaptive website and a fully responsive website?

Adaptive websites use scripts to adapt the presentation to a set of predefined layouts, while responsive websites use scaling and fluid measures to ensure the website adjusts to any size/layout.

2.) Describe what it means to be mobile first vs desktop first.

A mobile first layout will load faster for mobile devices, as they only need to run the core styles. In mobile-first styling, desktop styles are introduced through media queries and responsive layout. Desktop-first styling does the opposite- the core is built for desktop screens and media queries are introduced to accomodate mobile devices.

3.) What does font-size: 62.5% in the html tag do for us when using rem units?

The browser standard for font size is 16px. 62.5% of 16px gives us 10px. This 10px is then used as the reference size for rem units, which makes it easier to convert to pixels. (1.6 rem = 16px)

4.) How would you describe preprocessing to someone new to CSS?

Preprocessing is writing code to write CSS for you. Because preprocessor languages don't need to be interpreted by the browser, they can come with many more powerful features, as long as it can be somewhat representable in output CSS.

5.) What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

My favorite concept in preprocessing would probably be a tie between variables and nesting. These two save me a lot of time from having to cross-reference HTML to make sure I got a consistent style or that I am not breaking specificity rules. I don't know if there's a concept in LESS that gives me much trouble yet, this has been very smooth for me so far.