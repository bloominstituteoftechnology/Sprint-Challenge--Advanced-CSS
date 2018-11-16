1. What is the difference between an adaptive website and a fully responsive website? 
    Ans: Adaptive websites work off multiple HTML/CSS templates that are optimized 
    for each type of device. fully responsive websites make use of fluid and adaptive 
    methodologies to output one HTML/CSS template that, with the help of media 
    queries, comforms to each device window.

2. Describe what it means to be mobile first vs desktop first.
    Ans: These two terminologies tell us which device the main css is meant for.
    In mobile first, we code for a phone layout and use query selectors for the 
    desktop layout. Vice versa for desktop first.


3. What does font-size: 62.5% in the html tag do for us when using rem units?
    Ans: this takes the browser defined font-size (16px) and reduces it to 62.5% of 
    its original value (~10px). Since rem takes the root font-size to calculate its 
    own units, it will now use a 10px baseline, thus making it easier to convert from 
    rem to px.

4. How would you describe preprocessing to someone new to CSS?
    Ans: Preprocessors are frameworks that upgrade the way we write 
    CSS so that our code is DRY based, more flexible, and easily maintainable. 
    At the end, everything we write in a preprocessor gets translated to CSS, 
    but preprocessors can save us a lot of time.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
    Ans: Mixins, especially parametric mixins are pretty cool. In general writing
    LESS/CSS for older browsers, and knowing when and what to look for in terms of 
    being widely accessible.