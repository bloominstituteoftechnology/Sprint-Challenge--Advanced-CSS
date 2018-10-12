1. What is the difference between an adaptive website and a fully responsive website?
Adaptive websites are websites that have breakpoints at certain condition (viewport size or as what I'd like to call it, screen size for easier understanding)
They are not fluid, so the only thing they do is telling the browser to output a different layout at different breakpoints, so the design does not break.
Fully responsive websites are websites that not only have breakpoints, but also are fluid in between breakpoints, so the user does not need to scroll left and right at all since most items are going to be in a % based layout instead of a fixed pixel layout.

2. Describe what it means to be mobile first vs desktop first.
Mobile first design is to design the mobile layout first and give it different breakpoints while setting the media queries with min-width. It goes from small to large.
Desktop first design is to design the desktop layout first and give it different breakpoints while setting the media queries with max-width. It goes from large to small.
3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?
It makes calculating font-size easier since 62.5% of the default browser font size (16px) is 10px. Therefore, 20px is just 2rem and 16 px is just 1.6rem. Also it makes the font-size be relative porportion of the root font-size, so if we want to make fonts-bigger. we just need to change it at one place.  
4. How would you describe preprocessing to someone new to CSS?
CSS at its core is hard to maintain with so many lines at a single page. However, we can use preprocessing to kind of break it up into chunks of component codes to organize it to make it way easier to read. It also adds the ability to use varialbes, mixins, and @imports to give us more control of the code such as nesting ability for readability and using parameters to easily passing variables for productivity.

Essentially, preprocessors are just a language that is compiled(or translated) by a compiler (javascript compiler in this case) into CSS so the browser can understand.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
My favorite concept is variables. The concept that gives me the most trouble would be the reason for mixins if i'm only building a simple one page website. I do not see the benefit for using a mixin other than to clean up the code after finishing so the next developer can work on it easier. 
## Task 3: Set up your preprocessor

* [X] Verify that you have LESS installed correctly by running `lessc -v` in your terminal, if you don't get a version message back, reach out to your project manager for help.

* [X] Open your terminal and navigate to your preprocessing project by using the `cd` command

* [X] Once in your project's root folder, run the following command `less-watch-compiler less css index.less`

* [x] Verify your compiler is working correctly by changing the `background-color` on the `html` selector to `red` in your `index.less` file.

* [x] Once you see the red screen, you can delete that style and you're ready to start on the next task
