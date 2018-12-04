1. What is the difference between an adaptive website and a fully responsive website?

The difference between an adaptive and responsive site is to fit a various amount of devices, while adaptive sites are at set 
viewports.

2. Describe what it means to be mobile first vs desktop first.

Build from the ground up working on a smaller presentation first, makes it easier to produce a site. 

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units? 

It lets us calculate rem units better. 62.5 makes default html font-size calculate 1 rem for every
10px

4. How would you describe preprocessing to someone new to CSS?

Preprocessing allows for my range to visually impact a web page. 

Nesting: You can include rules inside of each other's brackets. {}
This allows CSS to flow better with the HTML. We should not nest 
everything, more than 4 layers is not ok. By that time it would be 
considered an regular #ID tag. 

Mix-Ins: The ability to mix different classes together. Being able
to create one class and use it's properties within another class.
Adding parentheses to the selector() like a JS function will allow
you to mix in another class.

Variables: Identify with the @ symbol. @variable-name: #FF0000;

5. What is your favorite concept in preprocessing?  What is the concept that gives you the most trouble? 

My favorite concept is the mix-in when used correctly it keeps code DRY. 