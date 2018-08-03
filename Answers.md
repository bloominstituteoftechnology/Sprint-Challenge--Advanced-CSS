**What is the difference between an adaptive website and a fully responsive website?**

An adaptive website uses predetermined break-point designs that display based on the user's viewport width. Within the constraints of these break-points, the design is rigid rather than fluid as it's based on pixel values.

A fully responsive website utilizes a percentage (%) based design schema in addition to media query break-points so that it 'responds' to any change in viewport width.

**Describe what it means to be mobile first vs desktop first.**

Mobile first design prioritizes the mobile display of the website in the CSS and uses media queries to determine if the viewport width becomes larger (i.e. using (min-width) @media queries).

A desktop first design prioritizes the desktop display of the website in CSS and uses media queries to determine if the viewport width becomes smaller (i.e. using (max-width) @media queries).

**What does font-size: 62.5% in the html tag do for us when using rem units?**

Setting the global font size to 62.5% in the html tag gives us a baseline font-size of 10px.

The default browser font-size is 16px. 
16 * 62.5% (or 16 * 0.625) = 10px.

By having the baseline font-size as 10px, it is easy to declare a rem value of a font by simply dividing its pixel size value by 10, rather than by 16. 

For example, with a baseline font-size of 10px via global 62.5% in the html tag, a 72px font can easily be displayed using font-size: 7.2rem.

**How would you describe preprocessing to someone new to CSS?**

Preprocessing is a methodology that allows for greater language-complete syntax of CSS styles. By compiling LESS or other preprocessers via JavaScript into CSS, we are able to access the functionality of object-oriented languages such as variables. Mixins work as functional constructors, preventing redundancy in code and giving much greater control over element styling parameters. 

One of the greatest advantages of a preprocessor is the ability to nest element selectors. In doing so, we remove the visual and developmental clutter of chain-selectors that often plague CSS stylesheets, and the code becomes more legible and more specific as a consequence.

**What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?**

I very much enjoy the nesting ability in CSS preprocessors. It is much more intuitive and so much easier to read. Code legibility is a major concern for me, and there's something so elegant and beautiful in properly nested code; some kind of magic in the cascading curly braces.

Using escape variables is still new and a bit tricky, though I expect it will become easier with practice and time.