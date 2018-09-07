
1. What is the difference between an adaptive website and a fully responsive website?

  An adaptive website is static until you hit a breakpoint. Then it changes based on the requirments for the site. Example, A desktop first website will adapt to mobile when the screen is smaller than 500 pixels.

  A responsive website changes based on breakpoints and percentages. A responsive site will look good on any computer or mobile device. Because the developer used percentages for internal elements, they will look good on any desktop. With breakpoints and percentages, the site will adapt to any device. Responsive sites can take twice the amount of work and time to develop compared to an adaptive website.


2. Describe what it means to be mobile first vs desktop first.
  Mobile first vs desktop first applies to the way the CSS code is laid out. A desktop first development will cater to desktop user first. In the CSS the code will reflect a desktop layout. The max width property will be something like 800 pixels. The styling in a desktop first layout will be  more flexible for a variety of desktop machines. When the developer get to mobile design. They will put in breakpoints for mobile or tablet usage. These breakpoints will change the format when the width of the screen reaches a smaller width.
  In mobile first it is the opposite. The site will cater to mobile users first. The css at the top of the page will be for mobile layouts. These will have a max width of about 500 pixels. The developer will tell the computer to change when the screen exceeds a minimum width. If a screen is larger than say, 500 pixels, the CSS elements will look good on a larger, desktop screen.


3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?
   62.5% times 16 = 10. This converts the rem unit to a number that's more easily used by the developer. The developer, and future developers will know that 1 rem = 10px in the CSS code.

 
4. How would you describe preprocessing to someone new to CSS?
  Preprocessing is a way to have a more organized CSS file or files. It's like a code language for CSS. You can write a shorter version of CSS and it is compiled or converted to a traditional CSS file.


5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
  My favorite concept in preprocessing is parametric mixins. Because it reminds me of Ruby classes and methods. The escapes were difficult for me, because I kept leaving out the tilde.
