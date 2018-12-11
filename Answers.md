1. What is the difference between an adaptive website and a fully responsive website?

Both adapative and fully responsive websites contains breakpoints for different size devices. However, fully responsive provides a better user experience since the content flows naturally between the various breakpoints. This is achieved by setting all left and right margins and paddings to a percent instead of a pixel size. 

2. Describe what it means to be mobile first vs desktop first.

Mobile first means that all the content and margins are set for the mobile width first. The various media queries (tablet-vertical, tablet-horizontal, desktop, etc.) contain a min-width px amount. Desktop first means that the project is built with desktop specifications in mind and then various media queries (tablet-horizontal, tablet-vertical, mobile, etc.) contain a max-width px amount.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units? 

em: relative to the font size of the closest parent.
rem: relative to the root (aka html) element font size. 

rem math: if font-size is set to 10px, 1.6rem ==> 16px = 1em (approximately) = default font size.

10 is an easier multiplier. So by changing html font-size to 62.5% (= 10px/16px) everything is based off of 10px.

For people with accessibility issues, they may want larger font and change there settings so that the default font size is 20px. 1.6 rem would equal 20px for them.


4. How would you describe preprocessing to someone new to CSS?

Preprocessing is a pretty wrapper to provide a more logical and organized method to writing CSS. It is easier to identify the flow of the content and the relationship between elements (aka parent-child and siblings). Also, media inquiries are placed inside the item they are affecting instead of at the bottom of the page. Also, settings that often go together can be grouped together and given a variable name.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

Best
-- media inquiries are placed inside the item they are affecting
-- relationship between elements (aka parent-child and siblings)
-- grouping settings together in Mixins (with and without parameters).

Nothing troubling. I wish I was faster at identifying styles at the outset instead of seeing the pattern later.


