1. Adaptive design creates many different designs that are specific to different
screen sizes. The trick is to detect the correct screen size and rendering
the proper layout accordingly.
Responsive design is one single layout that changes and reacts to the current
screen size.

2. Mobile first means to build the layout to look good on a mobile device,
and then using min-width media queries to change as the site grows.
Desktop first is the reverse: layout looks good on a desktop, and max-width
media queries are used to adapt the layout as the screen size shrinks.

3. Sets the font size to 10px (in most cases), making easier for us to calculate
the exact pixel size we want.
(If we wanted a 27px font size, the math is easier with a base-10 font-size than
with a base-16 font size.)

4. A different way of writing(syntax) CSS that later gest converted into
standard CSS, that also happens to be much easier and intuitive to understand.

5. Mixins and importing them are my favorite. They're probably the most trouble-
some as they're the most complicated, but I they're also super powerful and
convenient once you've grapsed them. 
