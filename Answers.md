#Questions

1. What is the difference between an adaptive website and a fully responsive website?

2. Describe what it means to be mobile first vs desktop first.

3. What does font-size: 62.5% in the html tag do for us when using rem units?

4. How would you describe preprocessing to someone new to CSS?

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?


#######Answers

1. 
Responsive websites respond to the size of the browser at any given point. No matter what the browser width may be, the site adjusts its layout in a way that is optimized to the screen. It doesn't matter how wide the browser is because the layout will respond accordingly.

Adaptive websites adapt to the width of the browser at a specific points. In other words, the website is only concerned about the browser being a specific width, at which point it adapts the layout.

For example, the container is 800 pixels wide when the browser is any width over 500 pixels. Any below that, and the continer shrinks to 300 pixels.

Another way to think about it is the difference between smooth and snap design. Responsive design is smooth because the layout fluidly adjusts regardless of what device it is viewed on. Adaptive design, on the other hand, snaps into place because the page is serving something different because of the browser or device it is viewed on. 


2. “Mobile First” is designing the layout, navigation and content of a website before designing the desktop versions for larger screens and working your way up.

"Desktop-first" is an approach to design a desktop version of a website, then reduce its elements and content when being rendered for mobile. 

3. It lets us easily figure out what size of font we are getting, as 1rem equals 10px and so forth.

4. 
CSS preprocessors add functionality to CSS files, with the aim of saving developer time and effort. 

A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. Most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, variables, and so on. These features make the CSS structure more readable and easier to maintain.

5. I like to use imports in the main index.less file, so I can separate page's styles into different .less files. 

It was a little bit hard after all CSS code had been written to go though some parts of the code and see if I can gruop some of the styles together in mixin. 