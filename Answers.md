What is the difference between an adaptive website and a fully responsive website? <br>
An adaptive website relies only on breakpoints whereas a fully responsive website uses both breakpoints and percent-based layouts to look good at all sizes. <br><br>

Describe what it means to be mobile first vs desktop first. <br>
Mobile-first is based on min-width media queries whereas desktop-first is based on max-width media queries. The former starts with a layout for a small screen and changes as the screen gets larger. The latter starts with a layout for bigger screen size and changes as the screen gets smaller.<br><br>

What does font-size: 62.5% in the html tag do for us when using rem units? <br>
It sets the root font size to 10px (from the user agent standard of 16px); this makes conversions from px to rem very simple: just divide by 10. <br><br>

How would you describe preprocessing to someone new to CSS? <br>
Preprocessing extends the functionality of CSS by utilizing a different programming language. We use LESS, which is based on Javascript. Whatever you write in the preprocessor gets compiled into vanilla CSS.<br><br>

What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?<br>
I love the ability to use mixins to make my code more DRY. However, I'm also a bit cautious of using mixins that contain lots of parameters and other mixins; I'm sure I'll get over it with more practice!