
1) my definition of a fluid layout would be a page that adjust "fluidly" based on the browsers with. It essentially is able to react in real time to the minimization or maximization of the viewport width. 

  an adaptive design maintains a fixed layout until it hits a targeted breakpoint, in which, it will adjust to the specifications of the media query. 




2. A mobile first approach means you would begin coding your site for mobile devices and add media queries each time you expanded the screen and found the desired breakpoints. Your default css settings would be compatible for a mobile device, however, as the screen expands, your media queries would be necessary to allow the viewport to be compatible for a desktop version. I would call this a "bottom-to-top" approach. 

A Desktop first approach means that your default css settings are targeted for a desktop format and as you minimize the screen to make a mobile compatible version, you will be adding media queries that allow it to be mobile responsive. I would call this a "top-to-bottom" approach.


3. When the HTML font-size is set to 62.5%, it allows us to have an easier number to work with when we use "REMS" for font-size. When the HTML font-size is 62.5%, 1rem, would equal 10 pixels. Just the  same, if we wanted 16 pixels, then in terms of rem, that would equal 1.6rem. By setting the HTML to this percentage, it makes it easier to translate and calculate pixels into rems. 

4. Preprocessing is a useful tool that adds a layer of organization to one's CSS. Through features, such as nesting, we are able to create stronger levels of specificity, easier navigation for strangers whom may need to alter your code and locate a certain area, and even clean up portions of your css/less code using powerful features such as variables and mixins. Variables are powerful because they can be reused throughout the file. If the specifications of the variable need changed,instead of combing through the file and locating each spot where it is called, we can instead change specifications of the variable where it is defined, and that will subsequently update each area where it is called on the file. Mixins are wonderful too because it allows us to create a template, for instance a border box, and use it throughout the file, while still being able to add various nuances in the different areas where it called. 

5. My favorite aspect of Preprocessing is the ability to nest our elements. I really like how it adds organization to my code and allows me to locate different specifications, easier. I honestly dont have any issues with preprocessing and therefore I didnt locate any aspects that I disliked or that gave me trouble. 