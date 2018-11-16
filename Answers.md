1. What is the difference between an adaptive website and a fully responsive website?

Adaptive site have breakpoints but have fixed widths at the breakpoints. Fully responsive sites, on the other hand, not only have breakpoints but also contain variable widths and should not show any vertical scrollbars at any device width

2. Describe what it means to be mobile first vs desktop first.

Mobile first menallity should be used for sites that have majority of mobile visitors. They by default, in css, target mobile viewport widths and target larger viewports with a media query (min-width). Desktop first menallity should be used for sites that have majority of desktop visitors. They by default, in css, target desktop viewport widths and smaller viewports are targeted with a media query (max-width).

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?

The specifically declaired `font-size: 62.5%` in the `html` tag makes 1 `rem` unit = 10px. This makes it easy to convert px to rem.

4. How would you describe preprocessing to someone new to CSS?

CSS preprocessing is a development preprocessing of CSS to make the development of CSS easier for the developer. This preprocessing limits the amount of CSS repitition the devopler has to do. The preprocesser outputs normal CSS to be consumed by the browser.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
   My favorite concept is "Mixin" wether or not the accept arguments. The use of arguments with a mixin, called "Parametric Mixin", allow the use of mixins were arguments may need to change. It also allows for modular code because you can have a parametric mixin like a button creator and place it in a new codebase and have it function with minor/no tweaks tweaks. Another greatness of parametric mixins is you can make complex mixins and change simple properties by just editing a variables.less file. in conclution, I love functions they make life easier and elimiates repition.
