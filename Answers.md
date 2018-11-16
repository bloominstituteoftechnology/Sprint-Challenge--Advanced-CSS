## Task 2: Comprehension Questions

Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit. Open up the [Answers.md](Answers.md) file and record your responses there.

1. What is the difference between an adaptive website and a fully responsive website?

- Adaptive website is set up to change with break points (defined at certain widths in pixels). They use fixed width units and adjust to fit properly for various screen sizes.
- Fully responsive combines adaptive break points and fluid width units (ie percent based widths) to adjust smoothly based on screen size. This allows for a better user experience and account for thousands of screen sizes.

2. Describe what it means to be mobile first vs desktop first.

- Mobile first is designed to be optimized for mobile use, content is stacked with little to no horizontal content. This is a good approach to take if most users are accessing your website on mobile devices. Min-width media queries are used to scale the website up to fit larger screens - introducing horizontally formatted content.
- Desktop first is designed to be optimized for desktop use, content is laid out horizontally. This is a good approach to take if most users are accessing your website on larger screens. Max-width media queries are used to scale the website down to fit smaller screens - introducting vertircally formatting content.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?

- Introducing this style makes 1rem = 10px. This makes the rem conversion process simple and understandable for many users accessing the code.

4. How would you describe preprocessing to someone new to CSS?

- Preprocessing introduces several useful tools to stying a website. It is mainly an organizational tool to maintain large CSS projects.
  - Variables allow you to assign a value to a variable so you can use the variable many times throughout the project. If you ever need to change the variable across the entire website, you change the variable value.
  - Mixins allow you to create reusable chunks, a custom style template
  - Nexting allows you to organize the code into chunks for easier consumption and editiing for large projects
  - Importing allows you to create individual files for each components of your website (ie navigation, main content, global styles). This helps with organization

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

- My favorite component is mixins, I see its strength for creating reusable styling components and it's assisstance in ease of organization.
- The concept that gives me the most challenge so far is setting up parametric mixins and knowing when to use them across the site.
