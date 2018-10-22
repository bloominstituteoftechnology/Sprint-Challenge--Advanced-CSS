What is the difference between an adaptive website and a fully responsive website?
An adaptive website has breakpoints in it where the website layout itself changes to make the user experience better. A fully responsive website uses percentages instead of pixels for margins, paddings, and widths to change the website at all levels so that it changes when the user resizes the window for a better user experience.

Describe what it means to be mobile first vs desktop first.
Mobile first builds the website with the mobile layout in mind first, then changes that layout using min-width media queries to accomodate wider screens. Desktop first does the opposite in building the website with a desktop layout first and changing the layout with max-width media queries to accomodate smaller screens.

What does font-size: 62.5% in the html tag do for us when using rem units?
Having font-size: 62.5% makes it so that converting pixels into rem units is simple since the starting base of rem units is 1 rem equaling 10 pixels.

How would you describe preprocessing to someone new to CSS?
I would say that preprocessing is having a compiler taking code normally unreadable in CSS (since it's following the conventions of the preprocessor) and making it readable.

What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
My favorite concept in preprocessing is imports. It makes it easier to manage all the CSS in smaller files that can be brought together to form a coherent larger CSS fie. The concept the gives me the most trouble are parametric mixins.