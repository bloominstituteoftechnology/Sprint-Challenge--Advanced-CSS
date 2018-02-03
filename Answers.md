
# Sprint Challenge #4: Responsive-Less

## Self Study Questions:

1. If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?
    *  On a high level I would say that Less is like a massive update to CSS, allowing you to implement all sorts of additional functionality, which in the end is going to save you a lot of time, in creating, but especially in managing your CSS projects in the future.  Variables, Nesting, Mixins, and Math are some of the most significant aspects of Less.


2. What is the command in node package manager (npm) to install LESS globally on your computer?
    * 'npm install -g less'

3. Please provide an example of a mixin you have used in a project this week
    * My favorite one that I used this week was a 4 sec fade (in and out) using the animation mixin.

        * For mixin.less file:

            .animation(@arguments) {
            -webkit-animation: @arguments;
            -moz-animation: @arguments;
            animation: @arguments;
        }

        * Added to ther reference section of the @import list at the top of the index.less file:

            @import "variables";

        * Lastly, for the header.less file, which contains the logo where the mixin will be impletented.

            .animation(fade-in 4s linear infinite alternate)


4. What is the difference between fixed layout, adaptive layout, and fluid layout?
    * Fixed layout uses fixed layouts use absolute units of measuring length (ex. px, pt, in). Although they make creating a pseudo Responsive Design incredibly difficult, they are still used in adaptive layouts to account for old browsers that do not support.  Adaptive layouts are essentially the same as fixed, except that they utilize media queries in order to adjust styling for different devices (e.g phone, tablet, desktop etc.).  With fluid layouts it is much easier to achieve perfect pixel fully responsive websites; however, since not all browsers support the relative units of measurement which are utilized in fluid layouts (e.g rem, em, vw), depending on your target audience, you may have to stick to adaptive layout techniques.

5. Why do we need to use the CSS property max-width in a responsive website?
    * max-width is used in media-queries (desktop first) to set specific parameters for screen sizes that are at or below the set max-width.  We also use max-width to set the main container size (in conjunction with width: 100%;) to set the standard width for all sub-class width percentages.
