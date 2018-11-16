1. What is the difference between an adaptive website and a fully responsive website?
    - Adaptive websites utilize `@media` breakpoints to change styling for different device widths. They don't necessarily incorporate fluid design principles (% based layout). Fully responsive websites utilize % based layout in addition to `@media` breakpoints so that horizontal scrolling is not necessary for view widths between the breakpoints set for different devices.

2. Describe what it means to be mobile first vs desktop first.
    - Mobile first websites are styled first for mobile devices and contain `min-width` queries for larger device styling. Everything above the `min-width` queries are mobile design styles. Desktop first websites are styled for desktop view first and contain `max-width` queries for smaller device styling. Everything above the `max-width` queries are desktop design styles.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?
    - Setting `font-size: 62.5%` in the `<html>` tag sets one `rem` unit equivalent to `10px`.

4. How would you describe preprocessing to someone new to CSS?
    - Preprocessing is a way to use a language with a syntax different from CSS which allows code to be more succinct and less error-prone. Features like variables and nesting of styles allow for faster, more accurate coding of styles.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
    - My favorite concept is variables. CSS syntax is by nature very "WET" and the introduction of variables allows for code that is "DRY".  I feel pretty strong on preprocessing concepts. The one thing that held me up with yesterday's assignment was escaping: I first attempted to use the post LESS 3.5 method of non-quote escaping (eg: just type escaped stuff vs. ~"escaped stuff") but I received errors. I reverted to using quote-escaping and everything was fine. Going forward I may try non-quote-escaping again but I will remember to default to just using the quotes.