What is the difference between an adaptive website and a fully responsive website?

Describe what it means to be mobile first vs desktop first.

What does font-size: 62.5% in the html tag do for us when using rem units?

How would you describe preprocessing to someone new to CSS?

What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?





1. Adaptive websites have breakpoints, a fully responsive layout looks good at every screen size.

2. Mobile first is designed with smaller screen sizes in mind. The media queries will uses min-width, whereas desktop first will use max-width.

3. 62.5% changes the default font size to 10px. With this, it's easier to use "rem" because you're dealing with powers of ten, i.e. 1.6rem = 16px.

4. Preprocessing makes CSS more like a programming language. It allows you to use variables. It allows you to nest selectors in a way that looks similar to HTML. Less -> Compiler -> CSS. 

5. My favorite concept is mixins. I like the flexibility they give you. At the same time, mixins are probably the most difficult concept for me to grasp because they are fairly complex relative to others in preprocessing. 