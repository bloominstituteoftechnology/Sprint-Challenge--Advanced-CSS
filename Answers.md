Responsive websites work off percents for width, and scale to the viewport or
browser windows size. But the layout remains the same whatever width the website
is scaled to. 
Adaptive websites also have breakpoints where the layout changes to be more
accomodating for different screen sizes. Typically at least one layout for:
Desktop, tablet, and cell phone. 

In desktop first websites the main CSS written is for desktops, but the layout
is changed for mobile devices via media queries.
In mobile first the reverse is done.

font-size: 62.5% in the html tag makes it so one rem unit is equal to 10px.
This make converting px to rem much simpler. 

CSS is slow to change because all browsers need to understand it. So pre-processors
add functionality to CSS syntax and help us write cleaner code that is DRY. Then
this code is compiled back into CSS for browsers. 

My favorite concept in preprocessing is the ability to use variables when creating
a websites color palette, which allows you to re-color the websites much more
easily. All of the other concepts are giving me trouble. 