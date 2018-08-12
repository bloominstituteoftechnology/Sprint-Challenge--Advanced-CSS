1. What is the difference between an adaptive website and a fully responsive website?

    An adaptive website uses media queries which allows for the layout to adapt given certain max or min
    widths (breakpoints). A fully responsive site is adaptive, but also accounts for everything between
    the breakpoints so that the horizontal scroll bar does not show and the content still looks good in
    a full range of screen sizes not specified.

2. Describe what it means to be mobile first vs desktop first.

    Mobile first means the default stylings in your css or preprocessor files are set for mobile and the
    media queries will be used to scale up to tablet and desktop sizes. Desktop first means the default
    stylings in your css or preprocessor files are set for desktop first and the media queries will be
    used to scale down to tablet and mobile sizes.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?

    It sets the default font-size to 10px which makes are rem units work in a base 10 fashion. This
    makes it easier when designing user interfaces. Note, rem units are based off the browser default
    font-size.

    Example: 1.6rem = 1.6 * 10 = 16px

4. How would you describe preprocessing to someone new to CSS?

    A CSS file can become quite complex over time and become very hard to manage. Given the cascading
    nature of CSS, stylings lower in the file can have unintended consequences with stylings higher in
    the file. Preprocessors can make the selectors easier to manage due to nesting. They also implement
    variables which gives greater control over your ability to edit a theme quickly.

    Example: If you set a variable for your primary color and use it in all the places you wish to set
             that color, you can later change the color of the variable and all the corresponding places
             where that variable was placed will be updated automatically.

    Preprocessors also allow for things like mixins which are repeatedable blocks of styles that can be
    used over and over again. Mixins also can take in parameters so you can alter aspects of the styling
    while keeping the block itself intact and reusable.

    The last big point on preprocessors is that you can break your files into separate, more logical
    units which makes it easier to find things when you need to change them. It is common to put your
    variables, mixins, and reset into separate files. Additionally, you can break your site into simple
    components and store those in separate files (like your main navigation or a header/footer).

5. What is your favorite concept in preprocessing?  What is the concept that gives you the most trouble?

    Nesting and variables are my favorite, so far. Mixins are not trouble, but I feel I am weakest at
    them. Still learning when it is best to use one and when it is overkill.