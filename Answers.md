1. What is the difference between an adaptive website and a fully responsive website?

Adaptive website: An adaptive website changes its format/design in stages. These fornats are already incloded in the code so they will work specifically well for the screen sizes it was designed for. So you may run into issues between mobile devices that have varying screen resolutions.

Responsive website: A responsive website handles what an adaptive website couldn't but not without cost. This type of webpage will fit across all screen resolutions and adjust its contents no matter the device. However, this is no easy feat, it must but be designed with precision and tested thoroughly.

2. Describe what it means to be mobile first vs desktop first.

Mobile first: Webpages designed for mobile devices as priority typical focus on functionality. It will begin with its more core functions and as the resolution increases it will add "extras," if you will. The most important content will be available to you in mobile view and carried over into larger designs with some added extras. Typically more siimplistic, load faster, and minimalistic.

Desktop first: Webpages that are designed in this fashion concentrate more so on making the desktop/full sized screen experience better by communicating as much information as possible. This doesn't necessarily mean they will not adjust to mobile views but it means that when they do some content will be removed altogether. Ideal for websites that are heavily focuses on features.

3. What does font-size: 62.5% in the html tag do for us when using rem units?

font-size: 62.5%

rem:

Answer: The idea behind not using just straight pixels are for accessbility reasons. Many internet users, like my dad, have trouble seeing the tiny letters displayed on their screen and will often seek to make it larger. If you have your webpage text set to a pixel sizing the user will not be able to get this feature.

Answer: We set HTML font to be 62.5% because 62.5% of 16px, a standard font size, is 10px. So if we set a font-size of 1.6rem later on in our CSS that will be an equivalent of 16px. So as a user changes their browser font-size, so will your HTML text, enabling them to read your content at their preference size.

4. How would you describe preprocessing to someone new to CSS?

Preprocessing: The process in which your code, written in a more robust syntax for CSS (like Less or Sass), is copiled (using JavaScript) to output it into normal CSS. This makes a lot of things streamlined because syntacical grammar is optimized for nesting, creating variables, mixins and other features not available in CSS that make your web development process more efficient.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

What the compiler is actually doing is hard to comprehend for me. My understanding is that at some point the .less files are converted into machine language then into CSS? I suppose understanding what happens in the preprocessing step by step is where I don't have much clarity.