    1. What is the difference between an adaptive website and a fully responsive website?

An adaptive website has breakpoints that allow it to adapt its layout to screen size, but within a breakpoint it is static. A fully responsive website also has breakpoints, but within a breakpoint it also uses percent-based widths (and maybe other fluid elements) to be fluid and therefore respond even more to viewport size.

    2. Describe what it means to be mobile-first vs desktop-first.

The difference is which screen size the "base" CSS is designed for, i.e. the CSS without media queries. A desktop-first design will detail desktop-specific layout first, then tablet media queries below, then phone media queries below that; it will use max-width as its main media query input. A mobile-first design will detail phone-specific layout first, then tablet media queries below, then desktop media queries below that, using min-width.

    3. What does font-size: 62.5%; in the html tag do for us when using rem units?

This line of CSS scales the "base" font size to be 10px, which then lets us calculate any pixel size in rem units easily by just dividing by 10. For example, a 52-pixel height element would be 5.2rem once the html { font-size: 62.5%; } CSS normalization has been used.

    4. How would you describe preprocessing to someone new to CSS?

With a preprocessor, you don't actually write CSS code. You write code in another language, and a compiler then converts your preprocessor code into CSS. This is useful because the preprocessor code is actually more elegant and intuitive to read and write than base CSS. For example, it can be broken up into modules and then imported into a master file, selectors can be written nested inside one another, and repetitive code can be written just once and then invoked many times by using variables and mixins.

    5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

I guess my favorite would be the ability to easily alter color schemes by using two-levels-deep layers of variables. (One layer giving names to the hex colors, the other assigning different colors to different parts of the layout.)

Mixins give me the most trouble, because they're the deepest and most powerful tool we discussed. I can do them, but I have to re-wrap my head around what they do repeatedly, and look up the syntax for them repeatedly when it's time to use them.