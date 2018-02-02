## If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?
 1. Preprocessors are programs that essentially do SOME of the processing to organize data before the program that will do all of the processing.

## What is the command in node package manager (npm) to install LESS globally on your computer?
 2. npm install -g less


## Please provide an example of a mixin you have used in a project this week.
 3.     .simple-hover() {
         &:hover {
            border: 1px solid black;
         }
        }
        button {
            .simple-hover();
        }                       


## What is the difference between fixed layout, adaptive layout, and fluid layout?
 4.  - Fixed layouts do not move and sizing does not change. While they are easier to make, they are not user-friendly when viewing on certain devices.

     - Adaptive layouts are user-friendly and fit in difference screen sizes. The disadvantage of this type is that they are not exactly convenient to make, since you need different layouts for different screen sizes.

     - Fluid layouts allows for percentage width on layout components, which will adjust to the resolution of the user. These webpages are more user-friendly than fixed websites, but can be challenging maintaining the site with respect to different screen resolutions. Also, content with a set width such as videos and images can't be set according to difference screen sizes.


## Why do we need to use the CSS property max-width in a responsive website?
 5.  Simply, it is to prevent the width of the container from becoming larger than the specified max-width.