1. If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?

+ I would describe a preprocessor as a text file written in its own syntax that when run through a compiler is translated into another programming language. Preprocessors are often used to eliminate the inefficiencies that exist if coding in the language that it is being translated into.

2. What is the command in node package manager (npm) to install LESS globally on your computer?

+ npm install - g less

3. Please provide an example of a mixin you have used in a project this week. 

+ In variables.less:

    .rotate (@deg) {
	    -webkit-transform: rotate(@deg);
	    -moz-transform: 	 rotate(@deg);
	    -ms-transform: 		 rotate(@deg);
	    -o-transform: 		 rotate(@deg);
        }

+ In index.less:

    .logo {
    .rotate(-10deg);
    }

4. What is the difference between fixed layout, adaptive layout, and fluid layout?

+ Fixed layout is static with a fixed width in pixels. This means that the container of the website cannot move. The drawback to this approach is that it will not adjust for screen sizes below the designated fixed pixel width. So, a user will end up having a website that they must scroll horizontally as well as vertically if adjusted below this width thus limiting the accessibility to the website.

+ An adaptive layout basically plays off a fixed layout but instead of one fixed layout, it has multiple fixed widths that 'activate' when the screen reaches a certain size. This method utilizes breakpoints in the code that allows for the website to adjust depending on the user's device. There is major advantage to this approach in that it makes a website more accessible to more users. However, a designer must take care in ensuring that the breakpoints and designs operate correctly when every screen size is reached.

+ Fluid layouts operates with widths based off percentages instead of pixels. This allows for the width to stay the same no matter the size of the user's screen. While this is cool, as the screen gets to a certain size, elements such as columns can become unreadable as they try to fit smaller spaces. Likewise, there could be too much space if a larger screen size is introduced. So, this approach would be difficult to design in some cases.

5. Why do we need to use the CSS property max-width in a responsive website?

+ The max-width property is used in responsive website design because when a breakpoint is hit, the website needs to fill the screen of the new dimensions. This allows it adjust fully to the new dimensions of whatever screen size.