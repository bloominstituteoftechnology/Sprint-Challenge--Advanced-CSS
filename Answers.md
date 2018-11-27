1. An adaptive website relies on breakpoints to create views for different screen sizes.
   A fully responsive site uses breakpoints and also is percentage-based to be optimized for all screen sizes.

2. It's really just the way the site is built. If you're building a mobile-first site, you will first build the mobile site and then use min-width breakpoints to adapt to tablet and desktop.
If you're building a desktop-first site, you would design the site based on the desktop version and then use max-width breakpoints for tablet and mobile.

3. It allows us to easily convert px to rem. If we set the html font-size to 62.5%, 1.6rem = 16px, 2rem = 20px, etc.

4. Preprocessing just allows us to use a different syntax (in our case, LESS) when writing CSS. It gives us shortcuts and extra functionality compared to vanilla CSS. The LESS is then compiled and becomes pure CSS.

5. My favorite concept is just the nesting. It feels a lot cleaner to be able to nest classes. I also like using mixins a lot. The media queries still give me some trouble. I think they're easier to use in LESS than in CSS,
but I still find myself making mistakes by putting things in the wrong section. That's just user error, though, not a problem with LESS.
