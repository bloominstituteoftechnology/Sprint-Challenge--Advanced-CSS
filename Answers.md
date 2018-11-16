1. What is the difference between an adaptive website and a fully responsive website?
Adaptive design creates multiple layouts, one for each anticipated screen size. Responsive design creates one layout and uses media queries to adjust that one design according to screen size. To me, responsive design is the only thing that makes sense in a world where standardization of viewing options is as far from reality as it has ever been. And it will only continue on that path, in my opinion

2. Describe what it means to be mobile first vs desktop first.
Mobile first means designing your page to accommodate the width of a phone screen, typically ~500px, and using mobile queries to adjust for larger screen size. Your query would use max width. Desktop would be the opposite, and your queries would use min-width. 

3. What does font-size: 62.5% in the html tag do for us when using rem units?
It allows 1rem to equal 10px, making the math easier and more intuitive.

4. How would you describe preprocessing to someone new to CSS?
I would say that it allows you to add programmability to the very tedious task of designing the way a web site looks. The use of variables and mixins among other features allows for the creation of much cleaner code with less repetition. It also allows nesting, which makes for much more readable code.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
I like the ability to use variables. Much less looking back and forth. One example: Using a font color. It might look like #fa67a9. No way I can remember that every time I need to use it. So, I’d otherwise have to find that number in my page somewhere every time I needed it. Using a variable allows me to just remember something as simple as @font-color. Mixins, which I think of as akin to functions, allow me to avoid the many typos I would otherwise create trying to type the same code more than once. 


