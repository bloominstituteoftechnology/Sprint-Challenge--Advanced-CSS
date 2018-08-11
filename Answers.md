What is the difference between an adaptive website and a fully responsive website?

Answer: In Adaptive websites, templates, layouts (and information) are pre-selected for different screen sizes. 
        Things are planned out in advanced and information is displayed based on specific devices (i.e., phone vs tablet). However, for Responsive websites, devices are detected with media queries and images are sized 
        correctly depending on the user's screen size. 
        
        In Responsive, there is only one template, unlike adaptive sites, which has many templates for many screen. 

Describe what it means to be mobile first vs desktop first.

Answer: Desktop-first treats the desktop view as default, with mobile/tablet as add-ons via "max-width" media queries. 
        For Mobile-first design, the default is mobile, with tablet/desktop as optional add-ons via "min-width" media queries. 

        It comes down to design priority, in Mobile-first, the smaller screen size (~500px width) is prioritize and everything is in relation to this default.


What does font-size: 62.5% in the html tag do for us when using rem units?

Answer: This is a hack that sets the rem-to-pixel ratio to be 1:10, where 1rem = 10px (e.g., 1.2rem = 12px and so on..)

How would you describe preprocessing to someone new to CSS?

Answer: Preprocessing is writing CSS in a modular way and serves to make your code more DRY, allowing us coders to not          have to repeat ourselves. It makes your code easier to comprehend and facilitates communication between team            members. 

        Moreover, it introduces variables and functions into CSS and serves as a segue into javascript. 

What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

Answer: My favorite concept is nesting and nesting-at because it allows CSS and HTML to visually mirror each other. 
        The concept that gives me the most trouble, at the moment, is bundling mixins through namespaces. 