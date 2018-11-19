What is the difference between an adaptive website and a fully responsive website?

### Adaptive website has breakpoints where the layout of the page changes, but is not suitable for all screen sizes.  Responsive design builds on adaptive by using % based widths for a more fluid user experience.

Describe what it means to be mobile first vs desktop first.

### Desktop vs mobile first design is based on whichever device will be most used by users.  In a desktop first design, the main styles will be for the widest viewport, with media queries introduced as the viewport shrinks.  Mobile first is the exact opposite; the main styles will be for the mobile viewport with media queries introducing new styles/layout as the viewport widens.

What does font-size: 62.5% in the html tag do for us when using rem units?

### Converts the 16px base font-size from the user agent stylesheet to 10px for easy calucation.  After using this 10 times rems = pixels.

How would you describe preprocessing to someone new to CSS?

### Preprocessing simply makes writing vanilla CSS easier.  Specifically they help write re-usable CSS for large projects.  Using preprocessors can make a large codebase more maintainable then using vanilla CSS.

What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

### Nesting is my favorite concept in preprocessing.  It helps get rid of specificity problems I always had when trying to write long selector chains in vanilla css.  Parametric mixins give me some trouble now, as I simply haven't used them too often, and they have a few strange syntax rules based on the use of the parameters.