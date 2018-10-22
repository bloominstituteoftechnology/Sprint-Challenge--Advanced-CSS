1: What is the difference between an adaptive website and a fully responsive website?

An Adaptive website switches between what are basically several static layouts, switching at certain breakpoints defined canvas width.

Responsive Websites can still use breakpoints for larger changes, but the layout accounts for all sizes between the breakpoints, usually through the use of percentage based sizing.


2: Describe what it means to be mobile first vs desktop first.

The difference mainly describes how the developer structured the styles used to layout the site. Whichever model is described as "first" is the default layout. Media queries are then used to modify the layout for use with other devices. Desktop first structures use media queries based on max-width to define breakpoints, while mobile first uses min-width;


3: What does font-size: 62.5% in the html tag do for us when using rem units?

The default user agent font size is 16px. The font size is adjusted, along with everything based on it, as users zoom in or out. Layouts based on the font size will therefore zoom evenly. This is useful, but difficult to work with practically as designers don't normally size things in units of 16px. Setting the font-size to 62.5% results in 10px, which is easier for humans to work with. By setting this on the html element, we're able to use REM units, which remain the same size across all other elements in our layout.


4: How would you describe preprocessing to someone new to CSS?

Preprocessing makes it easier for humans to write and understand CSS. The primary way it accomplishes this is by centralizing statements. For example, a layout might use the same color in hundreds of different places, and changing that color in all those places is time consuming and error prone. Preprocessors allow developers to define a single variable to use in all those places. Updating that one variable then updates the value across the entire layout.


5: What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

My favorite concept is as described above. Variables are probably the simplest aspect of the LESS preprocessor, but also the most needed.

What has given me the most trouble thus far is using a property name as a value. For example, trying to tell a selector to apply its line-height as the value to its height attribute. I was certain I had seen an example of this on the LESS website, but have since had no luck using such a pattern.
