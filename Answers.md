1. An adaptive website has breakpoints for different sized screens, but is not % based. A fully responsive
website has the benefits of an adaptive website (breakpoints) AND of a fluid website (percentage-based layout).

2. Mobile first means that your design starts with a mobile layout, and that your default styles are for the mobile layout. After that, media queries are used with (min-width) to style for bigger screens.

3. When we set font-size to 62.5% in the html selector, this allows us to calculate font sizes with rem in easy multiples of 10 (e.g., to get the equivalent of 16 px, use 1.6rem).

4. Preprocessing allows us to use an alternative syntax (such as LESS) to more easily do a programming task (like style a sheet), by utilizing a compiler (such as Node.js) to convert the alternative syntax to a source file in a traditional language (like CSS). This is handy, because the alternative syntax is designed to be much easier to write and read than the syntax of the target language (e.g.,in LESS you can nest selectors instead of having to use CSS's messy selector1 selector2 selector3 {} syntax).

5. My favorite concept in preprocessing is how all the features of a preprocessor (such as LESS's syntax, imports, variables, mixins, etc) come together to make a difficult, traditional workflow much simpler and clearer to keep track of. It is not so much a concept that I have trouble with, as it is getting used to using a preprocessor correctly.
