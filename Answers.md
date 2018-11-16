What is the difference between an adaptive website and a fully responsive website?

An adaptive website requires a separate layout for each screen resolution on which developers want a website ot render. A responsive website uses media queries to establish breakpoints on a single layout for major design changes and combines that with percent-based layouts to make the website usable in-between the resolutions at which the breakpoints are set.

Describe what it means to be mobile first vs desktop first.

Mobile first uses min-width media queries to expand the design of a website as the screen resolution grows, whereas desktop first uses max-width media queries to guide the style as the resolution of the site shrinks.

What does font-size: 62.5% in the html tag do for us when using rem units?

This sets the default font size to 10px and makes it so you can use simple math with factors of 10 to establish easy-to-use rem font sizes (ex. 2.4rem === 24px)

How would you describe preprocessing to someone new to CSS?

It's the best thing since sliced bread! But seriously, pre-processing is an incredibly powerful tool that enables you to write your css in a much more concise and easy-to-organize syntax, using many of the same nesting properties you're used to with semantic HTML. The pre-processer will then compile your CSS that you've written in your simplified syntax into "vanilla" CSS.

What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

My favorite concept in pre-processing is using nesting in LESS. It makes the CSS we write follow the same kind of logical flow I associate with HTML. Being able to nest media queries is increbily useful as well. The concept that's still giving me trouble is likely tied between parametric mixins and the import workflow. I'm still struggling to identify places in my code where parametric meixins would make life easier and the import workflow is a little clunky for me on a single monitor. Right now, it feels harder to track down where the problem is if something breaks or isn't rendering how I want it to when I have to track down the problem across several files. 