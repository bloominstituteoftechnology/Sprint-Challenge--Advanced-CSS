1. If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?
--A preprocessor is s program that turns code in some other language/syntax (like LESS or SASS) into standard CSS.  This can make it much easier to write the CSS, especially if it is complicated or contains many repeating elements.
2. What is the command in node package manager (npm) to install LESS globally on your computer?
--`npm install -g less`
3. Please provide an example of a mixin you have used in a project this week.
--We have used a `.border-radius` mixin to standardize our border sizing across multiple browsers in all of our projects.
4. What is the difference between fixed layout, adaptive layout, and fluid layout?
--A fixed layout looks exactly the same on any device or viewport size - this is almost always a bad thing, because smaller viewports will require horizontal scrolling and have other aesthetic issues.
--An adaptive layout uses media queries to alter the site's CSS under particular conditions: almost always changes in the viewport size.  This way, the site's design can be altered for smaller devices like phones and tablets, while being easily maintainable cross-platform.
--A fluid layout is a furtherance of this conceot, where percentage-based property values and other responsive CSS features allow elements to dynamically resize and rearrange as the viewport size changes.
5. Why do we need to use the CSS property max-width in a responsive website?
--It prevents elements of the site from ballooning past their intended display size - this is especially important with images that will look bad if resized in a disproportional way.