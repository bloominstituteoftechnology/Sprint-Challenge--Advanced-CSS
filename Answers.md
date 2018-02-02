#Question 1
## If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?

I would say its a shorthand syntax that automatically expands to regular css after compilation.  Allows one to approach a large project with ease and confidence.

#Question 2
## What is the command in node package manager (npm) to install LESS globally on your computer?

npm install -g less

#Question 3
## Please provide an example of a mixin you have used in a project this week.

``` less
.animation (@name, @duration: 300ms, @delay: 0, @ease: ease) {
	-webkit-animation: @name @duration @delay @ease;
	-moz-animation:    @name @duration @delay @ease;
	-ms-animation:     @name @duration @delay @ease;
}
```

It just conveniently applies vendor prefixes to run css animations.

#Question 4
## What is the difference between fixed layout, adaptive layout and fluid layout?

A fixed layout doesnt change at all with screen size, while and adaptive one changes at set breakpoints (ie from desktop to mobile).  However a fluid layout adjusts dynamically whenever the screen changes, small incriments or not.

#Question 5
## Why do we need to use the CSS property max-width in a responsive website?

To keep the page from becomming too large, to the point of no longer being user friendly or looking good.