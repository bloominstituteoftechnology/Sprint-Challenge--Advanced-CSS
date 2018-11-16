
1. What is the difference between an adaptive website and a fully responsive website?
    * An adaptive website is a site that has breakpoints at for various sized screens but its layout is hard coded with pixels which doesn't transition well if the browser is adjusted. 
    
    * A responsive website is one that uses breakpoints as well as percent based layouts within constraints. Responsive websites would in theory look good on all screeen sizes. 

2. Describe what it means to be mobile first vs desktop first.
    * Mobile first means a site is designed with mobile styles first, and all mobile styles would be the main styles at the top of the CSS file. All queries would then use "min-width" to as breakpoints for larger screens. 
    
    * Desktop first means a site is designed with desktop or large screens in mind first. All queries would then use "max-width" for it's breakpoints at smaller screens. 

3. What does font-size: 62.5% in the html tag do for us when using rem units?
    * Rem units are relative units that base their value off of the root (html) element. Setting the font size in html to 62.5% allows a developer to use REM units in a more human readable way which correlates to pixels. For example 2.3rem would be equivalent to 23px. 

4. How would you describe preprocessing to someone new to CSS?
    * Preprocessing could be thought of as a layer on top of CSS that allows us to group and nest stylings of a web page in ways that vanilla CSS doesn't allow. It makes CSS a lot more manageable in that we can style a site in seperate smaller chunks of code, before bringing it all together in the main CSS file. 

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
    * My farvorite concept in preprocessing is the ability separate CSS into separate LESS files and import them into the main LESS file. It's easier to manage code when it's modular. The concept that gives me the most trouble is mixins, specifically when best to strategically use them. 