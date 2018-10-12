1. What is the difference between an adaptive website and a fully responsive website?
    Adaptive sites change their styling primarily based on the break points put in the css, such as @media (max-width: 500px). Fully responsive sites change to fit any size using a combination of means, such as percentages and break points.

2. Describe what it means to be mobile first vs desktop first.
    Mobile first means that the design/styling/functionality is intended to be used on mobile devices, but is adapted to scale up to larger devices. Desktop first means the opposite. Is css, the mobile first styling would use min-width, and the desktop would use max-width.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?
    It resets the font sizes to be able to match the browser's default, but is flexible to allow for those who may have different settings. (1.6rem = default medium font size)

4. How would you describe preprocessing to someone new to CSS?
    It allows you to write the code faster and easier with greater readability and logical progression. Basically, it is a shortcut that converts your shorter code into the language the browser can understand, saving a lot of time and headaches for the developer.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
    Favorite concepts: nesting (LOVE this) and mixins
    Most trouble: Less formulas