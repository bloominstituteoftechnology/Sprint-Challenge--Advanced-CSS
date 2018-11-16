1. Both change depending on the View Port, usually based on the width. Responsive websites change fluidly and adaptive websites snap to a diffenerent design. "width: 92%" would be responsive, "width: 500px" is adaptive.

2. Mobile first means the mobile view is written first and media queries use "min-width," desktop first mean the desktop view is written first and "max-width" media queries are used.

3. Rem units are based off the root font size. Font-size: 62.5% makes the root font-size 10 by default, but the font-size will change depending on browser settings. This style allows font-sizes to be responsive and accessible.

4. Preprocessing allows you to nest CSS, use variables, and have their own built in functions. Using a preprocessor for CSS is more organized, faster and more 'DRY'.

5. The organization is my favorite part of preprocessing. My code in the past has been very sloppy and I'm really learning the benefit of having clean, organized code. The hardest concept for me is getting used to using preprocessors in general. I'm so used to writting all the CSS out, I start doing it automatically even if it makes sense to write a variable or mixin.