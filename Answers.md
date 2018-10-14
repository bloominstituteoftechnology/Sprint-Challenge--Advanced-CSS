
1. What is the difference between an adaptive website and a fully responsive website?

A: The first type "adapts" to the browser's fixed width at set points (break points, for ex: 800px/500px) and the user will experience a more sudden
or crisp/curt change in the site layout when the browser size hits those points. The second type "responds" to the browsers width changes without specificity
break points (though you still have to address those in the media queries) - the layout simply responds to the changing browser width. The layout change is a smoother (or fluid) transition than with adaptive designs.
Overall there aren't many differences than those - both take their queue from the browser width.

2. Describe what it means to be mobile first vs desktop first.

A: Mobile-first design is the path of least resistance when building a site since a) responsive designs are preferred by Google and get priority in search engine listings and b) it allows
for the development of the most necessary parts of the framework and design first without all of the bells and whistles you might experience on a non-responsive desktop layout. For example:
animation is cool, but is it a necessary function for the user? This approach designs with "min-width" first, not "max-width" as with desktop-first. Also, desktop-first is mainly driven by UI design as a 'quick and dirty' solution to getting a company site up and running as soon
as possible. Mobile-first is the preferred way to go but desktop-first is often the reality.

3. What does font-size: 62.5% in the HTML tag do for us when using rem units?

A: There's some math involved here but the shortest way to explain this is that when you set font-size to
62.5% in the HTML tag, you're telling the browser to interpret everything based on a multiplication of 10(pixels), so
for example: 1.3rem would be the equivalent of 13px; 2.1rem would be 21px and so forth.

4. How would you describe preprocessing to someone new to CSS?

A: Preprocessing is just programming short-hand that saves developers time in writing code. You can define
conditions using variables, functions, mixins etc once, then use those same variable etc throughout the code. Basically it keeps your
code dry and saves time by avoiding the need to write out the same detailed conditions over and over.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

A: The concept of preprocessing in and of itself is so awesome. Usually with CSS you design out the parent element and then go on to the child and write much of the same values all over again. With preprocessing you can just design out the parent element and nest child elements and boom  - instant awesomeness & you saved time!
You can write all of the code using LESS and then it will compile it into CSS format so the browser understands what's going on. SO COOL! The concept that gives me fits though is the syntax and mixins. It's still new and with so much information coming
at me at one time (like trying to sip water from a fire-hose) sometimes my brain flips things around and then nothing works. *Noob struggle*.