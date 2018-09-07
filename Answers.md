1. An adaptive website adjusts based on viewport size using breakpoints. A responsive website is adaptive, but also fluid meaning that it resizes with the size of the window based on percents.

2. Mobile first versus desktop first is determined by which styling is used outside of media queries. To be mobile first, the primary styling will be for mobile with media queries utilizing min-width to adjust the styling as the viewport increases. Desktop first uses media queries with max-width to adjust the stylig as the viewport decreases.

3. font-size: 62.5% in the html tag sets the font size to 62.5% of the default value (typically 62.5% * 16px = 10px). 1rem is defined as the value of the root element's font-size. This allows us to still think in base-10 while avoiding hard coded font-sizes.

4. I think of reprocessing as shorthand CSS. It allows us to write in a more intuitive, organized and shortened way, but in the end styling written in preprocessing languages is compiled into a standard CSS file.

5. My favorite concept is nesting. It makes it much easier to keep track of where classes and elements are located within the HTML. I've had the most trouble with the syntax of mixins. The idea is similar to programming functions, but I often have to check the CSS output file to see how it is actually being written.