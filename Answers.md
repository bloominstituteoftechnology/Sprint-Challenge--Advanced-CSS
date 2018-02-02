1.cleaner more readable code
reusable pieces of code, can do math mnipultion based on conditions
sharable snippets and import libraries
solves cross browser compadabilty problems 

SAss
less
Stylus

_1_ If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it? 

    _CSS Preprocessor_ is a program application that gets scripting language and compiles it into browser understandable CSS format. Examples are **LESS**, **SASS** and **Stylus**. It helps programmers to write readable cleaner code. It also facilitates to reuse, math manipultion with conditions and import other libraries. These preprocessors solves cross browser compadabity problems.  

_1_ What is the command in node package manager (npm) to install LESS globally on your computer?
    _$ npm install -g less_

_1_ Please provide an example of a mixin you have used in a project this week.
   
        __mixin__
            .opacity(@opacity: 0.5) {
                -webkit-opacity: @opacity;
                -moz-opacity:    @opacity;
                opacity:         @opacity;
            }

 This mixin has been called from less file as .opacity(0.7); If no arguments passed through, bydefault it uses 0.5 as value. 

 _1_ What is the difference between fixed layout, adaptive layout, and fluid layout?

 **Fixed Layout** :
  *uses px values. No matter what the screen size, resolution all look same. 
 **Adaptive Layout**
 **Fluid Layout**