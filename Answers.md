1. What is the difference between an adaptive website and a fully responsive website?
An adaptive webite has different fixed layouts for devices of varying sizes and chooses which layout to display once it detects the size screen you're using. A fully responsive layout, however, uses media queries to fit whichever screen it is displayed on at all times. 

2. Describe what it means to be mobile first vs desktop first.
Designing a website mobile or desktop first refers to the way you write your main code (not the code in the media queries). This means that the layout for the website was originally designed for either a phone or a desktop first, and you would need to use media queries (min-width for mobile first and max-width for desktop first) to allow the website to then fit the screen of either a desktop or phone.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?
Normally rem is equal to 16px, but this can be a difficult number to deal with. Setting the font-size to 62.5% allows us to have 1 rem equal to 10px, which is much more manageable and easy to convert. 

4. How would you describe preprocessing to someone new to CSS?
A preprocessor gives us abilities to code that aren't available to us when just using CSS. You need a language to write the code (in our case LESS), you need a compiler that converts this code (Node), and normal CSS is where this code is outputted from the compiler. It may seem like more work, but preprocessors give us the ability to nest and create functions, all of which aren't possible in normal CSS. 

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
Nesting is my favorite concept. It makes my CSS much more manageable and easier to read. Mixins give me the most trouble, but I see the benefit and am sure they will come in handy to me. 