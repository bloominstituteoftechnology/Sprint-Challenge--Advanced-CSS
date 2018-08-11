# Assessing Your Responsive Web Design and Preprocessing Learning

You will be building a website from scratch using all your responsive web design and preprocessing skills from the sprint.  The theme of this challenge is _Spacewalkers Magazine_.  Spacewalkers has asked you to build a small proof of concept website for their marketing team.  They have provided designs for both desktop and phone views.

* This project is to be worked on alone but you can use outside resources. You can _reference_ any old code you may have and the training kit content.

## Task 1: Set Up The Project With Git

* [x ] Fork the project into your GitHub user account
* [x ] Clone the forked project into a directory on your machine
* [x ] You are now ready to build this project with your preferred IDE

#### Pro tip: Commit every time you complete a task or feature!

## Task 2: Comprehension Questions
Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit.  Open up the [Answers.md](Answers.md) file and record your responses there.

1. What is the difference between an adaptive website and a fully responsive website?

2. Describe what it means to be mobile first vs desktop first.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units? 

4. How would you describe preprocessing to someone new to CSS?

5. What is your favorite concept in preprocessing?  What is the concept that gives you the most trouble? 

## Task 3: Set up your preprocessor
* [ x] Verify that you have LESS installed correctly by running `lessc -v` in your terminal, if you don't get a version message back, reach out to your project manager for help.
* [x ] Open your terminal and navigate to your preprocessing project by using the `cd` command
* [x ] Once in your project's root folder, run the following command `less-watch-compiler less css index.less`
* [x ] Verify your compiler is working correctly by changing the `background-color` on the `html` selector to `red` in your `index.less` file.
* [x ] Once you see the red screen, you can delete that style and you're ready to start on the next task

## Task 4: Import LESS Files
* [x ] Navigate to your `index.less` file. Notice the file is blank.  You have been asked to use a certain import order. That order is as follows:

1. `variables.less`
2. `mixins.less`
3. `reset.less`
4. `global.less`
5. `navigation.less`
6. `footer.less`
7. `home-page.less`

## Task 5: Home Page - Desktop HTML & LESS
* [x ] [Review the provided home desktop design file](design-files/home-desktop.png). You are to build the home page HTML and LESS from scratch.  You have been provided content in the [index.html file](index.html) 
* [x ] Navigation: Use the `navigation.less` file for styling.
* [x ] Main Content: Use the `home-page.less` file for styling
* [x  ] Footer: Use the `footer.less` file for styling
* [x ] Mixins: Create and use 2 different mixins to aid your styling.  Use the `mixins.less` file for your mixins
* [x ] Parametric Mixin: create a parametric mixin that is used to create the `sign up` button.
* [ ] Variables: Use `variables.less` to contain colors or media query strings for the site design.  You have been provided the hex codes for each color used in the site.

## Task 6: Home Page - Mobile HTML & LESS
* [ ] [Review the provided home mobile design file](design-files/home-mobile.png). Match your mobile styling the best you can using the design file. 
* [ ] Create a `@phone` variable that contains a `max-width: 500px` media query string.  Use the `@phone` variable for all your nested mobile styling.


**Congratulations, you completed the sprint challenge!**

## Stretch Goals
Stretch goals are only available if you complete every task listed above.  **Do not work on them until your pull request is in.**
* [ ] Build a page of your choosing from the navigation items.  Come up with content and images that fit the theme.  
* [ ] Introduce CSS animations to your site.
* [ ] Create a fixed navigation and add some opacity to the background
* [ ] Create a form that would allow someone to sign up for a Spacewalkers Magazine subscription
