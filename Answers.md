1. What is the difference between an adaptive website and a fully responsive website?
    * Adaptive website is basically still a fixed website, and it only adjusts with its breakpoints. Breakpoints are the multiple versions of the webpage that you are building. They may be for tablet, mobile view or any device with a different screen sizes. So basically, adaptive website has more than one layout design. While a responsive website, it's more flexible than the adaptive website that it provides more good viewing experience no matter what screen size of the device you are seeing it on.

2. Describe what it means to be mobile first vs desktop first.
    * Mobile first is when your base css style is for mobile design. So you start first designing the mobile design then up to the desktop design. Vice-versa on the desktop first.

3. What does font-size: 62.5% in the html tag do for us when using rem units?
    * Because the default font size of most browsers is 16px and when we convert 16px to rem, it’s 1rem. So other pixel values have weird decimal numbers when converted to rem. So to simplify, we can set the default font size on our html as 10px which is 62.5 in percent. (We use % because % is a responsive unit. It adapts to the screen size of the device). And so when we convert 10px to rem, it’s now the new 1rem.

4. How would you describe preprocessing to someone new to CSS?
    * Preprocessing is a new way to organize and help maintain readability to your CSS styles. As you design more web pages, you will have a lot of lines of CSS code and that will be too confusing. So preprocessors are to the rescue in maintaining and organizing your styles. How it works is that you style your web pages using your chosen preprocessor then after you made changes, the compiler (which is the one that does the “magic” and amazing stuff in the background) compiles or collect all your preprocessor codes and convert them to a one giant single CSS file.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
    * My favorite concept right now is nesting because you can mirror your HTML file and your styling. It helps me track my selectors and organize my styles. I also like mixins, but I'm still getting used to its full potential so it’s my top 2 favorite. The least favorite is the escaping, because escaping wants to help you and at the same time not helpful at all. lol like for example, it wants you to write less when you set your media queries, but it didn’t fully help you writing less.