1. What is the difference between an adaptive website and a fully responsive website?

    -  Responsive design uses media queries in css to size the content appropriately for the screen size. Adaptive design uses html to size content depending on the user’s screen size.
    -  In responsive design, all the content in your html and css files are loaded, whether they are needed or not. In adaptive design, only content that is needed for that screen size is loaded.
    -  In responsive design, there is one template that can be used for all devices. In adaptive design, there are separate templates for each device.

2. Describe what it means to be mobile first vs desktop first.

    -  Mobile first design is when html and css are created for mobile device first and media queries for larger devices are created after using min-widths. 
    -  Desktop first is when html and css are created for the desktop version of the site first and media queries for smaller screen are created later using max-widths.

3. What does font-size: 62.5% in the html tag do for us when using rem units?

    - It makes 1rem equal to 10px. This is because 62.5% of the browser’s default font size of 16px, is 10px.

4. How would you describe preprocessing to someone new to CSS?

    - I would describe preprocessing as CSS on steroids with different syntax. It allows developers to create CSS in a quicker manner with less lines of code. Once the code is written in the preprocessor, it is translated by a compiler into regular CSS.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

    - My favorite concept in preprocessing is the nesting structure. It makes my code much more readable with a clear visual hierachy.

    - The concept that gave me the most trouble was the compiler. I save often, usually just by reflex. When I did my first project with LESS, I was saving as I normally do, but kept saving before I would finish filling in the information for a class or save before I put in the final semicolon on a class. I broke the compiler many times before I started paying more attention to my saving habits.
