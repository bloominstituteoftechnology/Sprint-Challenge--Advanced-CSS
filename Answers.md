1 - What is the difference between an adaptive website and a fully responsive website?
+ An adaptive website, as it's name implies, conforms to the viewing device/environment based on pre-set dependencies that utilize multiple layouts. Said another way, the content has parameters that when met automatically display presentation styling and layout that is tailored to that specific parameter set....there are max or min break points that define what should be displayed.

+ A responsive layout is dynamic in that no matter the display the layout and presentation conforms to the specific viewing parameters as they change incrementally.

+ Adaptive is like a serious of checkpoints and gates that define the content you see.....responsive incrementally changes for a more fluid experience.

2 - Describe what it means to be mobile first vs desktop first.
+ Mobile first means that the developer has established the layout and presentation in such a manner that the site is optimized for a mobile experience. The desktop experience is secondary. Desktop first is vice versa. This is an important distinction because it defines the way that the website (or app) comes to together programmtically. Literally the way that the code is written, described, and optimized.

3 - What does font-size: 62.5% in the html tag do for us when using rem units?
+ Font-size 62.5% adjusts the de facto html font size from 16pt to 10pt. The reasoning for this is such that when the developer used rem units they can still think of the units in increments in simple two digit base 10 for conversion. (Eg 18 becomes 1.8) rather than necessitating a calculation of 62.5% on every font size throughout the website or app.

4 - How would you describe preprocessing to someone new to CSS?
+ Preprocessing allows the developer to more quickly style CSS because preprocessing syntax mimics the nesting feature of html. Additionally, preprocessing allows for the developer to work in tidy and separate files for each section (page of the site) and stlystic subsection (features of the pages like variables and mixins) such that as continued development occurs the format, layout and original intentions are made clear.

5 - What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
+ My favorite concept is that preprocessing seems to fill an absolutely necessary role for the developer. I like to think of development as a constant state of optimization...the syntax of native CSS does not seem sutied alone for this task as 2nd, 3rd and additional orders effects are not clear. Preprocessing makes these effects more clear.
+ I still need to do some more work with advanced mixins....but I will put the work in and the concept will become more clear.
