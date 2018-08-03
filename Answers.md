1. What is the difference between an adaptive website and a fully responsive website?

    _An adaptive website is breakpoint based on viewports and also very rigid. It's not very convenient b/c different layouts have to be created for different screen sizes. It can't cover all screen sizes.  Whereas, a fully responsive website is a combo of a fluid and adaptive website. It loads faster due to only one master layout and provides a precise viewing experience since it covers everything from mobile to desktop._

2. Describe what it means to be mobile first vs desktop first.

    _With mobile first, the base design style is the mobile phone. Everything is created from smaller to larger i.e. min-width and the mobile viewing experience is considered first. With desktop first, the base design style is the desktop. Everything is created from larger to smaller i.e. max-width. The desktop viewing experience is considered first when designing._

3. What does font-size: 62.5% in the html tag do for us when using rem units?

    _The default browser setting for most browsers is 16px which equals 100%, so 10px is 62.5%.  When using rem units, the pixel size is depends on the root element of the page which is the html element. The font size is influenced by the inheritance from the browser font unless explicitly overridden with a unit not subject to inheritance. When using rem setting the html tag to 62.5% makes calucalating rem easier since font sizes in px would be 10X their rem value._

4. How would you describe preprocessing to someone new to CSS?

    _Preprocessing is sort of like CSS on steroids. It provides a means for achieving more robust CSS through the use of variables, nesting, mixins, functions, math operations, etc.  The syntax of the preprocessor is a little different from CSS but not entirely separate from it._


5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

    _My favorite concept of preprocessing are variables and mixins. The concept that gives me the most trouble are knowing when I'm overdoing it with variables. There's so much that preprocessing offers. It's sometimes hard to know when I'm implementing preprocessing overkill._
