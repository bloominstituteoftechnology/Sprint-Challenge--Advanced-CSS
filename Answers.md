What is the difference between an adaptive website and a fully responsive website?
- An adaptive website has several designs, usually desktop, mobile, and tablet, that change depending on the screen size of the user by using media queries. A fully responsive website has one main design that is more fluid and uses percenteges as wall as media queries so that no matter the screen size, the website will always look good and never have scrollbars. 


Describe what it means to be mobile first vs desktop first.
- This has to do with where you begin your coding. Mobile first is when you start coding
your mobile version first and then add min-width to media queries to make it responsive. Desktop first you start coding your deskotp vrsion first and then add max-width to media queries to make it responsive. 

What does font-size: 62.5% in the html tag do for us when using rem units?
- This pecentege is placed on html tag so that if affects our whole page's font-size. The main purpose of this is to allow for easy conversion between rems and pixels. Each rem would then be 10px.

How would you describe preprocessing to someone new to CSS?
- Preprocessing gives us a different syntax allows us to have more functionality on our CSS code. We are able to nest selectors within selectors, able to use variables to store things like font colors in them, and able to use mixins to make our code more organized and easier to edit. The way preprocessors work is that we use a different syntax to write our code in a different file type, in our case a .less file type, we then run our preprocessor so that it takes our .less file code with our new syntax and transforms and outputs regular vanilla CSS code to a .css.

What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
- My favorite concept is that fact that I can write a mixin in one place and then I can reuse it in many other places at once. The part that gives me the most trouble is using escapes. 