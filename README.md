# Sprint Challenge: Advanced CSS - Space Walkers Web Page

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the difference between an adaptive website and a fully responsive website?

    An adaptive website uses fixed layout units, but applies media queries to it. This allows the styles to adapt based on the viewport.
    A responsive website takes this one step further but also using responsive units such as %'s and max-width.

2. Describe what it means to be mobile first vs desktop first.

    Mobile-first means that you are designing and coding for a mobile device first. Afterwards you are expanding your code to accommodate for larger layouts (tablets, desktops, etc). Here you'd use min-width on your media queries.
    Desktop-first is the opposite of mobile-first. You are desiging for a desktop layout and then expanding to accomodate for smaller layouts (tablets, mobiles, etc). Here you'd use max-width on your media queries.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?

    Using 62.5% as the base value in the `html` tag will convert `rem` units by the power of 10. This means that 1rem would equate to 10px thoughout the document.

    A font-size of 62.5% would mean that it is taking 62.5% of that parent element as it is a relative length unit. It is based on the viewport/window width first. 
    rem is also a relative length unit but unlike em, it is based on the root HTML element. This is why the 62.5% works great when placed in the `html` tag.

4. How would you describe preprocessing to someone new to CSS?

    CSS preprocessing allows us to extend the ability of CSS by adding abstractions (variables, mixins, parametric mixins, functions, escaping, nesting, etc). This makes CSS more robust, cleaner, and concise. 

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

    I like using variables, mixins, and imports. Going through the documentation, there are more things we can do with LESS, but overall it's a lovely tool. I would say that the hardest concept for me right now is it's specificity. I'm not always sure when nesting what will take specificity over a later element and I'm overriding it with IDs. I'll have to dig further into the LESS documentation to get a better understanding of any nuances and fully test any theories I may have.

You are expected to be able to answer all these questions. Your responses contribute to your Sprint Challenge grade. Skipping this section *will* prevent you from passing this challenge.

## Project Set Up

Follow these steps to set up your project:

### Git Set up

- [ ] Create a forked copy of this project.
- [ ] Add your project manager as collaborator on Github.
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.
 
Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [ ] Add your project manager as a reviewer on the pull-request
- [ ] Your project manager will count the project as complete by merging the branch back into master.
 

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