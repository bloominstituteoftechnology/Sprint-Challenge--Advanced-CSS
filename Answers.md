1. What is the difference between an adaptive website and a fully responsive website?

- An adaptive website is tailored specifically to different resolutions. That means having multiple designs for mobile, tablet, and desktop. It takes more time to load since there are many different layouts and not as quick to craft.

- A fully responsive website is one that is responsive across almost all breakpoints. While being more difficult to make, it offers a more modern and intelligent way to adapt to whatever the screen size the user is looking at. It loads faster than an adaptive website but takes a thorough hand to develop and making sure it works on all devices.

2. Describe what it means to be mobile first vs desktop first.

- Mobile first is working starting with the mobile device in mind. It's building the app from the smaller sizes and moving up to tablet and desktop. Respectively, the developer has to use min-width and increasing screen pixels in the media query to hit the right breakpoints for the app to adapt for the user's screen correctly.

- Desktop first is developing from the desktop screen first and subsequently tailoring it down to smaller screens. Respectively, the developer has to use max-width and decreasing screen pixels in the media queries. Desktop first is a common approach probably due to it's quick ability to reach more user base. If there is a proper design team, they might start developing from mobile first since they might not be under the same time constraints.

3. What does font-size: 62.5% in the html tag do for us when using rem units?

- The 62.5% is meant to standardize the font-size to 10px. This makes it easier to work with rem units and is easier to do mental math. For example, using 2.4rem is easy to calculate to 24px. The default pixels is usually 16px.

4. How would you describe preprocessing to someone new to CSS?

- Preprocessing is a way to help speed up writing your CSS code with its many abilities like nesting, variables and mixins but does not replace CSS. You are essentially writing CSS but the code you write with the preprocessor gets compiled down to plain CSS. The LESS preprocessor use node under the hood to convert our LESS code. It's a great way to optimize your time and helps with other matters such as media queries, animations, and color manipulations.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

- My favorite concept is the ability to use variables, mixins, and nesting. Variables and mixins help me abstract the complicated codes I can't memorize like hex-codes or multiple css stylings and being able to apply them anywhere across the whole project. Changing them is also a breeze. Nesting really helps keep me organized without having to worry about naming collisions and global styles.

- The most diffcult concept so far I'm working with are CSS animations with LESS. It's a lot of abstracting and hard to put together all the working pieces of the animation. However, I was able to get it to work and felt great. I understood most of the concepts in LESS since it's very much like javascript variables and functions.