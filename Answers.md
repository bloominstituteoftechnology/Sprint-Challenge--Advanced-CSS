1. What is the difference between an adaptive website and a fully responsive website?

  An adaptive website uses predefined screen sizes to adapt itself to resolutions across devices. A fully responsive website does this as well, but also utilizes percentages for all its widths. A full responsive website is basically a fluid and adapative design combined.

2. Describe what it means to be mobile first vs desktop first.

  Mobile first means designing a website with the mobile view as the first priority. This means that the media queries will use for example `@media (min-width: 500px)`. This also means that the CSS will cascade from smallest width to highest. Desktop first is the opposite (`@media (max-width: 500px)`).

3. What does font-size: 62.5% in the html tag do for us when using rem units?

  Font-size: 62.5% in the html tag means our root rem unit of 1 will equal exactly 16px in font-size. 28px font-size will equal exactly 2.8rem.

4. How would you describe preprocessing to someone new to CSS?

  Preprocessing is simply a more robust CSS syntax for CSS written in a (pretty much the same) different language. The most straightfoward explanation of CSS preprocessors: 

    Syntax (LESS) -> Compiler (JavaScript) -> CSS

5. What is your favorite concept in preprocessing? What is the the concept that gives you the most trouble?

  My favorite concept in preprocessing is the component aspect of it. Preprocessing does not give me trouble in terms of concepts. 
