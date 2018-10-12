1. What is the difference between an adaptive website and a fully responsive website?

    adaptive websites change layout with different device views, generally with hard coded values, where a responive site is a mixture of adaptive and fluid layouts, generally achieved using % and relative/responsive units of measure

2. Describe what it means to be mobile first vs desktop first.

  mobile first websites are styled starting at the mobile view and expanding from there with the use of min-width media queries where as desktop first begins with the desktop layout and styles the smaller views later with the use of max-width media queries

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?

  It basically sets the font units to a base 10 so that writing the sizes is accomplished easily (i.e. 16pt font will 1.6rem) and this also allows the layout to respond nicely with the browsers default font setting changed for accessibilty reasons

4. How would you describe preprocessing to someone new to CSS?

  Preprocessing is a means of adding functionality into css through the use of an additional compiler (depending on the preprocessor this may be based in Ruby as with SASS or JavaScript as with LESS) that allow for the use of functions, nesting, mixins, imports and much more. these allow for more seperation of concerns by allowing the reuse of code easily without having to continually rewrite commonly used key: value pairs, having individual files for each component keeping organization easy and many other useful features

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

  I love the parametric mixins for flexible and fast styling of usually verbose rule sets. the part i guess i would be most fuzzy on would be scope maybe, just because i haven't played with the functions much yet in it and just breifly looked over the scope documention.  