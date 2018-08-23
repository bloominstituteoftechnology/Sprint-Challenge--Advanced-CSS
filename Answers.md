1. What is the difference between an adaptive website and a fully responsive website?

   Adaptive websites and responsive websites change appearance based on the browser environment
   they are being viewed on (the most common thing: the browser's width).
   Adaptive websites adapt to the width of the browser at a specific points.
   Responsive websites respond to the size of the browser at any given point.
   

2. Describe what it means to be mobile first vs desktop first.

   Mobile first: global styles(those not inside media queries) are designed to make the site 
   look good on small screens, min-width is used in the media queries.

   Desktop first: global(those not inside media queries) styles are designed to make the site
   look good on larger desktop screens, max-width is used in the media queries.


3. What does font-size: 62.5% in the html tag do for us when using rem units?

   62.5% of 16px (typical default browser font-size) is 10px.
   Setting a root font-size of 10px is the most common scenario when using REMs.
   It allows for a quick conversion between pixel values to REM values simply by dividing the number by 10.
   

4. How would you describe preprocessing to someone new to CSS?

   Preprocessing is simply a more robust syntax for CSS written in a different language.
   That language is then compiled into normal CSS.
   Syntax (LESS) -> Compiler (JavaScript) -> CSS

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

   My favorite concept in preprocessing: mixins. Mixins let you make groups of CSS declarations
   that you want to reuse throughout your site.

   Don't have trouble with any concept.

