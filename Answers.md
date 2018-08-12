
1. What is the difference between an adaptive website and a fully responsive website?

    An adaptive site can switch layouts based on breakpoints defined by media queries
    in the CSS, but a fully responsive site will additionally insure that within the
    different layouts, the elements grow or shrink smoothly as the screen size varies.

2. Describe what it means to be mobile first vs desktop first.

    For desktop-first, within the CSS the layout is initially defined to match a 
    desktop-sized screen, and then media queries are used to override or add additional
    CSS for tablet- or mobile-size screens using the max-width parameter.

    For mobile-first, the CSS initially defines the layout for a mobile-sized screen
    and media queries are used to modify that layout for tablet or desktop-sized
    screens using the min-width parameter.

3. What does font-size: 62.5% in the html tag do for us when using rem units?

    This is a scaling factor that adjusts the rem units so that 1 rem = 10 px,
    allowing for easy peasy px-to-rem conversions when writing the CSS.

4. How would you describe preprocessing to someone new to CSS?

    It's an extra processing step that allows you to use enhanced features in the
    CSS code you write that browsers don't (yet) understand on their own.  The
    preprocessor then converts the enhanced CSS to vanilla CSS that the browser
    can render.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

    Well, mainly so far we've used two features, variables and mixins, and they both seem
    very useful for organizing the CSS and allowing for code reuse.  I was reading through the
    Lesscss.org site a bit, and it seems like some of the more advanced features are kind of
    kludgey looking (like using mixins as functions to perform calculations) and are unnecessarily complicated.

