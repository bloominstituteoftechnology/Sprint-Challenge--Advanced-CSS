1. What is the difference between an adaptive website and a fully responsive website?

An adaptive website is coded to adjust based on a number of specific setpoints, with no change between those setpoints. A fully responsive website also uses specific breakpoints where the layout changes, but it goes a step further by coding components to have a width that changes as a percentage of the screen width. 

2. Describe what it means to be mobile first vs desktop first.

On the face of it, those terms mean precisely what they say: a mobile first layout is designed mobile first, then adapted to a desktop, whereas for a desktop first layout the opposite is true. On a coding level, the difference is expressed in the organization of CSS, and the use of max-width or min-width media queries. But, on a more impactful level, the choice of paradigm informs and directs focus. For a company specifically targeting mobile customers, adopting a mobile first approach puts the needs of those customers first and foremost down to the level of code. 

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?

It converts the default 1rem size from 16px to 10px, which makes subsequent scaling to different sizes much easier and negates the necessity of a conversion chart. 

4. How would you describe preprocessing to someone new to CSS?

That CSS has a limited descriptive complexity that necessitates a high degree of redundancy, and that preprocessing is a method of generating CSS from a modified format that is able to leverage redundancy-reducing techniques such as variables and mixins (which are basically limited functions). 

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

Favorite concept: nesting. In my view nesting is 80% of the reason why preprocessing is better than raw CSS.

Most trouble: I find mixins still pretty limited compared with CSS-in-JS solutions that allow me to leverage JavaScript inline.
