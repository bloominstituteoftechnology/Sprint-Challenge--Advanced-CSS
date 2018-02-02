# Assessing Your Preprocessor and Responsive Design Learning

* The objective of this challenge is test your knoweldge on all of the topics surrounding preprocessing (LESS) and responsive web design you learned this week.
* Answers to your written questions will be recorded in _Answers.md_
* This is to be worked on alone but you can use outside resources. You can _reference_ any old code you may have, and the LESS Documentation, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words. Be as thorough as possible when explaining something.
* **Just a friendly Reminder** Don't fret or get anxious about this, this is a no-pressure assessment that is only going to help guide you here in the near future. This is NOT a pass/fail situation.

## Start by forking and cloning this repository.

## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

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


## Initializing Project
* Fork / Clone this project into a directory on your machine.
* `cd` into your forked local copy.

## Get LESS up and running
1. Be sure LESS is installed globally
2. If you haven't already, install a less watch compiler globablly by running: `npm install -g less-watch-compiler`
1. Once that is install you should be able to run `less-watch-compiler less css index.less`

**If you get user permission errors,** re-run the command with: `sudo` in front of it.

## Complete these tasks
* Make every gray background turn black using one variable.
* Convert all font-size values from px to rem, make sure that all of the rem values are based on a 10px base.
* Nest every LESS selector appropriately
* Use the mixin ".center-content" to center the text in `nav`, `.logo`, `.boxes`, and the `footer`.
* Use the mixin ".border-radius" to make the `.logo` an oval shape (hint: 50%)
* Make the whole site responsive by adjusting the .container class' width to 100% and introduce a max-width.
* Use the escaped media query variable for laptop sizes (1100px) and update `nav`, `.box1` and `.box4` to have a background color of green;
* Use the escaped media query variable for tablet sizes (768px) and update `.logo`, `.box2` and `.box3` to have a background color of purple;
* Use the escaped media query variable for phone sizes (400px), and update `nav`, `footer`, `.box1`, and `.box4` to have a background color of orange;
* Once you're done with all the tasks, push your commits to your fork and submit a Pull-Request

**Stretch Goal**
* Collapse boxes 1-4 to full width on tablet and phone.
* Decrease the navigation box to half of it's current height on phone and make it full width.
* Make the logo move to the top of navigation on phone using flexbox.

**Super Stretch Goal**
* Switch the media queries to min-width and accomplish the same color goals AND layout goals listed above. 

### Remember you can use any resources you want to solve these problems, but avoid copying/pasting solutions you've previously written. Also if you don't finish all of the challenges, that's fine! Just do what you can and submit your challenges in the end! HAVE FUN!
