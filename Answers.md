1.Adaptive means that it has breakpoints for different size devices. Fully Responsive means that it incorporates percentages so that every device size between the breakpoints looks good.

2.Mobile first means to build it starting from the mobile view and using “Min-Width” for tablet and desktop. Desktop first means to start from the desktop view and use “Max-width” for Tablet and mobile viewports.

3.It makes it so that rem units translate perfectly into pixels for easy readability. After implementing the 62.5% font size, 1.0rems equals 10 pixels.

4.Preprocessing is a more intuitive way of writing CSS. You can conceptualize the cascading inheritance much better as each child container is bracketed within it’s parent container. The preprocessing takes your files and compiles them into a single CSS file that you may normally be used to and writes it out as standard CSS.

5.My favorite concept is the easy readability to see inheritance from the parent container. What gave me the most trouble were parametric mixins. But as I practice with them, they’re becoming easier.
