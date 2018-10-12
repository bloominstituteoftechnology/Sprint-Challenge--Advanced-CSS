1. What is the difference between an adaptive website and a fully responsive website?

The big difference between an adaptive website and a fully responsive website is that with an adaptive website we have to create different layouts for different screen sizes while with a fully responsive website, there's only one master layout that adapts to all screens across devices.

2. Describe what it means to be mobile first vs desktop first.

To be mobile first means to develop the layout for mobile devices on your master layout first then uses viewport media queries to make changes on the layout for other devices (tablet, then desktop).

To be desktop first means the other way around. That is, developing the layout for desktop devices on your master layout first then uses viewport media queries to make changes on the layout for smaller devices (tablet, then mobile).

3. What does font-size: 62.5% in the html tag do for us when using rem units?

Since modern web browsers uses 16px font on it's normal display, setting ```font-size: 62.5%;``` in the html tag set the reference for the rem unit on the entire html to be 62.5% * 16px = 10px. Meaning, ```1rem = 10px```.

4. How would you describe preprocessing to someone new to CSS?

Preprocessing is a more robust syntax for CSS written in a different language that uses compiler to compile the syntax into CSS syntax.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

There are many great concepts available in preprocessing, but my favorite concept is simply variables. I don't have any trouble with any concept, though I would say it took me awhile to get comfortable to implement CSS animation with mixin.