1. What is the difference between an adaptive website and a fully responsive website?
Adaptive websites change structure based on defined points of window size to accomodate different devices. On the other hand responsive design changes the site as the window changes size rather than at those specific points.

2. Describe what it means to be mobile first vs desktop first.
Mobile first means you design for mobile before desktop. So you set up the css to style mobile, then you have a media query that triggers when min-width is hit, to change to meet the styling for whatever device the person may be using.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?

It sets the base font-size to 10px on every browser so it's easier to use rem units since we don't have to make difficult calculations to get 16px. Instead we just say 1.6rem where if it was 18px base, we would need to calculate it and end up with a number that possibly doesn't let us be exact.

4. How would you describe preprocessing to someone new to CSS?

Preprocessing is done through a program that allows you to use different features that make it easier and more efficient to use things like CSS. The program will take your input using these new features and break it down into the original css file in a way that the basic CSS language can undertstand. This CSS file will work like any other css file, except you don't have to use it because you can use the preprocessor files to edit it in a more efficient way.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

I really like mixins because they can make repetitive processes a lot less time consuming. One thing I'm having trouble with that may not be similar to preprocessors is getting full length borders.