1. What is the difference between an adaptive website and a fully responsive website?

An adaptive website seems to be a bunch of rigid and maybe even fixed designs of a website made for different views. So adapt means make (something) suitable for a new use or purpose; modify. So to me an adaptive website makes the code suitable based on what it is being viewed on. It chooses the right styles out of a few or even many predefined styles based on the screen size, then applies it to the code. It pretty much stays exactly the same for  a group of screen sizes until the media query tells it the screen size has changed and it needs to adapt to be viewed better.

Responsive website is a mix of a fluid website and an adaptive website. Responsive means reacting quickly and positively. A responsive website loads quickly when compared to an adaptive website and uses percentages and media queries to change based on the view. If it has more room, it responds by spreading out. It responds to it environment and flows with the growing and shrinking. It constantly tries to fit your screen and be seen better. The media query just lets it know you can when to make the biggest response.
While both take advantage of the use of media queires, an adaptive website website is very rigid while responsive adds fluidity.

2. Describe what it means to be mobile first vs desktop first.
So I describe them as Mobile Up and Desktop Down because of the way the styles bleed. When using Mobile up, you define the mobile styles first and grow the style up and out as you go towards a desktop style. Desktop works opposite. You define the broad Desktop styles first and size them down as you go towards the mobile style.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?
62.5% is the unit some very smart (& very appreciated) people came up with to make using REM easier. Since REM uses the Root font size (so whatever the computer default is set to) which is usually 16px, it can be hard to convert without a calculator. 62.5% sets the pixel size to 10 for most computers. This makes converting easier because you basically place a decimal between the 2 digits of the pixel size and add rem at the end. Example (16pix == 1.6rem || 9px == 0.9rem).

4. How would you describe preprocessing to someone new to CSS?
A preprocessor makes writing code more human friendly and converts it to computer friendly syntax for you.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
My favorite concept I would have to say is the Preprocessor. I used to shy away from it because it looked so much like JavaScript and all that nesting did not look fun. Not to mention the LESS documentation. But now that it has been broken down and explained, I have no idea what I was waitng for. It seems like each day, I learn something new that blows my mind and makes me want to sit at my commputer and become some type of coding hermit. 
The concept I have trouble with is refactoring existing fixed, or even just rigid code into responsive code.