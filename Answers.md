1. What is the difference between an adaptive website and a fully responsive website?

An adaptive website will adapt to different screen sizes by utilizing different html templates. There will be a need for more than one html pages/templates with each being made specifically for one screen size.  A fully responsive website uses only one html template.  All differences between screen sizes are set via media queries within the css page(s).

2. Describe what it means to be mobile first vs desktop first.

mobile first means to first create the website based upon a mobile screen size (500px for example). For media queries, this means that you will you a min-width setting to specify the screen size breaks. For desktop first, these breaks would be specified using max-width settings.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?
This allows us to easily calculate the pixel sizes that we want for our fonts. For instnace if I want a font size of 16 I would use font-size: 1.6rem.  Using a percentage for font-size in the html tag also allows the font sizes to respond correctly if the user changes the browser font settings.

4. How would you describe preprocessing to someone new to CSS?

Preprocessing simplifies the way in which we style our web pages.  It allows us to better visualize the styling in relation to the html page via the nesting feature. We can also use variables. This feature allows us to define the setting in one area for multiple elements. Another feature is mixins which gives us function-like ability for setting element styles.

5. What is your favorite concept in preprocessing?  What is the concept that gives you the most trouble?

My favorite concept is the use of variables.  I really appreciate being able to set the font colors in one place and not have to worry about finding each individual element.  The concept giving me most trouble is when to use mixins.