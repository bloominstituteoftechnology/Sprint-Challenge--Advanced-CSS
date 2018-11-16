1. What is the difference between an adaptive website and a fully responsive website?
    An adaptive website hits a media-query breakpoint, and the page adapts in response to the breakpoint.

    A fully responsive website blends fluid and adaptive designs so that it has both breakpoints and percents with constraints.

2. Describe what it means to be mobile first vs desktop first.
    Mobile first assumes in coding that the code begins with the phone layout, and so it builds up to the desktop layout. Phone -> Tablet ->. It uses min-width for its media queries.
    Desktop first is the inverse of mobile first, as the code begins with the desktop layout and descends to mobile layout. Desktop -> Tablet -> Phone. It uses max-width for its media queries.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?
    It uses 62.5% of a user's screen and adapts the default 16px into a power of ten for easy mathematics. I.e., 10px now equals 1rem, such that 1.8rem === 18px. 

4. How would you describe preprocessing to someone new to CSS?
    I'd describe it as being not too different from vanilla CSS, in that we use familiar syntax (classes, ids, headers, etc.). I would explain the compiler and the idea that Node runs in Javascript, meaning that we do use some slightly different syntax in addition to what we have already learned (i.e., // comments). Of course I would stress that we never touch the compiled CSS :) Finally, I'd describe preprocessing as similar to HTML, in the way that we nest CSS by sections. When we write HTML, we do our best to write it semantically and to divide content in a meaningful, easily navigable way. Preprocessing allows us to do the same for CSS.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
    I love the nesting. I like the easy organization of it and the ease it brings to writing code. I also like the separate files, because it splits up what could otherwise be an enormous chunk of code into chewable pieces. I most struggle with parametric mixins. 