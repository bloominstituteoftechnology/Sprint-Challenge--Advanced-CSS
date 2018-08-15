# Assessing Your Responsive Web Design and Preprocessing Learning

You will be building a website from scratch using all your responsive web design and preprocessing skills from the sprint. The theme of this challenge is _Spacewalkers Magazine_. Spacewalkers has asked you to build a small proof of concept website for their marketing team. They have provided designs for both desktop and phone views.

- This project is to be worked on alone but you can use outside resources. You can _reference_ any old code you may have and the training kit content.

## Task 1: Set Up The Project With Git

- [X]**COMPLETE** Fork the project into your GitHub user account
- [X]**COMPLETE** Clone the forked project into a directory on your machine
- [X]**COMPLETE** You are now ready to build this project with your preferred IDE

#### Pro tip: Commit every time you complete a task or feature!

## Task 2: Comprehension Questions

Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit. Open up the [Answers.md](Answers.md) file and record your responses there.

1. [X]**COMPLETE** What is the difference between an adaptive website and a fully responsive website? The difference is, with responsive design there is always optimal viewing no matter what type of device the user is on. Adaptive design uses multiple layouts.

2. [X]**COMPLETE** Describe what it means to be mobile first vs desktop first. To design mobile first means you are designing for the functionality of a mobile view first and continuing design for higher resolutions.

3. [X]**COMPLETE** What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units? The font-size will always be relative to the root element, meaning at any resolution our content will be readable.

4. [X]**COMPLETE** How would you describe preprocessing to someone new to CSS? A preprocessor takes one type of data and converts that data into another. Ex: Less to regular CSS.

5. [X]**COMPLETE** What is your favorite concept in preprocessing? What is the concept that gives you the most trouble? I enjoy using Less because it's more efficient and organized. I haven't run into any trouble yet.

## Task 3: Set up your preprocessor

- [X]**COMPLETE** Verify that you have LESS installed correctly by running `lessc -v` in your terminal, if you don't get a version message back, reach out to your project manager for help.
- [X]**COMPLETE** Open your terminal and navigate to your preprocessing project by using the `cd` command
- [X]**COMPLETE** Once in your project's root folder, run the following command `less-watch-compiler less css index.less`
- [X]**COMPLETE** Verify your compiler is working correctly by changing the `background-color` on the `html` selector to `red` in your `index.less` file.
- [X]**COMPLETE** Once you see the red screen, you can delete that style and you're ready to start on the next task

## Task 4: Import LESS Files

- [X]**COMPLETE** Navigate to your `index.less` file. Notice the file is blank. You have been asked to use a certain import order. That order is as follows:

1. `variables.less`
2. `mixins.less`
3. `reset.less`
4. `global.less`
5. `navigation.less`
6. `footer.less`
7. `home-page.less`

## Task 5: Home Page - Desktop HTML & LESS

- [X]**COMPLETE** [Review the provided home desktop design file](design-files/home-desktop.png). You are to build the home page HTML and LESS from scratch. You have been provided content in the [index.html file](index.html)
- [X]**COMPLETE** Navigation: Use the `navigation.less` file for styling.
- [X]**COMPLETE** Main Content: Use the `home-page.less` file for styling
- [X]**COMPLETE** Footer: Use the `footer.less` file for styling
- [X]**COMPLETE** Mixins: Create and use 2 different mixins to aid your styling. Use the `mixins.less` file for your mixins
- [X]**COMPLETE** Parametric Mixin: create a parametric mixin that is used to create the `sign up` button.
- [ ] Variables: Use `variables.less` to contain colors or media query strings for the site design. You have been provided the hex codes for each color used in the site.

## Task 6: Home Page - Mobile HTML & LESS

- [X]**COMPLETE** [Review the provided home mobile design file](design-files/home-mobile.png). Match your mobile styling the best you can using the design file.
- [X]**COMPLETE** Create a `@phone` variable that contains a `max-width: 500px` media query string. Use the `@phone` variable for all your nested mobile styling.

**Congratulations, you completed the sprint challenge!**

## Stretch Goals

Stretch goals are only available if you complete every task listed above. **Do not work on them until your pull request is in.**

- [ ] Build a page of your choosing from the navigation items. Come up with content and images that fit the theme.
- [ ] Introduce CSS animations to your site.
- [ ] Create a fixed navigation and add some opacity to the background
- [ ] Create a form that would allow someone to sign up for a Spacewalkers Magazine subscription
