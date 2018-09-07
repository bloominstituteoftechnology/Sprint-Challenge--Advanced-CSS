
Question 1:
What is the difference between an adaptive website and a fully responsive website?

Answer 1:
An adaptive website will change only at specific breakpoints, but will be fixed in between those breakpoints. A fully responsive website is percent-based and will adjust the look and size of the website between breakpoints, causing there never to be a horizontal scroll bar.


Question 2:
Describe what it means to be mobile first vs desktop first.

Answer 2:
Mobile first means that you start with the mobile design as your base styling, then use min-width media queries to design for larger screens moving higher in sizes.

Question 3:
What does font-size: 62.5% in the html tag do for us when using rem units?

Answer 3:
It gives us a standardized percentage to base our Root Em's off of. Because standard browser font size is 16px, it makes it easier to conver the calculation because if the root was 100% then 1 rem would = 16px; whereas if we use 62.5% then 1.6 rem = 16 percent, it gives us a more equalized 1-1 ratio and makes it easier to get the correct font-sizes without having to memorize additional ratios or do calculations.

Question 4:
How would you describe preprocessing to someone new to CSS?

Answer 4:
CSS is a computer language that only has a limited amount of functionality. Unfortunately, our browsers read CSS in order to understand how to style any webpage we visit. So a preprocessor is two things, it's a new language (albeit very similar to CSS) that has increased functionality, but since the browsers can't read this new language, it also automatically takes in the new preprocessor language and converts(or translates) and recompiles it into a CSS file automatically so that the browser can read it as though you were writing in CSS the whole time.


Question 5:
What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
 
Answer 5:
I'm still a little limited in my knowledge, but probably escaping strings, so I don't have to write out the entire media query every time. The concept that's still giving me the most trouble is probably parametric mixins, just because I don't think I've found a really solid use case for them yet.