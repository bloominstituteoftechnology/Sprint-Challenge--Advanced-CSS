1. An adaptive website still uses fixed width layout techniques within breakpoints, whereas a fully responsive website uses more fluid layout techniques, with some fixed here and there.

2. A mobile first design will begin generally by creating a single column layout, then creating a first breakpoint using a min-width media query. A great way to think about this is the viewports pixel count as you resize the page from side to side.

3. font-size: 62.5% scales our browsers default 16px setting to a more math friendly, 10px. Therefore all we need to do is think 1rem x 10px for our computed result.

4. Preprocessing allows us to utilize DRY programming techniques to better organize our CSS, as the language tends to repeat itself often. These DRY principles are a good introduction to more general programming languages as they illustrate practical use cases for variables, functions, etc...

5. My favorite concepts in preprocessing is modularity and namespacing, as these two ideas allow us to collaborate and reuse code. The concept that gives me the most trouble is the practical realities of nesting, however I think that breaking code into multiple files solves this problem elegantly. I imagine we will learn more about his as we get to Components.