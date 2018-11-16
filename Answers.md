### 1. What is the difference between an adaptive website and a fully responsive website?

An adaptive website uses visual breakpoints, but one must design different hard coded layouts for different screen sizes. The website detects the screen size of the user and then loads the proper layout. Responsive design combines the idea of adaptive - having different looks for different screen sizes - but coding it in such a way that the site is user-friendly no matter the viewport size. A fully responsive design combines percentage-based layout design along with media queries to be fluid and fit whatever viewport size it is presented.

### 2. Describe what it means to be mobile first vs desktop first.

"Mobile-first" design and programming is to start with and optimize a website for a smaller viewport size: a mobile viewport. Then the website is expanded horizontally to adapt the website for tabley views and, finally, desktop views. "Desktop-first" is the opposite, in that the design and programming begins at a desktop viewport size and shrinks down to tablet and finally mobile. In usage, mobile-first coding uses `min-width` media queries while mobile first utilizes `max-width` media queries.

### 3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?

Doing this shrinks the default font size of the entire HTML document by 62.5%. Since most, if not all, browsers set their default font size at 16px, shrinking it by 62.5% it makes the new default 10px. This makes the math of scaling up way easier in `rem` units, which are relative to the root element (the HTML document). If you want to now set your `<p>` tags to 16px, you set the `font-size` property to `1.6rem`. This is because `10px` x `1.6` = `16px`. 

### 4. How would you describe preprocessing to someone new to CSS?

Preprocessing is the practice of utilizing different syntaxical utilities to make creating your CSS more efficient, organized, and powerful. Preprocessing allows you to create small bits of code that you can reuse by storing said code in variables and mixins. Variables store a piece of information, like a hex color code or a font family, and mixins store styles and look just like a declaration block. These are then inserted throughout the preprocessed CSS document where you want to apply those variables or styles. So if you want to change the value of these items later on, you only have to do it once at the initialization of the variable or mixin, rather than everywhere you used them in the document. Preprocessing also allows you to nest your CSS selectors, which makes the document more organized and it matches the structure of your HTML document.

### 5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

Honestly, I like everything about preprocessing, but I really like the nesting functionality. It solves the problem of document bloat and makes it less likely to make spelling or syntax mistakes. I haven't found a concept yet that gives me significant trouble, but I'm still figuring out the most effective way to utilize mixins. I understand exactly what they do and why they are powerful, but I sometimes have trouble determining when it's appropriate to create a mixin or just let the code be an individual rule.