1. What is the difference between an adaptive website and a fully responsive website?
    An adaptive website is built to change layout based on breakpoints. A fully responsive site uses width percentages
    in order to create a site that can keep its layout while still looking good at any width.

2. Describe what it means to be mobile first vs desktop first.
    A desktop first site would be created based on the desktop design file and then altered with breakpoints based on max-width in order to achieve the mobile view. So, the site would be built for a width of 800px (for example) and respond to different widths. A mobile first site would be created first for mobile then altered via min-width breakpoints to make the desktop view. So, the site would be built for a width of 0 - 400px and change for larger views.

3. What does font-size: 62.5% in the html tag do for us when using rem units?
    That font size allows us to create rem units based on pixels. 1.6rem = 16px, 2.4rem = 24px, etc.

4. How would you describe preprocessing to someone new to CSS?
    Preprocessing gives us a syntax with numerous helpful features that make building CSS easier. Building a project using a preprocessor gives you access to variables, mixins, nested design, and more. Once you're done building that project, the compiler turns your code into perfect vanilla CSS.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
    Mixins are my favorite concept in preprocessing, mostly because parametric mixin is fun to say. Joking aside, when we started CSS, I wished that it had functions. I don't have tons of JS experience, but the idea of "if you're writing the same lines twice, just write a function" really stuck with me. I wanted to do that in CSS and mixins gave me that power.

    Importing probably gives me the most trouble. At the level that we're building sites, I don't have first-hand experience with a real reason to import multiple files. I'm sure once I'm building larger projects that I'll understand much better though.