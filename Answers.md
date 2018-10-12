1. What is the difference between an adaptive website and a fully responsive website?

A fully responsive website is built with percentages and is able to display properly on a wide range of viewports.  An adaptive website, is also able to show on a variety of viewports, however the size of the page on each display is styled with a media queries. 


2. Describe what it means to be mobile first vs desktop first.

Mobile first vs Desktop first is really just referencing what styles are set as main styles, or outside of the media queries.


3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?

When adding the font-size of 62.5% it creates a 'base 10' for rem measurments.  So you are easily able to work out pixels based on 10.  If you want 10 pixels you would use 1rem.  For a font size of 16px, you could now use 1.6rem.  This practice is good to keep the site looking how you want it to with various user font size settings.


4. How would you describe preprocessing to someone new to CSS?

Preprocessing is a programatic way of writing CSS.  It allows you to write CSS in a faster easier to read way, then compiles the preprocessed css into a actual css file for final production.


5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
I dont know if it is a concept but I enjoy being able to nest the media queries in a place where I can see the current styles.  Prior to LESS I would fold as much code as I could and try to go back and forth to figure out what needed to be adjusted.  The preprocessor gives me a way to modulize everything in look to make it very easy to navigate through and edit.  I have not ran into any trouble yet.