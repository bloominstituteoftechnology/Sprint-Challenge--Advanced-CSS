1. If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?
    It keeps you form having to write the same complex styles over and over again.So say you wanted to have a style for a button that you wanted to use for multiple buttons. You can write that style once as a mixin and then output it by that mixin name with no copy/pasting.
2. What is the command in node package manager (npm) to install LESS globally on your computer?

    npm install -g less

3. Please provide an example of a mixin you have used in a project this week.

    .button (@bg-color: green, @hover-color: black, @text-color: white, @hov-text-color: white) {
        background: @bg-color;
        color: @text-color;
        padding: 20px 30px;
        font-weight:bold;
        &:hover {
            background: @hover-color;
            color: @hov-text-color:
        }
    }
    .button-blue {
        .button(blue, gray, white, black);
    }

4. What is the difference between fixed layout, adaptive layout, and fluid layout?

    Fixed layout is a set layout width regarless of screen size. 
    
    Adaptive layout responds to screen sizes, but not ina  fluid way. It will jump from breakpoint to breakpoint.  

    Fluid layout may have a max width, but will expand and contract based on the screen size and not necessarily at break points.

5. Why do we need to use the CSS property max-width in a responsive website?

    Well you don't technically need it. A full-width website can be perfectly responsive. It's more a question of how wide is too wide to be usable.

    Outside of that it will constrain you container to a max width while letting any lower screen widths shrink the website to the viewport width.