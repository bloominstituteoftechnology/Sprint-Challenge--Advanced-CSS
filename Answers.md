1. Responsive design if fluid, so it continually adjusts to the browser size, whereas adaptive design is set at specific break points, and only adjusts its design when those widths are engaged. 

2. A mobile first design is designed initially for a mobile screen and utilizes min-width to set the break points. For example, from 0-499 pixels is the main design, with a media query set at min-width 500px, to adjust the screen to a new design as the browser grows.

A desktop first design is instead designed initially for a desktop screen and utilizes max-width to set the break points. In this case, the media queries are set at max-widths, so the screen adjusts as the browser shrinks.

3. Font-size: 62.5% adjusts the rem basis from 16px to 10px, so that 1 rem = 10px, making it easier to easily specify font size without doing extra calculations.

4. CSS is a language with specific rules regarding how code must be written, that often require us to write similar code multiple times. Preprocessing is like a translator, that allows us to write the code in a more concise way, writing shortcuts for code used multiples times and to organize affected elements in one area. The translation then turns what we write into CSS. It make our work easier and simpler.

5. Mixins make commonly used groupings of stylings much easier - like media queries, flex properties, etc. Nesting can be tricky for me, just due to losing track of the brackets that are open if I am not careful.