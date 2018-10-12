1. What is the difference between an adaptive website and a fully responsive website?

- adaptive websites only use break points and have no fluidness to them, fully responsive websites use both breakpoints and fluidness, like responsive units and % units

2. Describe what it means to be mobile first vs desktop first.

- A mobile website will be base off of a mobile design and and will use min-width for breakponts for increasing screens sizes
- Desktop first is base off of desktop design and use max-width for breakpoints in media queries for decreasing screen sizes.

3. What does font-size: 62.5% in the html tag do for us when using rem units?

- is the precentage of the browsers Default font-size, for normal size is 16px and 62.5% is 10px, rem units is a responsive unit that has html element as its parent or root. place 62.5% for font-size in html and 1rem will equal to 10px. max it easier to use rems without doing math and know the size of the font-size in px. rems are use for scaling when browsers default size is changed, so more websites can be accessible to everyone.

4. How would you describe preprocessing to someone new to CSS?

- pre-processing is basicly css but writen in a differnt syntax, like less, or sass, or scss, these are called pre-processors, they allow for faster and better development process of working with css. css is written in one of these syntax's and compiled into css.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

- nesting and mixins are really neat allows you to stay DRY with code and better see the relationships of parent and child elements.
- though working with media queries gets kinda confusing when placing them in the very specific child because you have so many of them and when something doesn't work it takes time to find the issue. for me it slows down my development process.
