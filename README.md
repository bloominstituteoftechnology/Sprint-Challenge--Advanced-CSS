# Assessing Your Advanced CSS Learning

You will be updating a website using all your responsive web design and preprocessing skills from the sprint. The theme of this challenge is _Spacewalkers Magazine_. Spacewalkers needs your help to build a small proof of concept website for their marketing team. They have provided designs for both desktop and phone views. In addition to designs and content they have most of the home page coded for you. You just need to finish the navigation and header as well as the mobile styles.

* This project is to be worked on alone but you can google all you want. You may reference any previous code solutions as well as training kit content.  

## Task 1: Set Up The Project With Git

* [*] Fork the project into your GitHub user account

* [*] Clone the forked project into a directory on your machine

* [*] You are now ready to build this project with your preferred IDE

### Pro tip: Commit every time you complete a task or feature!

## Task 2: Comprehension Questions

Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit. Open up the [Answers.md](Answers.md) file and record your responses there.

1. What is the difference between an adaptive website and a fully responsive website?

<!-- An adpative website reponds to browser changes at specific dimensions whereas a fully responsive website changes and responds to the browser size at any given time -->

2. Describe what it means to be mobile first vs desktop first.

<!-- In desktop first, the design and development are focused on the desktop view being the most detailed and dynamically responsive -- this means that some features may be hidden or lost in mobile view.  Mobile first development is quite the opposite where the sites or applications are built with a mobile user in mind (usually sites that derive most of their use from mobile users will implement this technique) and will start development from a mobile view with full features and functionality included.-->

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?

<!-- It's used to convert to a base font size of 10 from the default of 16.  16 * 62.5 / 100 = 10 -->

4. How would you describe preprocessing to someone new to CSS?

<!-- Preprocessing baiscally lets you use a new form of syntax to code your CSS in a more efficient manner which in turn makes it more easier to read and manage on a large scale -->

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

<!-- My favorite concept thus far has been nesting.  It's totally changed how I setup my code and makes it so much easier for me to go back and locate code that may have a mistake in it.  The concept that gave me the hardest time was parametric mixins, but after yesterday I feel that I have a better grasp on it. -->

## Task 3: Set up your preprocessor

* [*] Verify that you have LESS installed correctly by running `lessc -v` in your terminal, if you don't get a version message back, reach out to your project manager for help.

* [*] Open your terminal and navigate to your preprocessing project by using the `cd` command

* [*] Once in your project's root folder, run the following command `less-watch-compiler less css index.less`

* [*] Verify your compiler is working correctly by changing the `background-color` on the `html` selector to `red` in your `index.less` file.

* [*] Once you see the red screen, you can delete that style and you're ready to start on the next task

## Task 4: Import LESS Files

* [*] Navigate to your `index.less` file. Notice the file is blank. You have been asked to use a certain import order. That order is as follows:

1.  `variables.less`

2.  `mixins.less`

3.  `reset.less`

4.  `global.less`

5.  `navigation.less`

6.  `footer.less`

7.  `home-page.less`

_You will know everything is working properly when you see the styles enabled for the provided content._  

## Task 5: Home Page - Desktop HTML & LESS

* [*] Take 10 minutes to review the code that has already been provided for you. Take time to see how the home page was built.

* [*] Add a viewport meta tag to the head of your index.html page

* [*] [Review the provided home desktop design file](design-files/home-desktop.png). You are to build the missing navigation system and header image. You have been provided all content necessary in the [index.html file](index.html)

* [*] Navigation Styles: Use the `navigation.less` file for styling.

* [*] Main Content Styles: Use the `home-page.less` file for styling

* [*] LESS Mixins: Create and use 2 different mixins to aid your styling. Use the `mixins.less` file for your mixins

* [*] LESS Parametric Mixin: create a parametric mixin that is used to create the `sign up` button styles.
	* [*]  Use at least 2 parameters to create your button
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