1.
  Adaptive websites have different layouts for different screen sizes.
  The different layouts may be set using media queries at different breakpoints, or they might be entirely different HTML files/URL's (the old m. prefix comes to mind). Theirs is a more rigid design style, that doesn't necessarily account for non-conforming display resolutions. Fully responsive websites adapt a fluid design style, along with breakpoints that change the layout when needed.  This allows the site to scale with different resolutions between breakpoints, hopefully making the site more visually pleasing across a wider array of devices.

2.
  With mobile first design, you start with the mobile version of the website, and build out from there (setting breakpoints with media queries and the min-width property).  The design begins with the narrowest viewport and scales up from there.

  Desktop design goes in the opposite direction, with the initial design being based around the larger viewport of a computer screen.  Breakpoints are set using media queries and the max-width property.  As the viewport shrinks, the site scales down to fit tablet and mobile screen sizes.

3.
  It allows us to easily set font sizes on our page without hijacking a user's browser's default font sizes.  The 62.5% setting allows us to have 1 rem unit equal roughly 10px.  This makes the mental math much easier when styling the page.

4.
  Preprocessing allows us to write CSS more like a traditional programming language.  Using element nesting, variables, and other techniques, preprocessors help to keep style code more organized, DRY, and maintainable.  This nice clean code is then compiled by the preprocessor compiler into a CSS file that, while not necessarily cleaner or easier to read for a person, is usable (and possibly more efficient) by the browser.

5.
  I love mixins and variables.  With proper use, they seem like they will make tweaking or changing a website's styling much easier, with less need to change the HTML as well.  Nesting is great, but I find myself struggling with knowing exactly when and where to nest certain properties.  I think this will become more apparent to me as I continue to use LESS and preprocessors in general.
