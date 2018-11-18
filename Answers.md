1. Adaptive websites are specific sizes based on the viewport width. Responsive websites adjust throughout each pixel of the viewports width. In my own words.. I would consider adaptive websites in code like this: `button{ width: 50px }` and I’d consider responsive websites as the following: `button{ width: 50% }`.
2.  Mobile first designs are built as suggested as the title, Mobile first. So all of the styling in CSS would assume the viewport is a mobile device and display it as such. Desktop first would be just the opposite. In mobile first you would use the @media query to change the display once the display reaches the desktop width you defined and desktop would use the exact opposite of that.
3. `font-size: 62.5%` sets the standard font size for the document at 10px. This allows us to use `rem` units with the power of 10 making it easier to understand the pixel size of an element assigned with rem.
4. Preprocessng: Adds more functionality to your CSS code. This is done by compiling your preproccessed code into CSS.
* Preprocessing adds more funcunality to your CSS code by allowing you to store standard values across multiple elements.
* ALL of your preproccesing code will eventually evaluate to vanilla CSS.
   * The way it’s rendered is as follows: `LESS -> JavaScript compiler(formats code into CSS) -> CSS(Vanilla)
* Makes it easier to change site-wide elements.
5. Favorite:
* I really enjoy creating mixins. Since I’m familiar with JavaScript, this allows me to think about my code like I’m creating a function. It also allows me to re-use code. I really like that I can easily create an animation with a mixin and can apply that to any element I want, especially since I don’t enjoy writing typically animation code.
* I don’t like variables. I find it hard to use the variables in CSS since I feel like anything I would do in a variable, I could do in a mixin and it would be more descriptive.