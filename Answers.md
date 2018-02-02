## Sprint Challenge - Responsive LESS 

1. If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it? 

    _CSS Preprocessor_ is a program application that gets scripting language and compiles it into browser understandable CSS format. Examples are **LESS**, **SASS** and **Stylus**. It helps programmers to write readable cleaner code. It also facilitates to reuse, math manipultion with conditions and import other libraries. These preprocessors solves cross browser compadabity problems.  

1. What is the command in node package manager (npm) to install LESS globally on your computer?
    
    _$ npm install -g less_

1. Please provide an example of a mixin you have used in a project this week.
   
        __mixin__
            .opacity(@opacity: 0.5) {
                -webkit-opacity: @opacity;
                -moz-opacity:    @opacity;
                opacity:         @opacity;
            }

     This mixin has been called from less file as .opacity(0.7); If no arguments passed through, bydefault it uses 0.5 as value. 

 1. What is the difference between fixed layout, adaptive layout, and fluid layout?

    **Fixed Layout** :  Uses px values and fixed width. No matter what the screen size, resolution all look same. 

    **Adaptive Layout** :   Uses em values. Adjusts font sizes based on view port.

    **Fluid Layout**:    Uses percentage values. View will be adjusted for each user.

1. Why do we need to use the CSS property max-width in a responsive website?
    
    To resize the contents based on device view port at the pixel and below. Max-width helps increasing width 100% in fluid layouts.
