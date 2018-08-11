**What is the difference between an adaptive website and a fully responsive website?**

An adaptive website is one which adapts itself to the user at specific points, while a fully responsive website is responsive to browser size (usually browser width?) at any given point.

**Describe what it means to be mobile first vs desktop first.**

Mobile-first sites means optimizing a site for a mobile device first and then later designing/developing the look on tablets and desktop sites, rather than creating a full desktop website and adding adaptive or responsive features for smaller screens.

**What does font-size: 62.5% in the html tag do for us when using rem units?**

Allows us to declare a baseline saying that we'll take 1em as 10px. Later, we can give something a height of 1.6rem that would be 16px, but by avoiding the hard px code, people who change their browser text size for accessibility reasons have access to the same site look/feel/functionality.

**How would you describe preprocessing to someone new to CSS?**

CSS Preprocessers are tools to increase our CSS efficiency and clarity. Variables (setting a global `@link-color` and `@media` queries) and Mixins (`button-padding`) allow us to (a) write less code and (b) more easily change the code as we maintain projects (e.g. changing a global link color).

**What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?**

Maybe boring, but nesting is really dope. It took me a bit to realize that you could target `nav a` rather than just slapping IDs on everything (:D) and now it's visually much clearer to just stick my `a` styling inside my `nav` styling.

