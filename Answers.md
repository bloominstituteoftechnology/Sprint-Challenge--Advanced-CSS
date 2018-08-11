#Answers

## 1. What is the difference between an adaptive website and a fully responsive website?

An adaptive website displays a different layout based on a preselected number of different display sizes, a responsive website displays well on all possible viewports.

##2. Describe what it means to be mobile first vs desktop first.
Mobile first means that you first make the page for mobile, then add media queries for larger sizes.  Desktop first starts with the desktop, then makes media queries for smaller size displays.
##3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units? 
This makes one REM =10px.
##4. How would you describe preprocessing to someone new to CSS?
It's a way you can store design elements that will be repeated, and then only change them once if the design changes(variables and mixins).  It also makes it easier to target the element you want to change through the nesting feature.

##5. What is your favorite concept in preprocessing?  What is the concept that gives you the most trouble? 

My favorite is mixins as they are very easy to use and cut out a lot of time.  Nesting gives me the most trouble because it runs the risk of making specificity too high so you can't overwrite it.