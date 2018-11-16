1. What is the difference between an adaptive website and a fully responsive website?

An adaptive website is one that has some aspects of adaptiveness, like using flexbox or relative units so that the features stretch or shrink depending on the window sizing. A fully responsive website is one that combines those adaptive, fluid techniques and adds media queries with them so that the website actually transforms at different sizing to optimize the experience for users on different mediums, ie tablets or phones.

2. Describe what it means to be mobile first vs desktop first.

Mobile first is when you build your site from scratch with the mobile layout styles first, and then you use media queries to change the layout for larger devices. This means your media queries will be min-width, so as the display gets bigger, your layout changes. Best practice is to have more code in your main styles, and less code in your media queries.

3. What does font-size: 62.5% in the html tag do for us when using rem units?

The 62.5% in the html tag will bring the default font size of 16px down to 10px. This makes using rems a lot easier, because you will be multiplying by 10, as opposed to sixteen. Making font size 3 rem to get 30px font size is a lot easier than doing the math to figure out what 16 needs to be multiplied by to get 30 pixels. 

4. How would you describe preprocessing to someone new to CSS?

As a car person, I like the analogy of CSS is your stock engine, CSS with a preprocessor is like putting a turbo charger on your engine. It greatly cleans up your code, gives you more flexibility, makes your code more modular and easier to update, overall giving your CSS way better performance, scalability, and flexibility. 

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

My favorite concept of preprocessing is the nesting of styles, this just really clicks with me and makes styling much more intuitive. I also really like the use of variables for things like colors. The concept that gives me the most trouble is probably mixins, for me it just creates more confusion and trouble than it does help. Just remembered my real favorite part while doing the project - the error feedback the preprocessor gives. It's found a few bugs for me while doing this project and I love it very much for pointing out exactly where I've gone wrong.