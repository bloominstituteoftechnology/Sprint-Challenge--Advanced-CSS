What is the difference between an adaptive website and a fully responsive website?
    --An adaptive website looks good at specific breakpoints, but at any other points its not fluid. It has scrollbars. 
    --Fully responsive websites look good at all breakpoints and all screen sizes. 

Describe what it means to be mobile first vs desktop first.
    --Mobile first or desktop first depends on what your company designs for first. If they design for mobile first,
    when you write your css, you are styling it for that screen size first. You then will style for any other bigger size screen breakpoints.
    Desktop first will have you style for that screen breakpoint first, and then smaller screen breakpoints afterwards.

What does font-size: 62.5% in the html tag do for us when using rem units?
    It lets us use a responsive measuring unit when sizing fonts. This lets the text look the same no matter what size of screen they are displayed on.
    When you set the font size to 62.5%, it allows us to easily know what size font we will get when styling because we can multiply our rem by 10.
    1rem = 10px. 1.6rem = 16px. etc.

How would you describe preprocessing to someone new to CSS?
    Preprocessing adds a javascript flavor to your CSS experience. You can nest your CSS, you can create variables and use parameters. 
    Using a preprocessor gives you a bigger toolkit. You can do the same work without it, but it also has the potential to make work on large projects easier.

What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
    My favorite concept is the use of variables that allow you to quickly make changes across the entire site by changing very few pieces of the code.
    I still don't really get how to use namespaces or what they are used for.