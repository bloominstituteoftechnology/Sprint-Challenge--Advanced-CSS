# Assessing Your Advanced CSS Learning

You will be updating a website using all your responsive web design and preprocessing skills from the sprint. The theme of this challenge is _Spacewalkers Magazine_. Spacewalkers needs your help to build a small proof of concept website for their marketing team. They have provided designs for both desktop and phone views. In addition to designs and content they have most of the home page coded for you. You just need to finish the navigation and header as well as the mobile styles.

* This project is to be worked on alone but you can google all you want. You may reference any previous code solutions as well as training kit content.  

## Task 1: Set Up The Project With Git

* [ ] Fork the project into your GitHub user account

* [ ] Clone the forked project into a directory on your machine

* [ ] You are now ready to build this project with your preferred IDE

### Pro tip: Commit every time you complete a task or feature!

## Task 2: Comprehension Questions

Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit. Open up the [Answers.md](Answers.md) file and record your responses there.

1. What is the difference between an adaptive website and a fully responsive website?

   - Adaptive website: An adaptive website changes its format/design in stages. These fornats are already incloded in the code so they will work specifically well for the screen sizes it was designed for.  So you may run into issues between mobile devices that have varying screen resolutions.
     
   - Responsive website: A responsive website handles what an adaptive website couldn't but not without cost. This type of webpage will fit across all screen resolutions and adjust its contents no matter the device. However, this is no easy feat, it must but be designed with precision and tested thoroughly.

2. Describe what it means to be mobile first vs desktop first.

   - Mobile first: Webpages designed for mobile devices as priority typical focus on functionality. It will begin with its more core functions and as the resolution increases it will add "extras," if you will. The most important content will be available to you in mobile view and carried over into larger designs with some added extras. Typically more siimplistic, load faster, and minimalistic.

   - Desktop first: Webpages that are designed in this fashion concentrate more so on making the desktop/full sized screen experience better by communicating as much information as possible. This doesn't necessarily mean they will not adjust to mobile views but it means that when they do some content will be removed altogether. Ideal for websites that are heavily focuses on features.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?

   - font-size: 62.5%
   - rem:
   - Answer: The idea behind *not* using just straight pixels are for accessbility reasons. Many internet users, like my dad, have trouble seeing the tiny letters displayed on their screen and will often seek to make it larger. If you have your webpage text set to a pixel sizing the user will not be able to get this feature.

   - Answer: We set HTML font to be 62.5% because 62.5% of 16px, a standard font size, is 10px. So if we set a font-size of 1.6rem later on in our CSS that will be an equivalent of 16px. So as a user changes their browser font-size, so will your HTML text, enabling them to read your content at their preference size.

4. How would you describe preprocessing to someone new to CSS?

   - Preprocessing: The process in which your code, written in a more robust syntax for CSS (like Less or Sass), is copiled (using JavaScript) to output it into normal CSS. This makes a lot of things streamlined because syntacical grammar is optimized for nesting, creating variables, mixins and other features not available in CSS that make your web development process more efficient.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

   - What the compiler is actually doing is hard to comprehend for me. My understanding is that at some point the .less files are converted into machine language then into CSS? I suppose understanding what happens in the preprocessing step by step is where I don't have much clarity.

## Task 3: Set up your preprocessor

* [ ] Verify that you have LESS installed correctly by running `lessc -v` in your terminal, if you don't get a version message back, reach out to your project manager for help.

* [ ] Open your terminal and navigate to your preprocessing project by using the `cd` command

* [ ] Once in your project's root folder, run the following command `less-watch-compiler less css index.less`

* [ ] Verify your compiler is working correctly by changing the `background-color` on the `html` selector to `red` in your `index.less` file.

* [ ] Once you see the red screen, you can delete that style and you're ready to start on the next task

## Task 4: Import LESS Files

* [ ] Navigate to your `index.less` file. Notice the file is blank. You have been asked to use a certain import order. That order is as follows:

1.  `variables.less`

2.  `mixins.less`

3.  `reset.less`

4.  `global.less`

5.  `navigation.less`

6.  `footer.less`

7.  `home-page.less`

_You will know everything is working properly when you see the styles enabled for the provided content._  

## Task 5: Home Page - Desktop HTML & LESS

* [ ] Take 10 minutes to review the code that has already been provided for you. Take time to see how the home page was built.

* [ ] Add a viewport meta tag to the head of your index.html page

* [ ] [Review the provided home desktop design file](design-files/home-desktop.png). You are to build the missing navigation system and header image. You have been provided all content necessary in the [index.html file](index.html)

* [ ] Navigation Styles: Use the `navigation.less` file for styling.

* [ ] Main Content Styles: Use the `home-page.less` file for styling

* [ ] LESS Mixins: Create and use 2 different mixins to aid your styling. Use the `mixins.less` file for your mixins

* [ ] LESS Parametric Mixin: create a parametric mixin that is used to create the `sign up` button styles.
	* [ ]  Use at least 2 parameters to create your button
	* [ ] Create a hover state that swaps the background color and font color of the base button styles.

## Task 6: Home Page - Mobile HTML & LESS

* [ ] Create a `@phone` variable that contains a `max-width: 500px` media query string. Use the `@phone` variable for all your nested mobile styling.
* [ ] [Review the provided home mobile design file](design-files/home-mobile.png). Match your mobile styling the best you can using the design file.
* [ ] Push your changes and create a pull request if you haven't already.   

**Congratulations, you completed the sprint challenge!**

## Stretch Goals

Stretch goals are only available if you complete every task listed above. **Do not work on them until your pull request is in.**

* [ ] Build a page of your choosing from the navigation items. Come up with content and images that fit the theme.

* [ ] Introduce CSS animations to your site.

* [ ] Create a fixed navigation and add some opacity to the background

* [ ] Create a form that would allow someone to sign up for a Spacewalkers Magazine subscription