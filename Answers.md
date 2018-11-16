1. What is the difference between an adaptive website and a fully responsive website?

An adaptive website relies on separate layouts for pre-set screen resolutions. Layouts are individually optimized for individual devices (as opposed to using a single template), which requires more work and leaves room for unaccounted screen resolutions.

A responsive website uses one template (master layout) that responds to the screen resolutions of devices as detected by media queries, adapting to all screen resolutions. Content will scale properly for each device with precision and user-friendly visual results.

2. Describe what it means to be mobile first vs desktop first.

"Mobile first" means that the web designer will be focused on setting up a smaller mobile view as the primary view for the web site/page (i.e. the mobile view will be the view that media queries - mostly using the min-width property in this case - will be based off of).

"Desktop first" means that the web designer will be focused on setting up a larger mobile view as the primary view for the web site/page (i.e. the larger view will be the view that media queries - mostly using the max-width property in this case - will be based off of).

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?

I will explain each term first and then show how they all come together:

• `html` refers to the document-wide selector in the CSS code that goes by the same keyword. It is used to make property value settings that affect everything in the web pages that the design file is linked from.

• The `rem` unit is a unit of measure in web design that is able to scale with the size of the tool being used to view a web page. Its values in pixels (the root/standard unit of measure) is dependent on the `html` selector alone (by default, 1 rem === 16 pixels -> the standard font size) - hence the "r", which stands for "root." Because of its scalability, it is often used for setting responsive size values.

• `font-size: 62.5%` is a value that is used to change the ratio of rems to pixels from 1:16 (default/base ratio) to 1:10. This works using the percentage formula in mathematics: `Rate * Base = Percentage`, so `0.625 * 16 = 10`. This is done by many CSS coders to make it quicker to convert pixel values to rem values (multiple of 10 are easier to do mental math with than multiples of 16).

**Altogether, the setting will ensure that in the entire design file, the value of 1rem will always be 10px for ease of conversion.**

4. How would you describe preprocessing to someone new to CSS?

I would describe it as a set of syntactical shortcuts that one can use to shorten, modularize and organize CSS code, as well as make it more convenient to update.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

I favor the idea of saving values (or even chunks of property settings) for reuse (i.e. mixins, variables and mapping) because of how it makes CSS designs more scalable and update-friendly.

At the same time, therein lies the challenge for me - with all the abilities to shorten code, what makes me need to stop and think is the idea of how to organize my code to actually be DRY and reusable. I would have to avoid the pitfalls of overly compressing code in order to be more efficient as a CSS coder.