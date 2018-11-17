1. An adaptive site introduces breakpoints at which the layout of the site changes according to the user's screen size (viewport). 
A fully responsive site has these breakpoints/layouts for differents screen sizes, but also introduces percent based design with constraints. This results in a site with no horizontal scrollbars and a better user experience. 

2. Mobile first means that the project was designed from the mobile perspective first and then made to fit tablet and/or desktop. The media query breakpoints kick in as the user's viewport expands. 
Desktop first means that the project was initially designed from the desktop perspective and then made to fit tablet and/or mobile. The project's design then changes as the user's viewport shrinks.

3. Setting the font-size to 62.5% in the html tag allows us to use the following conversion when using rem units: 1 rem === 10px. (i.e, 1.2rem === 12px, 3.5rem === 35px, etc). This allows us to design the font size in a way that responds to the user's browser settings by using rem units and allows us to have an easy conversion ratio between rem and px.

4. Preprocessing is a technology that makes CSS styles easier to write, easier to read (by humans), and easier to update with new changes to the design. 

5. My favorite aspect of preprocessing is being able to use variables and mixins. It makes development much faster! I struggle with writing concise nested media queries. My brain's "instinct" is to create the media queries and then style the pages accordingly within that.