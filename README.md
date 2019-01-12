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

An adaptive website will resize boxes, text, images, etc when the window is resized. This adaptation allows the website to render without horizontal scrolling when the window is either resized or displayed in a window that is less than the size intended by the developers. A responsive website will do the same, but it will also reformat the layout of the site to provide a better interface for the user. Such as vertically stacking boxes for a mobile view, when they may have been next to each other in the desktop view.

2. Describe what it means to be mobile first vs desktop first.

Desktop-first design is how websites have historically been produced. This means creating the website for viewing specifically on larger desktop screens, then using media queries to reformat the website for mobile viewing. Now that mobile phones are the primary devices people browse the internet on, developers are switching to mobile-first designs. This means creating the website for mobile browsers, to cater to the majority of people who will view the site. Then, media queries are used to reformat the site for those who would view the site on much larger screens.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?

Setting the font-size to 62.5% in the html tag is important for ease of use in setting font-sizes for adaptive and responsive design. A font-size of 1rem is equal to the font-size of the html element. Most browsers will default a font-size of 16px, but pixel values aren’t very adaptive. So, when setting the html element’s font-size to 62.5%, it creates a relationship with rem units where 1rem will equal 10px. This means you can set an initial size of, for example, 1.6rem (meaning 16px), and it will scale with changes to the size of the browser window.

4. How would you describe preprocessing to someone new to CSS?

Preprocessers, like LESS are powerful tools that allow much more control and ease in CSS styling. One major benefit to using a preprocessor is the addition of mixins, variables, and functions. Let’s say your design team comes up with a color palette to use for your project. You could set the hex codes for each color to a variable name, then the team can use the variables to be sure everyone is using the same colors. Another useful tool is the ability to maintain each of your design rules in specific .less files. So instead of searching a long CSS document for certain style rules, you could have a separate file for these rules. You could have a variables.less file to keep variable names and values in a manageable file. Or if you have mixin classes that are useful across many pages, a mixin.less file to hold these mixin classes allow them to be found much easier. The ability of a preprocessor to import these rules into an index.less file makes combining the work of each developer on a team much easier than before. Nesting rules by inheritance helps your CSS resemble your html file much more closely, which makes navigating the stylesheet much easier. These are just a few of the many tools that preprocessors provide to make CSS styling much more intuitive.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

My favorite concept in preprocessing is the ability to import specific style rules held in multiple .less files. Files that may hold variables or mixing. I think this concept allows for greater ease in finding useful styles you’ve saved previously, or variable names to make sure everyone maintains the same design. I also really enjoy how nesting makes the stylesheet resemble the html document. The concept that gives me the most trouble is either parametric classes or functions. I understand parameters and functions just fine, but I haven’t been able to figure out a practical use for them in styling.

You are expected to be able to answer all these questions. Your responses contribute to your Sprint Challenge grade. Skipping this section *will* prevent you from passing this challenge.

## Project Set Up

Follow these steps to set up your project:

### Git Set up

* [ ] Fork the project into your GitHub user account
* [ ] Clone the forked project into a directory on your machine
* [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [ ] You are now ready to build this project with your preferred IDE

### Preprocessor Set up

* [ ] Verify that you have LESS installed correctly by running `lessc -v` in your terminal, if you don't get a version message back, reach out to your project manager for help.
* [ ] Open your terminal and navigate to your preprocessing project by using the `cd` command
* [ ] Once in your project's root folder, run the following command `less-watch-compiler less css index.less`
* [ ] Verify your compiler is working correctly by changing the `background-color` on the `html` selector to `red` in your `index.less` file.
* [ ] Once you see the red screen, you can delete that style and you're ready to start on the next task

## Minimum Viable Product

Your finished project must include all of the following requirements:

### Import LESS Files

* [ ] Navigate to your `index.less` file. Notice the file is blank. You have been asked to use a certain import order. That order is as follows:

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

* [ ] Take 10 minutes to review the code that has already been provided for you. Take time to see how the home page was built.

* [ ] Add a viewport meta tag to the head of your index.html page

* [ ] [Review the provided home desktop design file](design-files/home-desktop.png). You are to build the missing navigation system and header image. You have been provided all content necessary in the [index.html file](index.html)

* [ ] Navigation Styles: Use the `navigation.less` file for styling.

* [ ] Main Content Styles: Use the `home-page.less` file for styling

* [ ] LESS Mixins: Create and use 2 different mixins to aid your styling. Use the `mixins.less` file for your mixins

* [ ] LESS Parametric Mixin: create a parametric mixin that is used to create the `sign up` button styles.

* [ ]  Use at least 2 parameters to create your button

* [ ] Create a hover state that swaps the background color and font color of the base button styles.

### Mobile Design

* [ ] Create a `@phone` variable that contains a `max-width: 500px` media query string. Use the `@phone` variable for all your nested mobile styling.

* [ ] [Review the provided home mobile design file](design-files/home-mobile.png). Match your mobile styling the best you can using the design file.

* [ ] Push your changes and create a pull request if you haven't already.

In your solution, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

* [ ] Build a page of your choosing from the navigation items. Come up with content and images that fit the theme.

* [ ] Introduce CSS animations to your site.

* [ ] Create a fixed navigation and add some opacity to the background

* [ ] Create a form that would allow someone to sign up for a Spacewalkers Magazine subscription