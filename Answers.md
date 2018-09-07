## Task 2: Comprehension Questions

* Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit. Open up the Answers.md file and record your responses there.

1. What is the difference between an adaptive website and a fully responsive website?

* An adaptive website only adjusts at the breakpoints you set while a responsive will adjust at all the in between areas as well using a percent based layout. 

2. Describe what it means to be mobile first vs desktop first.

* Mobile first means that the website was designed with the base model being the mobile view and the styles for larger screens (using media queries) would cascade from smalles to largest in the code that we write. We use min-width for this. 

* Desktop first is the opposite of this where we code the desktop first and then cascade down from largest design to smallest using max-width instead. This usually happens in industry because most projects have a desktop design in mind before a mobile one. 

3. What does font-size: 62.5% in the html tag do for us when using rem units?

* Using 62.5% in the html tag standardizes 1 rem being equal to 10px of font across our entire website and future font size declarations in rem will now be based on a base 10px font size. So for example when we later declare an <h1> tag with a font size of 2rem the displayed font will be 20px. This can help us keep track of our font size while still respecting the user's font settings on their computer. 

4. How would you describe preprocessing to someone new to CSS?
 
* I would describe preprocessing as a tool we can use to write CSS code in a more organized and efficient way. It allows use to use things such as nesting and variables to change multiple lines of code at once and to avoid repeating ourselves with repeating code. This can't be done with pure CSS because the rules do not allow for this (no nesting, no variables, etc) but with a preprocessor we can take advantage of these tools and the preprocessor will organize our code and return a pure CSS code with the nesting and variables that we used but now assigned in a format that follows the CSS rules/structure. 

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

Once I figured out how to take advantage of nesting I found it to be a much more intuitive and efficient way to code a section of a website than using pure CSS. It made my understanding of my own designs seem much more understandable. I also liked variables but to a lesser extent because they aren't as useful for our tasks at the moment but I can definitely see the benefit when it comes to massive projects where you want to change multiple things at once. 