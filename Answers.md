## Task 2: Comprehension Questions
Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit.  Open up the [Answers.md](Answers.md) file and record your responses there.

1. What is the difference between an adaptive website and a fully responsive website?

daptive design uses different static layouts to address changes in presentation (mobile, printing, etc.) while a fully-responsive website uses code to dynamically adapt the same page of content to the needs of the media presentation.

2. Describe what it means to be mobile first vs desktop first.

Desktop-first is starts with the desktop presentation in mind and utilizes the @media (max-width: x) query at breakpoints for tablet and mobile.  Mobile does the reverse, started by designing a site optimized for mobile and uses the @media (min-width: x) query to adapt the display for tablet and desktop devices.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?

This allows us to set a font-size later within the html to a desired pixel size by dividing that pixel size by 10 and setting it's rem value to that.  Example:

font-size: 1.6rem; //16px

4. How would you describe preprocessing to someone new to CSS?

CSS allows you to keep your style separate from content.  Preprocessing allows you to write your CSS using programming ideas like nesting, variables, and mixins (which are akin to functions), giving your style some limited behavior and enhancing reusability.

5. What is your favorite concept in preprocessing?  What is the concept that gives you the most trouble?

I love using variables.  I'm starting to love mixins, but they are giving me the most trouble.

Edited to add: actually, responsive design is, unto itself, the most difficult thing I'm dealing with, within or without preprocessing.  Will be focusing on that for a while.
