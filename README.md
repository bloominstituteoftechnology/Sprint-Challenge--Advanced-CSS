# Sprint Challenge: Advanced CSS - Space Walkers Web Page

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored advanced CSS techniques using Responsive Design and Preprocessing. During this Sprint, you studied how to use the viewport meta tag, media queries, setting up a preprocessor, and advanced use of preprocessing techniques. In your challenge this week, you will demonstrate proficiency by updating a website that is missing content as well as adding mobile styling.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in advanced css and your command of the concepts and techniques in responsive web design and preprocessing.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

The client for this challenge is _Spacewalkers Magazine_. Spacewalkers needs your help to build a small proof of concept website for their marketing team. They have provided designs for both desktop and phone views. In addition to designs and content they have most of the home page coded for you. You just need to finish the navigation and header as well as the mobile styles.

In meeting the minimum viable product (MVP) specifications listed below, your web page should look like the solution design files of the desktop and mobile views:

[Click here to review the home design](design-files/home-desktop.png)

[Click here to review the mobile design](design-files/home-mobile.png)

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the difference between an adaptive website and a fully responsive website?
    An adaptive website uses queries to detect specific devices in order to adapt its content to fit the device's screen, the layouts are hard coded. Responsive webpages use media queries to have breakpoints at certain resolutions in order to calculate how to display content on any screen. It is scalable and fluid.

2. Describe what it means to be mobile first vs desktop first.
    Mobile first- Building a web page first in a mobile layout, then adapting the content/styling from there for larger screens.
    Desktop first- Building a web page first to cater to a larger, desktop screen, then adapting the content/styling for other devices.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?
    `rem` will allow content to scale relative to the root element, so for example, if the browser's default font size is 20 pixels, and `font-size` is set to `50%` in the `html` tag, then `rem` will scale based on the `10px` size in the `html` element.

4. How would you describe preprocessing to someone new to CSS?
    Pre-processing allows us to write CSS more quickly by allowing us to next tags and selectors silimar to how we do it in HTML, and then compiles our nested tags and contents into raw CSS so the browser can interpret it.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
    I like the ability to create our own mixins, as well as being able to pass parameters to blocks of CSS as variables(reminds me of functions). Shortens written code substantially, and allows for easy tweaks later on. It was difficult to understand at first, because I was used to writing CSS manually, line by line.

You are expected to be able to answer all these questions. Your responses contribute to your Sprint Challenge grade. Skipping this section *will* prevent you from passing this challenge.

## Project Set Up

Follow these steps to set up your project:

### Git Set up

- [X] Create a forked copy of this project.
- [X] Add your project manager as collaborator on Github.
- [X] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [X] Create a new branch: git checkout -b `<firstName-lastName>`.
- [X] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [X] Push commits: git push origin `<firstName-lastName>`.
 
Follow these steps for completing your project.

- [X] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [ ] Add your project manager as a reviewer on the pull-request
- [X] Your project manager will count the project as complete by merging the branch back into master.
 

### Preprocessor Set up

* [X] Verify that you have LESS installed correctly by running `lessc -v` in your terminal, if you don't get a version message back, reach out to your project manager for help.
* [X] Open your terminal and navigate to your preprocessing project by using the `cd` command
* [X] Once in your project's root folder, run the following command `less-watch-compiler less css index.less`
* [X] Verify your compiler is working correctly by changing the `background-color` on the `html` selector to `red` in your `index.less` file.
* [X] Once you see the red screen, you can delete that style and you're ready to start on the next task

## Minimum Viable Product

Your finished project must include all of the following requirements:

### Import LESS Files

* [X] Navigate to your `index.less` file. Notice the file is blank. You have been asked to use a certain import order. That order is as follows:

```markdown
1.variables.less
2.mixins.less
3.reset.less
4.global.less
5.navigation.less
6.footer.less
7.home-page.less
```

_You will know everything is working properly when you see the styles enabled for the provided content._  

### Home Page - Desktop HTML & LESS

* [X] Take 10 minutes to review the code that has already been provided for you. Take time to see how the home page was built.

* [X] Add a viewport meta tag to the head of your index.html page

* [X] [Review the provided home desktop design file](design-files/home-desktop.png). You are to build the missing navigation system and header image. You have been provided all content necessary in the [index.html file](index.html)

* [X] Navigation Styles: Use the `navigation.less` file for styling.

* [X] Main Content Styles: Use the `home-page.less` file for styling

* [X] LESS Mixins: Create and use 2 different mixins to aid your styling. Use the `mixins.less` file for your mixins

* [X] LESS Parametric Mixin: create a parametric mixin that is used to create the `sign up` button styles.

* [X]  Use at least 2 parameters to create your button

* [X] Create a hover state that swaps the background color and font color of the base button styles.

### Mobile Design

* [X] Create a `@phone` variable that contains a `max-width: 500px` media query string. Use the `@phone` variable for all your nested mobile styling.

* [X] [Review the provided home mobile design file](design-files/home-mobile.png). Match your mobile styling the best you can using the design file.

* [X] Push your changes and create a pull request if you haven't already.

In your solution, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

* [ ] Build a page of your choosing from the navigation items. Come up with content and images that fit the theme.

* [ ] Introduce CSS animations to your site.

* [ ] Create a fixed navigation and add some opacity to the background

* [ ] Create a form that would allow someone to sign up for a Spacewalkers Magazine subscription