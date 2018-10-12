1. What is the difference between an adaptive website and a fully responsive website? 
    Responsive design uses percentages to shrink the display as you shrink the width of the viewport, while adaptive design changes the layout at various media queries. ex: @ 500 width make the nav bar vertical.

2. Describe what it means to be mobile first vs desktop first.
    mobile first means you start developing for mobile version first. therefore when you do media queries you have to do min- width, while desktop first you have to do max-width.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?
    62.5% makes the rem = 10px intead of 16px. making it easier to calculate rem units. 
4. How would you describe preprocessing to someone new to CSS?
    Preprocessing allows you to do things in CSS you couldn't normally do. It allows you to set variables equal to things like algebra. for example @base-margin = 30px; could allow you to use @base-margin to to set your margin so you don't forget which number you used.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
    favorite is how it makes CSS look better. Most trouble is creating effective mixins.