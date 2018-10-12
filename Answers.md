1. What is the difference between an adaptive website and a fully responsive website?

An adaptive website has some styling that incorporates relative size or positioning of elements. A fully responsive website has specific styling rulesets based on unique variables such as the width of the browse, the type of browser, or what kind of device is rendering the browser.

2. Describe what it means to be mobile first vs desktop first.

Mobile first means that the CSS cascading style, by default, is first design to meet mobile design specs, and then adjustments are later made to account for desktop stylings (typically larger browser width).

3. What does font-size: 62.5% in the html tag do for us when using rem units?

I believe the 62.5% baselines the rem values such that 1.4 = 14 regular font size (for example), making it easy for developers to quickly assess what values they should assign to fonts, using rem, since it's just font value * 10%.

4. How would you describe preprocessing to someone new to CSS?

Preprocessing allows developers to apply variables, classes, and functions to style sheets which make it easier to initially create and subsequently maintain css, especially for larger projects spanning many developers. Preprocessing will always convert these methods down to pure css but the abstraction layer, which is also maintained, makes it easier to manage and manipulate the underlying CSS.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

I like nesting. I haven't used namespaces enough to feel comfortable with them yet.
