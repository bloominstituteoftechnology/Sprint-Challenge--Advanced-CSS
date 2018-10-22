1. What is the difference between an adaptive website and a fully responsive website?
An adaptive website has different layout files for specific screen types - the server detects the type of screen and delivers the correct files.
A responsive website adjusts it's layout using media queries - the web browser follows instructions in the code to determine how the information is displayed.


2. Describe what it means to be mobile first vs desktop first.
Mobile first means that the basic styles in your css result in your mobile layout and using ```@media (min-width: $$$px)``` media queries alter those styles for the other layouts. Desktop first would be your desktop layout as your main style and ```@media (max-width: $$$px)``` to alter those styles for other screens.


3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?
It makes the `rem` values 1/10 of the `px` value based on the standard "medium" font size being `16px`.


4. How would you describe preprocessing to someone new to CSS?
Preprocessors take your files and convert them into something readable by web browsers.


5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
The ablility to take multiple files with an easier to read syntax and convert them into something that can be readable by the browser is great! The only problem is you have to pay attention to the preprocessor to make sure it's happy otherwise you can go on making changes and wonder why things aren't happening. 