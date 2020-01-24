______Questions____________________________________

1. What is the difference between an adaptive website and a fully responsive website?
An adaptive website has multiple different layouts, and requires more resources to load. A fully responsive website is when the layout changes depending on what device is viewing it.

2. Describe what it means to be mobile first vs desktop first.
Mobile first is the idea of designing the web view first, and then scaling it upwards for bigger screens. The desktop first approach is the opposite.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?
It scales it correctly, since 62.5% of 16px is 10px.

4. How would you describe preprocessing to someone new to CSS?
It organizes CSS code to be easier to work with, and also allows functionality like varables and having similar styles saved in one area (mixins). Then it compiles all the files into one css file that the browser will read.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
Nesting things helps organize my thoughts better, mixins are nice and everything allows a better workflow. I don't have any trouble using it over normal CSS.
 
___________________________________________________


### Home Page - Desktop HTML & LESS

* [x] Take 10 minutes to review the code that has already been provided for you. Take time to see how the home page was built.

* [x] Add a viewport meta tag to the head of your index.html page

* [x] [Review the provided home desktop design file](design-files/home-desktop.png). You are to build the missing navigation system and header image. You have been provided all content necessary in the [index.html file](index.html)

* [x] Navigation Styles: Use the `navigation.less` file for styling.

* [x] Main Content Styles: Use the `home-page.less` file for styling

* [x] LESS Mixins: Create and use 2 different mixins to aid your styling. Use the `mixins.less` file for your mixins

* [x] LESS Parametric Mixin: create a parametric mixin that is used to create the `sign up` button styles.

* [x]  Use at least 2 parameters to create your button

* [x] Create a hover state that swaps the background color and font color of the base button styles.

### Mobile Design

* [x] Create a `@phone` variable that contains a `max-width: 500px` media query string. Use the `@phone` variable for all your nested mobile styling.

* [x] [Review the provided home mobile design file](design-files/home-mobile.png). Match your mobile styling the best you can using the design file.

* [x] Push your changes and create a pull request if you haven't already.

In your solution, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

* [ ] Build a page of your choosing from the navigation items. Come up with content and images that fit the theme.

* [ ] Introduce CSS animations to your site.

* [ ] Create a fixed navigation and add some opacity to the background

* [x] Create a form that would allow someone to sign up for a Spacewalkers Magazine subscription