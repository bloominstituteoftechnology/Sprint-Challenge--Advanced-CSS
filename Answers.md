1. What is the difference between an adaptive website and a fully responsive website?
I think the biggest difference between adaptive and fully responsive websites is that adaptive sites have different templates for different device sizes whereas fully responsive takes that concept further by having one template across all devices and screeen sizes that fluidly reacts to changes in the width as the screen shrinks and grows.

2. Describe what it means to be mobile first vs desktop first.
Mobile first means that the base of your code was written to be viewed on mobile.  All breakpoints are written as (min-width) and adjust as the screen gets larger.  Desktop first is the other was around in that all your breakpoints are written as (max-width) and change as the screen gets smaller.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?
Setting the global font size to 62.5% sets 1 rem at 10 pixels.  It allows for more intuitive changes to our rem sizes.

4. How would you describe preprocessing to someone new to CSS?
Preprocessing is just CSS but with extra tools, such as variables, mixins, and nesting, that make the language easier to write and use.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
My favorite concept in preprocessing is nesting.  It keeps my code so much cleaner and dryer.  The concept that gives me the most trouble is parametric mixins.  I have to go back to refrence pages more often when using them and that slows me down.