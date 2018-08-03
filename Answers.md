Comprehension Questions - Responsive Web Design & Preprocessors

1. An adaptive website modifies the styling/layout of a website depending on the device screen size. This is done by using media queries with a max-width property for determining the breakpoint at which to change the layout. A fully responsive website responds to the the size of the screen and positions the elements automatically. This is achieved by allowing the content to be fluid and adjust the layout of a website at any given point.

2. In practical terms, being desktop first means that the layout of a website is optimized for a desktop-sized screen. The layout is then modified by using media queries at specific screen size width to better fit a phone device. So the layout is done first to fit a desktop and then modified accordingly to fit smaller screens. On the other hand, being mobile first means optimizing the layout for a mobile device first and then modifiying the layout once the screen size width grows. 

3. It sets the font size to 10px at a global/root level. Rem units refer to the root element for determining size.

4. Preprocessing is like CSS on steroids. It provides some of the functionality of a programming language to CSS. It makes for much more robust and clean CSS code by using programming concepts like variables and mixmins (functions). There is a specific syntax to write the styling which gets compiled into raw CSS.

5. My favorite concept is mixmins because it can reduce all of the repeated CSS code. Using mixmins for styles that are repeated through a website allows me to follow the DRY programming best practice. I had a difficult time understanding how imports work. I thought you had to import the file you are refering to into all of the files that you are working with that. For example, if I am refering to variables in my code in three different files, it makes intuitive sense that I need to import the 'variables.less' file to all of these files. 