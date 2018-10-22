1. An adaptive website will have fixed widths at certain breakpoints. Usually one at desktop width, tablet width and mobile width. The content will fit at those fixed breakpoints, but the user may experience the horizontal scrollbar at points in-between.

A fully responsive website will have a max-width property and a percentage based design. All of the content should fit fully in the browser window without the need for a horizontal scroll bar from infinity down to the designated min-width.

2. A mobile first website begins the design at the mobile width. The design is layed out at a breakpoint around 500px first and then a min-width media query to adapt the site for larger displays. The mobile first theory is favored by some because of the pervasiveness of mobile browsing, though some would argue that it places unintended limitations on the website's desktop experience. 

Desktop first development works in the opposite direction. The website is layed out at the maximum width first and max-width media queries are introduced to adapt the site for smaller displays. 

3. The font-size: 62.5% property in the html tag will change the default font-size from 16px to 10px. This is done to simplify the rem to pixel conversion. By setting the html or root font to 10px, that conversion is simply a matter of moving a decimal place one spot over. 1rem is 10px, 1.6rem is 16px, etc. The rem unit is favored by some because it allows for the user to change the font size in their browser settings. 

4. Preprocessing is a tool that outputs to vanilla css. It allows a developer to more closely follow the nesting chain of the html in their style sheet and also adds in various bonus features, such as variables, mixins (the styling equivalent of a function) and the ability to organize their stylesheet into smaller stylesheet without having to add multiple css files to their html.

5. My favorite concept in preprocessing is the variables. It is incredibly useful for reusing fonts and colors and makes it very easy to swap out those fonts and colors without running a ctrl + f throughout the page and replacing every instance of the font. I don't have an answer to the second part of the question. Preprocessing does more to eliminate my troubles than create new trouble for me.