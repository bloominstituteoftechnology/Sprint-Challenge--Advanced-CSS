What is the difference between an adaptive website and a fully responsive website?
    adaptive websites have several layouts (that don't change) for multiple screen sizes.
    responsive design is a single layout that will change based on the resizing of the screen/browser.


Describe what it means to be mobile first vs desktop first.
    Mobile first means you are writing your css code for the screen size of a mobile device. You than can use media queries with min-width to change the layout once the screen size reaches larger devices.
    Desktop first means you are writing your css code for the screen size of a desktop pc. You than can use media queries with max-width to change the layout once the screen size reaches smaller devices.



What does font-size: 62.5% in the html tag do for us when using rem units?
    with 100%, 1.6rem == 16px.
    with 62.5% 1rem == 16px.
    this allows us an easier method to do px to rem conversion in our brain while deciding layout object sizes.


How would you describe preprocessing to someone new to CSS?
    It's a tool or framework used to allow us to write cleaner code which then compiles it into css code.



What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
    I like how I no longer have to write a file with like 10,000 lines of code. I can now seperate and manage the code in small files.
    I guess the hardest concept would deciding how to split up my code in different files.